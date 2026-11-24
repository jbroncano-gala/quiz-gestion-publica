const PREGUNTAS = [
  // NIVEL BÁSICO (Preguntas 1 a 6)
  {
    id: 1,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Cuáles son los cinco elementos fundamentales que componen la estructura de un Plan Estratégico? (Marque las alternativas correctas)",
    opciones: [
      "Visión y Misión",
      "Objetivos empresariales/organizacionales y Estrategia",
      "Áreas funcionales (Marketing, Operaciones, RRHH, Contabilidad y Finanzas)",
      "Únicamente el flujo de caja proyectado",
      "Exclusivamente el manual de sanciones disciplinarias"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 2,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "Según la metodología SMART para formular objetivos, ¿qué atributos debe cumplir todo objetivo bien planteado? (Marque las alternativas correctas)",
    opciones: [
      "Específico (Specific) y Medible (Measurable)",
      "Alcanzable (Achievable) y Relevante (Relevant)",
      "Acotado en el tiempo (Timed)",
      "Ambiguo e indefinido en su plazo",
      "Incuantificable y subjetivo"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 3,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Cuáles son las tres estrategias competitivas genéricas planteadas por Michael Porter? (Marque las alternativas correctas)",
    opciones: [
      "Liderazgo en costos",
      "Diferenciación",
      "Enfoque",
      "Seguidor a distancia",
      "Ataque de guerrilla"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 4,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "En el modelo del proceso de marketing, ¿cuáles son las cinco etapas secuenciales para estructurar el plan de marketing? (Marque las alternativas correctas)",
    opciones: [
      "Definición del mercado y Segmentación",
      "Posicionamiento",
      "Estrategia competitiva de marketing y Marketing Mix",
      "Liquidación de activos y cierre de planta",
      "Auditoría tributaria y contabilidad gubernamental"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 5,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "Además de las 4 'Ps' tradicionales (Producto, Precio, Plaza y Promoción), ¿qué tres variables adicionales se incorporan en la mezcla de marketing de servicios (7 'Ps')? (Marque las alternativas correctas)",
    opciones: [
      "Personal",
      "Procesos",
      "Proactividad",
      "Patentes industriales",
      "Presupuesto público"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 6,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Sobre qué cuatro aspectos fundamentales se desarrollan los objetivos del Plan de Operaciones? (Marque las alternativas correctas)",
    opciones: [
      "Costos y Calidad",
      "Flexibilidad",
      "Tiempos de entrega",
      "Especulación bursátil",
      "Publicidad masiva en televisión"
    ],
    correctas: [0, 1, 2]
  },

  // NIVEL INTERMEDIO (Preguntas 7 a 16)
  {
    id: 7,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué características definen correctamente a la Visión y a la Misión de una empresa? (Marque las alternativas correctas)",
    opciones: [
      "La Visión es el sueño común creado por la Alta Dirección que expresa el futuro deseado de la empresa",
      "La Misión es la razón de ser del negocio y define quiénes somos, qué necesidad satisfacemos y a qué clientes atendemos",
      "La Misión debe ser amplia, concreta, motivadora y posible",
      "La Visión describe únicamente las tareas operativas de la semana actual",
      "La Misión se redacta siempre en tiempo futuro ('Llegaremos a ser...') y la Visión en presente"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 8,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Respecto a las políticas empresariales y su función dentro de la organización, ¿qué afirmaciones son correctas? (Marque las alternativas correctas)",
    opciones: [
      "Son normas específicas, protocolos o marcos de acción dentro de los cuales se desarrolla la estrategia",
      "Deben poseer tres características clave: consistencia, flexibilidad y claridad",
      "Rigen la forma de actuar del personal en todos los niveles jerárquicos y deben comunicarse constantemente",
      "Son rígidas e inflexibles ante cualquier situación excepcional",
      "Aplican exclusivamente a los accionistas y no al personal operativo"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 9,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En la Matriz de Ansoff (Estrategias de crecimiento), ¿cómo se combinan productos y mercados en cada cuadrante? (Marque las alternativas correctas)",
    opciones: [
      "Penetración de mercados: productos actuales en mercados actuales",
      "Desarrollo de nuevos productos: productos nuevos en mercados actuales",
      "Diversificación: productos nuevos en mercados nuevos (mayor nivel de riesgo)",
      "Desarrollo de nuevos mercados: productos nuevos en mercados actuales",
      "Diversificación: productos actuales en mercados actuales (menor nivel de riesgo)"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 10,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué diferencia al 'mercado potencial' del 'mercado objetivo' en la definición de mercado? (Marque la respuesta correcta)",
    opciones: [
      "El mercado potencial tiene deseo y capacidad económica para adquirir el producto; el mercado objetivo es la parte específica seleccionada tras segmentar",
      "El mercado objetivo es toda la población mundial y el mercado potencial son solo los clientes actuales",
      "El mercado potencial no cuenta con capacidad económica, mientras que el mercado objetivo sí",
      "Ambos conceptos significan exactamente lo mismo y no requieren segmentación",
      "El mercado objetivo se refiere únicamente a los proveedores de insumos"
    ],
    correctas: [0]
  },
  {
    id: 11,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En la segmentación de mercados, ¿qué variables corresponden a las dimensiones psicográfica y conductual respectivamente? (Marque las alternativas correctas)",
    opciones: [
      "Psicográfica: clase social, estilo de vida y personalidad",
      "Conductual: ocasión o momento de uso, beneficios buscados y nivel de lealtad a la marca",
      "Conductual: tasa de uso (no usuarios, usuarios esporádicos, usuarios habituales)",
      "Psicográfica: clima, densidad poblacional y región geográfica",
      "Conductual: estatura, peso y estado civil"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 12,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Según Kotler y Singh, ¿qué estrategias competitivas en marketing puede asumir una empresa según su posición frente a la competencia? (Marque las alternativas correctas)",
    opciones: [
      "Líder de mercado (expande el mercado total y protege su cuota con innovación continua)",
      "Retador (ataca al líder o competidores mediante estrategias frontal, al flanco, cerco, evasión o guerrilla)",
      "Seguidor (cercano, a distancia o selectivo) y Nicho de mercado",
      "Monopolio estatal obligatorio",
      "Estrategia de liderazgo en costos exclusivamente"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 13,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el Ciclo de Vida de un Producto, ¿qué ocurre durante las etapas de Introducción y Madurez respectivamente? (Marque las alternativas correctas)",
    opciones: [
      "En Introducción el producto aún no es rentable y prácticamente no hay competidores",
      "En Madurez el mercado está consolidado y el objetivo principal es la rentabilidad",
      "En Declive el producto deja de ser rentable, por lo que debe reinventarse o desaparecer",
      "En Introducción las ventas alcanzan su punto máximo histórico",
      "En Madurez no existe competencia ni necesidad de defender la rentabilidad"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 14,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "De acuerdo con los niveles del producto de Kotler, ¿qué diferencia al 'producto esperado' del 'producto aumentado'? (Marque la respuesta correcta)",
    opciones: [
      "El producto esperado reúne los atributos mínimos que el consumidor espera (ej. puntualidad y limpieza); el aumentado agrega factores extra que diferencian de la competencia",
      "El producto aumentado es la función básica del producto y el esperado son los cambios futuros",
      "El producto esperado es exclusivo para bienes tangibles y el aumentado solo para servicios",
      "El producto aumentado elimina cualquier atributo adicional para reducir costos",
      "No existe diferencia entre producto genérico, esperado y aumentado"
    ],
    correctas: [0]
  },
  {
    id: 15,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En la clasificación de procesos de la empresa dentro del Plan de Operaciones, ¿cómo se distinguen los procesos estratégicos, operativos y de soporte? (Marque las alternativas correctas)",
    opciones: [
      "Procesos estratégicos: definen y controlan las metas, políticas y estrategias de toda la organización",
      "Procesos operativos: generan el producto o servicio que se entrega directamente al cliente externo",
      "Procesos de soporte: apoyan a los procesos operativos y tienen como clientes internos a los propios trabajadores",
      "Procesos de soporte: son los únicos visibles para el cliente final en el punto de venta",
      "Procesos operativos: se limitan exclusivamente a la selección de personal y compras internas"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 16,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Respecto a los enfoques del proceso de producción, ¿qué ejemplos ilustran correctamente cada enfoque? (Marque las alternativas correctas)",
    opciones: [
      "Enfoque en el proceso: bajo volumen y alta variedad (ej. fábrica de mobiliario para empresas)",
      "Enfoque repetitivo: partes o componentes preparados previamente (ej. locales de comida fast food)",
      "Enfoque en el producto: alto volumen y poca variedad (ej. panadería)",
      "Enfoque en el producto: producción artesanal única sin estandarización",
      "Enfoque repetitivo: fabricación exclusiva de obras de arte irrepetibles"
    ],
    correctas: [0, 1, 2]
  },

  // NIVEL AVANZADO (Preguntas 17 a 20)
  {
    id: 17,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Caso de fijación de precios: Una empresa lanza un producto innovador y diferenciado fijando inicialmente un precio alto para maximizar utilidades, mientras que otra ingresa a un mercado de consumo masivo con un precio más bajo que la competencia para lograr alto volumen. ¿Qué estrategias de precios aplican respectivamente? (Marque la respuesta correcta)",
    opciones: [
      "La primera aplica estrategia de Descreme y la segunda aplica estrategia de Penetración",
      "La primera aplica estrategia de Supervivencia y la segunda estrategia de Cosecha",
      "Ambas aplican estrategia de mantenimiento de la situación actual",
      "La primera aplica estrategia de Penetración y la segunda de Descreme",
      "Ambas aplican precios regulados por monopolio"
    ],
    correctas: [0]
  },
  {
    id: 18,
    nivel: "Avanzado",
    bloom: "Aplicar",
    texto: "En la evaluación de localización mediante el Método de los Factores Ponderados, se evalúa el 'Lugar A' con tres factores críticos: Fuente de abastecimiento (peso 40%, puntuación 90), Cercanía de carretera (peso 30%, puntuación 80) y Disponibilidad de mano de obra (peso 30%, puntuación 70). ¿Cuál es la puntuación ponderada total del Lugar A? (Marque la respuesta correcta)",
    opciones: [
      "81.0 puntos (36.0 + 24.0 + 21.0)",
      "240.0 puntos",
      "80.0 puntos",
      "75.5 puntos",
      "68.0 puntos"
    ],
    correctas: [0]
  },
  {
    id: 19,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "En la gestión del mantenimiento productivo dentro del Plan de Operaciones, ¿qué principios sustentan el Mantenimiento Productivo Total (TPM)? (Marque las alternativas correctas)",
    opciones: [
      "Diseñar máquinas fiables, fáciles de manejar y de fácil mantenimiento",
      "Desarrollar planes de mantenimiento preventivo e incluir servicio en el costo de propiedad",
      "Formar a los trabajadores para que manejen y mantengan sus propias máquinas",
      "Esperar a que los equipos fallen por emergencia antes de intervenir (solo mantenimiento correctivo)",
      "Prohibir que los operarios participen en el cuidado básico de sus equipos"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 20,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Analizando herramientas de eficiencia operativa: ¿qué diferencia al Benchmarking del Outsourcing? (Marque las alternativas correctas)",
    opciones: [
      "El Benchmarking compara sistemáticamente cómo se alcanzan los resultados para adoptar mejores prácticas",
      "El Outsourcing encarga a terceros especializados procesos importantes pero no inherentes al core business",
      "El Outsourcing permite concentrarse en el core business, reducir costos operativos y compartir riesgos",
      "El Benchmarking consiste en despedir a todo el personal operativo y cerrar la planta",
      "El Outsourcing prohíbe compartir información clave con el proveedor estratégico"
    ],
    correctas: [0, 1, 2]
  }
];
