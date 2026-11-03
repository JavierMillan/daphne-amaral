# Brand Profile — Dra. Daphne Amaral Alemán
<!-- version: 0.1 · updated: 2026-10-30 · status: draft -->
<!-- Fuente: extracción de señales de @dra_daphneamaral (Instagram, 167 pubs / 1434 seg.) -->
<!-- Todo lo marcado (inferido — confirmar) requiere validación de la Dra. antes de producción. -->

## 0. Snapshot
- **Definición:** Ortodoncista con enfoque funcional — no solo alinea dientes, lee cómo respiras, duermes y te sientes. Práctica individual, consultorio propio.
- **Credenciales (de bio):** Ortodoncia UAG · Invisalign Doctor · Medicina Dental del Sueño · Diseño de Sonrisa.
- **Ubicación:** Guadalajara, colonia Monraz.
- **Canales:** Instagram (principal) · Doctoralia (agenda) · web (en construcción — este proyecto).
- **Meta del visual en este proyecto:** convertir. Una sola acción: completar el cuestionario de precalificación.

## 1. Essence (la luz que se refracta)
- **Promesa:** "Tu sonrisa es mucho más que dientes alineados." La ortodoncia como puerta a cómo respiras, duermes y te ves — sin prometer curas.
- **Personalidad:** cercana, didáctica, precisa, serena, profesional-sin-distancia.
- **Arquetipo:** El Sabio (sombra: tecnicismo que aleja — debe traducir siempre, nunca presumir el término).
- **Audiencia:** adultos 25-50 en GDL zona alta, con poder adquisitivo medio-alto; estética-conscientes pero cada vez más atraídos por el ángulo de salud (respiración, sueño, ATM). Estado interno: **duda y cierta vergüenza** — "¿esto que tengo tiene arreglo?", "¿me van a juzgar por no haber ido antes?". También padres evaluando ortodoncia infantil.
- **La ÚNICA sensación que todo visual debe evocar:** *alivio informado*. "Por fin alguien me lo explica sin asustarme, y parece saber exactamente lo que hace."
- **Referencias admiradas (dirección, no copia):** el propio carrusel editorial "Respiras por la boca…" — ese es el norte, no el resto del feed.

## 2. Color system

> **Lectura crítica del feed:** conviven **dos sistemas incompatibles**. El antiguo
> (menta/turquesa `#9EC9C6`-ish, tipografía script, marcos azules, infografías
> saturadas) es el genérico de odontología — lo usa todo el gremio. El nuevo
> (carrusel editorial: crema, serif, monograma DA) es una marca de verdad.
> **Prism adopta el nuevo y jubila el antiguo.** El menta sobrevive, pero
> degradado a acento mínimo, no a protagonista.

- **Dominante (~60%) — Lino** `#F7F4EF` — fondo de todo. Crema cálido del carrusel, no blanco clínico.
- **Secundario (~30%) — Tinta** `#2A2622` — texto, titulares, estructura. Casi-negro cálido, nunca `#000`.
- **Acento (~10%) — Marrón Firma** `#73594A` — monograma, hairlines, numeración editorial ("01"), bordes de card activa. Tomado del lockup DA.
- **Acento de acción — Agua Profunda** `#3A635C` — **solo CTA y estado seleccionado.** Es el menta del feed viejo, bajado a un verde-azulado adulto que sí pasa contraste.

**Neutrales:** muted `#6B6560` · line `#E4DED4` · superficie alterna `#EFEAE2`

**Semánticos (UI):** éxito `#3C6649` · error `#A14034` · alerta-urgencia `#A14034`

**Lógica de armonía:** análoga cálida (lino→marrón) anclada en un complemento frío (agua). ← La calidez es la cercanía de la Dra.; el agua fría es la precisión clínica. Una sola nota fría evita que la marca se vuelva "spa" y pierda autoridad médica.

**Contrastes verificados** (calculados, WCAG 2.1):

