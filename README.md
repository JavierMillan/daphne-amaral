# Dra. Daphne Amaral Alemán — sitio

Sitio de demostración para la práctica de ortodoncia de la Dra. Daphne Amaral
Alemán (Guadalajara, colonia Monraz).

**Es una demo.** Los textos legales, el teléfono, la dirección completa y las
fotografías están pendientes de confirmar con la Dra. Nada aquí ha sido
aprobado por ella.

## Qué hay

| Archivo | Qué es |
|---|---|
| `index.html` | La landing |
| `cuestionario.html` | Formulario de precalificación, 9 servicios con preguntas condicionales |
| `assets/marca.css` | Tokens de marca: color, tipografía, espaciado |
| `brand-profile-daphne-amaral.md` | El perfil de marca del que sale todo lo visual |
| `referencia-nudo.md` | Notas sobre nudo.com.mx, referencia para proyectos de menús con pago |

Sin build, sin dependencias. Son archivos estáticos: se abren directo en el
navegador y se sirven tal cual desde GitHub Pages.

## Desarrollo

No hace falta nada instalado. Abre `index.html` en el navegador.

Para probar con un servidor local, por las rutas relativas:

```bash
python -m http.server 8000
```

## Publicación

Cada push a `main` se publica solo. GitHub Pages sirve la raíz del repositorio;
no hay workflow ni paso de compilación.

## Marca

Todo el color y la tipografía salen de `assets/marca.css`, que a su vez viene
del perfil de marca. Dos reglas que conviene no romper:

- **`--marron` es la firma** (monograma, numerales, hairlines) y **`--agua` es
  la acción** (solo CTA y estado seleccionado). Nunca dos elementos en `agua`
  en la misma pantalla.
- **Nunca tipografía script.** Es el marcador genérico del gremio dental.

El resto de las reglas, con su porqué, está en el perfil de marca.

## Pendientes

- Retrato de la Dra. para el hero (hoy hay un marcador tipográfico)
- SVG del monograma DA (hoy se construye con Cormorant)
- Aviso de privacidad conforme a la LFPDPPP — son datos sensibles de salud
- Teléfono, dirección completa y cédula profesional
- Reglas de atención prioritaria del cuestionario: las define la Dra.
- Envío real del formulario (WhatsApp + respaldo en hoja de cálculo)
