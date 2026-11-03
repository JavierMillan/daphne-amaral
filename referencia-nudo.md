# Referencia: nudo.com.mx

<!-- Observado el 2026-11-03 desde el HTML y JS públicos del sitio. -->
<!-- Solo lectura: no se envió nada, no se tocó el flujo de pago. -->

Café en Morelia (Francisco Márquez 85). Sirve como referencia del patrón
"menú + carrito + pago" que queremos replicar en los proyectos de menús.

## Lo que importa de su arquitectura

**El front es estático y hecho a mano.** Sin framework, sin bundler. Scripts
sueltos con rutas relativas y versionado manual en el query string:

```
script.js?v=386&teas=20261016r9&memes=20261026r2&polloCol=20260917
data/products.js?v=83&...
data/kiosko-config.js?v=97&...
```

Ese `?v=` creciente es cache-busting a mano. Los productos viven en
`data/products.js` — un archivo de datos, no una base de datos ni un CMS.
`script.js` pesa 447 KB sin minificar.

**El backend existe y es propio.** Trece llamadas `fetch` a rutas relativas
bajo `/api/`:

| Ruta | Para qué |
|---|---|
| `/api/payments/create` | crea el pago y devuelve la liga de Mercado Pago |
| `/api/customers/auth/refresh` | sesión del cliente |
| `/api/customers/orders` · `/profile` · `/loyalty` | cuenta y puntos |
| `/api/customers/rewards/preview` | recompensas antes de pagar |
| `/api/public/coupons/preview` | valida cupones |
| `/api/public/order-status` | estado del pedido (tablero) |
| `/api/menu-availability/overrides` · `/events` | agotados en vivo |
| `/api/mobile/cart-handoff` | pasa el carrito al kiosco por QR |
| `/api/tips/config` | propinas |
| `/api/community/photos` · `/upload` | fotos de la comunidad |

Nada de Firebase, Supabase ni servicios de terceros en el markup. El único
dominio externo en el JS es `wa.me`.

## Mercado Pago: cómo está resuelto

No cargan el SDK de Mercado Pago en el navegador. El patrón es el correcto:

1. El front arma el carrito y llama a `POST /api/payments/create`.
2. El servidor crea la *preference* con la llave privada y devuelve una liga.
3. El front abre esa liga ("abrir Mercado Pago").

Los textos de error lo confirman: *"Mercado Pago no regresó una liga de pago"*,
*"si no completaste el pago, puedes volver a abrirlo con «pagar con tarjeta»"*.

**La llave secreta nunca toca el navegador.** Por eso necesitan servidor.

## El flujo completo

Producto → cantidad → `agregar` → carrito → `ir a pagar` → nombre, aquí o para
llevar, al momento o programado → puntos y cupón → **tarjeta** (Mercado Pago) o
**efectivo** (QR que se escanea en un kiosco del local) → confirmación →
tablero de pedidos en `/pantalla-pedidos`.

Detalles propios de un local físico: WiFi en la página, kioscos de autoservicio,
y el handoff de carrito por QR entre teléfono y kiosco.

## La conclusión que nos sirve

**Lo que sí se puede en GitHub Pages:** el menú completo, el carrito, elegir
cantidades, calcular el total, y mandar el pedido armado por WhatsApp. Todo eso
es front estático. Es exactamente lo que hace la landing de la Dra. con el
cuestionario.

**Lo que no:** cobrar con tarjeta. GitHub Pages solo sirve archivos; no corre
código de servidor. Y la llave privada de Mercado Pago no puede ir en el HTML —
quien vea el código fuente la tiene, y puede crear cobros a nombre del negocio.

**La salida más barata para cobrar:** una función serverless (Vercel, Netlify o
Cloudflare Workers, todas con plan gratis) que haga solo lo que hace
`/api/payments/create`. El sitio sigue en Pages; una sola ruta vive aparte.

Alternativa sin servidor: los **links de pago** de Mercado Pago, generados a
mano desde el panel. Sirven para precios fijos; no para un carrito variable.