| Par | Ratio | Nivel |
|---|---|---|
| Tinta `#2A2622` sobre Lino | **13.68:1** | AAA |
| Muted `#6B6560` sobre Lino | **5.24:1** | AA |
| Marrón `#73594A` sobre Lino | **5.88:1** | AA |
| Blanco sobre Marrón | **6.45:1** | AA |
| Agua `#3A635C` sobre Lino | **6.14:1** | AA |
| Blanco sobre Agua (CTA) | **6.73:1** | AA |
| Error `#A14034` sobre Lino | **5.80:1** | AA |
| Éxito `#3C6649` sobre Lino | **6.00:1** | AA |

> Los tonos originales del feed (`#8A6F5C` marrón, `#4A7C74` menta) daban 4.25:1 y
> 4.32:1 — **reprueban AA para texto normal.** Por eso se oscurecieron. Si la Dra.
> quiere los originales, quedan permitidos solo como fondo de bloque grande o
> decoración, nunca como texto ni borde de campo.

## 3. Typography system
- **Titulares — Cormorant Garamond** (Google Fonts, variable 2 ejes), pesos 300/400/500. Es el serif del carrusel editorial: alto contraste de trazo, elegante, con aire médico-académico sin ser rígido.
- **Cuerpo e interfaz — Jost** (Google Fonts, eje de peso), pesos 300/400/500. Geométrica de los años 20; su `a` de un piso y sus formas circulares conversan con el serif sin competir.
- **Racional del pairing:** serif de alto contraste = autoridad y cuidado estético (Diseño de Sonrisa); geométrica limpia = claridad clínica y legibilidad en formulario. ← El doble rol de la marca: estética **y** salud funcional.
- **Escala:** base 16px · ratio **1.250** (tercera mayor) → 12 · 14 · 16 · 20 · 25 · 31 · 39 · 49
- **Defaults:** cuerpo leading 1.6 · titulares 1.15 · tracking de titular −0.01em · longitud de línea 60-70ch
- **Numeración editorial:** los pasos del formulario se numeran en Cormorant 300 a 39-49px, como el "01" del carrusel. Es la firma tipográfica de la marca.
- **Alineación:** izquierda por defecto. Centrado solo en display ≤6 palabras y pantalla de gracias.
- **Nunca:** script/caligráfica (el feed viejo la usa — es el tell genérico #1 del gremio dental).

## 4. Composition & layout doctrine
- **Grid:** una sola columna, max-width 560px para el formulario, 680px para texto. Base de espaciado 8px.
- **Escala de espaciado:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96
- **Balance:** asimétrico-editorial. Contenido alineado a la izquierda con margen generoso a la derecha — como el carrusel.
- **Estrategia de foco:** salto de escala dramático (≈3×) entre el número de paso y la pregunta; una sola acción primaria visible por pantalla.
- **Espacio negativo:** generoso. En una marca de salud, el aire = calma = confianza. El apretujamiento lee como consultorio saturado.
- **Movimientos firma:**
  1. Numeral grande en Cormorant + hairline marrón de 1px + pregunta debajo.
  2. Monograma DA discreto, abajo a la izquierda, siempre presente, nunca grande.
  3. Hairline como único divisor — nunca cajas con borde completo.
- **Ratios por canal:** web hero 16:9 · IG post 4:5 · story 9:16

## 5. Aesthetic direction
- **Mezcla:** 55% minimalismo editorial / 30% calidez spa-clínico / 15% refinamiento serif-cosmético
- **Textura:** plano con grano de papel sutilísimo en el fondo. Mate siempre. **Cero glossy, cero gradientes de salud-tech, cero sombras azules.**
- **Forma:** soft-geométrica. Radio de esquina **8px** en campos y cards (restringido); píldora 999px solo en chips de selección.
- **Motion:** calmo y eased — 200-280ms, `cubic-bezier(0.4, 0, 0.2, 1)`. Sin bounce. La transición entre pasos es un fade + desplazamiento de 8-12px, nada más. Honrar `prefers-reduced-motion`.

## 6. Imagery direction
- **Medio:** fotografía primero. Retrato de la Dra. en luz natural, ambiente claro, bata o blusa blanca.
- **Tratamiento:** luz natural suave y lateral, sombras abiertas, ligeramente desaturado, grano fino. Temperatura cálida-neutra.
- **Sí:** la Dra. mirando a cámara o en gesto reflexivo; manos; espacio del consultorio con aire; sonrisas reales en contexto.
- **No — guardarraíl fuerte:** **primerísimos planos clínicos de encías, lesiones, extracciones o radiografías en la web de captación.** En el feed funcionan como contenido educativo; en un formulario donde alguien llega con vergüenza y miedo, repelen. Van, si acaso, en una sección de casos aparte y con advertencia.
- **Tampoco:** stock dental genérico (modelo sonriendo con pulgar arriba), íconos 3D de dientes, mascotas con bata.
- **Anclas para IA (`banana`):** "natural soft daylight, warm neutral grade, film grain, shallow depth of field, cream and linen tones, calm editorial portrait" · negativos: "clinical blue, HDR, glossy, stock smile, teal-orange grade, cluttered background"

## 7. Logo & assets
- **Monograma DA** — las dos letras en serif de alto contraste, ligadas, tal como aparecen al pie del carrusel. (inferido — confirmar si existe archivo vectorial)
- **Lockup completo:** monograma + "DRA. DAPHNE AMARAL ALEMÁN" en Jost 300, tracking amplio (0.15em), versalitas.
- **Espacio libre:** igual a la altura del monograma por todos lados. Tamaño mínimo: 32px de alto.
- **No:** recolorear fuera de paleta, estirar, poner sobre foto sin scrim, usar el monograma solo cuando la marca aún no es reconocible.
- **Pendiente:** se necesita el SVG del monograma. Mientras tanto, el código lo construye tipográficamente con Cormorant.

## 8. Voice tie-in
- **Tono en 3 palabras:** didáctica, cercana, precisa.
- **Cómo se ve:** el texto pregunta en segunda persona ("¿Qué te gustaría mejorar?"), nunca en tercera clínica ("Motivo de consulta"). Una idea por pantalla. El término técnico aparece **después** de la explicación, nunca antes — igual que en sus posts ("¿Tengo bruxismo?" y luego qué es).

## 9. Guardrails — la lista de "nunca"
1. **Nunca negro puro `#000`** — siempre Tinta `#2A2622`.
2. **Nunca tipografía script o caligráfica.** Es el marcador genérico del gremio dental.
3. **Nunca más de un acento de acción (Agua) por pantalla.** Si hay dos botones verdes, el formulario ya perdió su jerarquía.
4. **Nunca fotos clínicas crudas en el flujo de captación.**
5. **Nunca el menta claro original (`#9EC9C6`, `#4A7C74`) como texto, borde de campo o CTA** — reprueba contraste.
6. **Nunca prometer que la ortodoncia cura apnea, ronquidos o problemas respiratorios.** Riesgo regulatorio y ético real. El lenguaje es siempre "valorar", "explorar si hay relación", nunca "resolver".
7. **Nunca diagnóstico automático** al terminar el formulario. Es precalificación, no triage clínico.
8. **Nunca más de dos familias tipográficas.**
9. **Nunca centrar texto de cuerpo largo.**
10. **Nunca emojis como íconos de interfaz.** (En IG caption, sí; en la web, no.)

---

## Notas de extracción — incoherencias detectadas en el feed actual

Esto no es crítica al trabajo de la Dra.; es el diagnóstico que justifica el sistema:

1. **Dos marcas en un feed.** El carrusel editorial "Respiras por la boca…" y las infografías menta no parecen de la misma persona. El primero vende autoridad; el segundo compite con cada consultorio del país.
2. **La firma cambia.** "Dra. Daphne Amaral" en script en unas piezas; monograma DA serif en otras. Una marca con dos firmas no acumula reconocimiento.
3. **El diferenciador real está escondido.** Medicina Dental del Sueño es lo raro y valioso de esta práctica — es la línea 3 de la bio y aparece en un carrusel. Debería ser el eje.
4. **El contenido clínico crudo domina la cuadrícula.** Educa a quien ya es paciente; asusta a quien está decidiendo.

**Recomendación de sistema:** todo lo nuevo se produce desde este Profile. El feed viejo no se borra, se deja migrar naturalmente.
