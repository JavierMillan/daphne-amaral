/* ============================================================
   Catálogo de servicios — Dra. Daphne Amaral Alemán
   Una sola fuente para la landing (index.html) y la entrevista
   (entrevista.html). Si la Dra. cambia un nombre o agrega un
   servicio, se cambia aquí y aparece igual en las dos páginas.

   nombre  · como se llama en todos lados
   desc    · una línea corta, para las casillas de la entrevista
   detalle · una o dos frases, para la lista de la landing
   ayuda   · explicación opcional del "¿Qué es?" (solo si el
             nombre no se entiende solo)
   tema    · ambiente de la entrevista: 'noche' o 'luz'
   ============================================================ */
window.CATALOGO_DA = {
  grupos: [
    { nombre: 'Ortodoncia', servicios: ['invisalign', 'brackets'] },
    { nombre: 'Salud funcional', servicios: ['sueno', 'atm'] },
    { nombre: 'Odontología general', servicios: ['limpieza', 'resinas'] },
    { nombre: 'Estética', servicios: ['blanqueamiento'] },
    { nombre: 'Para niños', servicios: ['infantil'] },
    { nombre: 'Si no sabes por dónde empezar', servicios: ['integral'] }
  ],
  servicios: {
    invisalign: {
      nombre: 'Invisalign',
      desc: 'Alineadores transparentes',
      detalle: 'Alineadores transparentes. Planificación digital del movimiento, sin brackets.',
      ayuda: 'Es ortodoncia: mueve los dientes con alineadores transparentes que te quitas para comer.',
      tema: 'luz'
    },
    brackets: {
      nombre: 'Brackets',
      desc: 'Ortodoncia convencional',
      detalle: 'Ortodoncia convencional para alineación y problemas de mordida, cuando es la mejor opción del caso.'
    },
    sueno: {
      nombre: 'Respiración y sueño',
      desc: 'Ronquidos, boca abierta al dormir',
      detalle: 'Respiración por la boca, ronquidos y sueño inquieto. Valoración y, si hace falta, trabajo con otro especialista.',
      ayuda: 'Para quien ronca, respira por la boca o despierta cansado. Se revisa junto con la mordida.',
      tema: 'noche'
    },
    atm: {
      nombre: 'Mandíbula (ATM)',
      desc: 'Dolor, ruidos o bloqueos',
      detalle: 'Dolor, chasquidos, bloqueos o dificultad para abrir la boca.',
      ayuda: 'La ATM es la articulación que abre y cierra la boca, justo frente a la oreja.'
    },
    limpieza: {
      nombre: 'Limpieza',
      desc: 'Revisión y prevención',
      detalle: 'Limpieza, revisión de encías y prevención.'
    },
    resinas: {
      nombre: 'Resinas',
      desc: 'Caries o dientes rotos',
      detalle: 'Rellenos del color del diente para caries, dientes rotos o resinas viejas.',
      ayuda: 'Rellenos del color del diente para reparar caries o pedazos rotos.'
    },
    blanqueamiento: {
      nombre: 'Blanqueamiento',
      desc: 'Dientes más blancos',
      detalle: 'Aclarar el tono o quitar manchas, sobre una base sana.',
      tema: 'luz'
    },
    infantil: {
      nombre: 'Odontología infantil',
      desc: 'Desarrollo y mordida',
      detalle: 'Crecimiento y desarrollo dental. Hábitos orales y mordida, a tiempo.'
    },
    integral: {
      nombre: 'Valoración general',
      desc: 'Una revisión completa',
      detalle: 'Si tienes varias molestias o no sabes por dónde empezar.',
      ayuda: 'Si tienes varias molestias o no sabes cuál elegir, empieza por aquí.'
    }
  }
};
