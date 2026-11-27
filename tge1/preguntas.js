const PREGUNTAS = [
  // ================= NIVEL BÁSICO (Preguntas 1 a 6) =================
  {
    id: 1,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "En la formulación de objetivos empresariales bajo la metodología SMART, ¿qué significan sus siglas en español? (Marque las alternativas correctas)",
    opciones: [
      "Específico y Medible",
      "Alcanzable y Relevante",
      "Acotado en el tiempo",
      "Subjetivo y Marginal",
      "Automático y Rotativo"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 2,
    nivel: "Básico",
    bloom: "Comprender",
    texto: "¿Qué elemento del plan estratégico representa la 'razón de ser' del negocio y define quiénes somos, la necesidad a satisfacer, los clientes a alcanzar y los productos o servicios a ofertar? (Marque la respuesta correcta)",
    opciones: [
      "La misión",
      "La visión",
      "El flujograma",
      "El organigrama",
      "El benchmarking"
    ],
    correctas: [0]
  },
  {
    id: 3,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "En el diseño de la estructura organizacional, ¿cuáles de los siguientes forman parte de los componentes básicos de una organización? (Marque las alternativas correctas)",
    opciones: [
      "Ápice estratégico",
      "Línea media",
      "Núcleo operativo",
      "Matriz de Ansoff",
      "Mezcla promocional"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 4,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Qué tipo de estructura organizacional se caracteriza por ser 'plana', carecer de divisiones departamentales complejas y concentrar generalmente toda la autoridad en el propietario-director de una micro o pequeña empresa? (Marque la respuesta correcta)",
    opciones: [
      "Estructura simple",
      "Estructura matricial",
      "Burocracia profesional",
      "Forma divisional",
      "Estructura en red"
    ],
    correctas: [0]
  },
  {
    id: 5,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "Cuando se diseña la mezcla de marketing para servicios o bienes intangibles, además de las 4 'P' tradicionales (Producto, Precio, Plaza y Promoción), ¿qué tres variables adicionales se incorporan? (Marque las alternativas correctas)",
    opciones: [
      "Personal",
      "Procesos",
      "Proactividad",
      "Patentes",
      "Presupuesto"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 6,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "En la definición de objetivos y estrategias funcionales del plan de operaciones, ¿cuáles son los cuatro aspectos clave sobre los que se desarrollan dichos objetivos? (Marque las alternativas correctas)",
    opciones: [
      "Costos y calidad",
      "Flexibilidad y tiempos de entrega",
      "Publicidad y relaciones públicas",
      "Reclutamiento y selección",
      "Segmentación y posicionamiento"
    ],
    correctas: [0, 1]
  },

  // ================= NIVEL INTERMEDIO (Preguntas 7 a 16) =================
  {
    id: 7,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Según Michael Porter, ¿cuáles son las tres estrategias competitivas genéricas que puede asumir una empresa para crear una posición defendible dentro de una industria? (Marque las alternativas correctas)",
    opciones: [
      "Liderazgo en costos",
      "Diferenciación",
      "Enfoque",
      "Penetración de mercado",
      "Cosecha"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 8,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Las políticas empresariales son normas específicas o marcos de acción dentro de los cuales se desarrolla la estrategia. ¿Cuáles son sus tres características fundamentales? (Marque las alternativas correctas)",
    opciones: [
      "Consistencia",
      "Flexibilidad",
      "Claridad",
      "Secretismo",
      "Rigidez absoluta"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 9,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "De acuerdo con el modelo de niveles jerárquicos y habilidades administrativas (Robert L. Katz / Idalberto Chiavenato), ¿qué habilidades predominan en el Nivel Institucional (alta dirección) y en el Nivel Operativo, respectivamente? (Marque la respuesta correcta)",
    opciones: [
      "Habilidades conceptuales y de diseño en el nivel institucional; habilidades técnicas en el nivel operativo",
      "Habilidades técnicas en el nivel institucional; habilidades conceptuales en el nivel operativo",
      "Habilidades exclusivamente manuales en ambos niveles",
      "Habilidades contables en el nivel institucional; habilidades de diseño en el nivel operativo",
      "Habilidades humanas únicamente en el nivel operativo"
    ],
    correctas: [0]
  },
  {
    id: 10,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Dentro de los 14 principios de la administración de Henri Fayol, ¿qué establece el principio de 'Unidad de mando'? (Marque la respuesta correcta)",
    opciones: [
      "Cada empleado debe recibir órdenes de un solo superior",
      "Las operaciones con un mismo objetivo deben tener múltiples gerentes",
      "La autoridad debe concentrarse totalmente en el nivel operativo",
      "Los intereses individuales prevalecen sobre los de la empresa",
      "La rotación frecuente del personal mejora la adaptación"
    ],
    correctas: [0]
  },
  {
    id: 11,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En la etapa de definición de mercado del plan de marketing, ¿qué diferencia al mercado potencial del mercado objetivo? (Marque las alternativas correctas)",
    opciones: [
      "El mercado potencial está conformado por posibles clientes que desean el producto y cuentan con condiciones económicas para adquirirlo",
      "El mercado objetivo es la parte del mercado potencial que la empresa selecciona de forma específica para dirigir su producto o servicio",
      "El mercado objetivo siempre abarca al 100 % de la población sin necesidad de segmentación",
      "El mercado potencial excluye a quienes tienen capacidad económica de compra",
      "Ambos conceptos se refieren exclusivamente a los proveedores de insumos"
    ],
    correctas: [0, 1]
  },
  {
    id: 12,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Según Kotler y Singh, ¿cuáles son las cuatro estrategias competitivas de marketing frente a la competencia (que no deben confundirse con las estrategias genéricas de Porter)? (Marque las alternativas correctas)",
    opciones: [
      "Líder de mercado y Retador",
      "Seguidor y Nicho",
      "Liderazgo en costos y Diferenciación",
      "Penetración y Diversificación",
      "Preventivo y Correctivo"
    ],
    correctas: [0, 1]
  },
  {
    id: 13,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Respecto a los niveles del producto (Kotler) y su ciclo de vida, ¿qué enunciados son verdaderos? (Marque las alternativas correctas)",
    opciones: [
      "El producto aumentado incluye factores extra que diferencian al producto de la competencia",
      "En la etapa de madurez el mercado está consolidado y el objetivo principal es la rentabilidad",
      "En la etapa de introducción las ventas son máximas y existe alta rentabilidad inmediata",
      "El producto esperado representa únicamente las mejoras tecnológicas futuras aún no inventadas",
      "En la etapa de declive se elimina cualquier necesidad de reinventar el producto"
    ],
    correctas: [0, 1]
  },
  {
    id: 14,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el diseño de procesos del plan de operaciones, ¿cómo se denominan los procesos que permiten generar el producto o servicio que se entrega directamente al cliente externo? (Marque la respuesta correcta)",
    opciones: [
      "Procesos operativos",
      "Procesos de soporte",
      "Procesos estratégicos",
      "Procesos periféricos",
      "Procesos de descreme"
    ],
    correctas: [0]
  },
  {
    id: 15,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el seguimiento del proceso de producción, ¿qué enfoque se orienta alrededor de los productos para facilitar una producción de alto volumen y poca variedad (como ocurre en una panadería)? (Marque la respuesta correcta)",
    opciones: [
      "Enfoque en el producto",
      "Enfoque en el proceso",
      "Enfoque de personalización masiva",
      "Enfoque de evitación",
      "Enfoque divisional"
    ],
    correctas: [0]
  },
  {
    id: 16,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Sobre las herramientas de eficiencia operativa, ¿qué afirmaciones describen correctamente al Benchmarking y al Outsourcing? (Marque las alternativas correctas)",
    opciones: [
      "El benchmarking es un proceso sistemático para buscar, identificar e introducir mejores prácticas comparando cómo se alcanzan los resultados",
      "El outsourcing permite concentrarse en el core business y encargar a terceros procesos importantes pero no inherentes a la actividad principal",
      "El benchmarking consiste únicamente en copiar los precios más bajos de la competencia sin analizar procesos",
      "El outsourcing exige delegar el núcleo central del negocio y eliminar todo control de calidad",
      "El benchmarking consta de 12 pasos centrados únicamente en publicidad televisiva"
    ],
    correctas: [0, 1]
  },

  // ================= NIVEL AVANZADO (Preguntas 17 a 20) =================
  {
    id: 17,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Una empresa agroindustrial que actualmente vende fideos en el mercado nacional decide lanzar una nueva línea de snacks saludables dirigida a nuevos mercados internacionales. Según la Matriz de Ansoff, ¿qué estrategia de crecimiento está aplicando y qué implicancia conlleva? (Marque las alternativas correctas)",
    opciones: [
      "Estrategia de diversificación (productos nuevos en mercados nuevos)",
      "Representa la alternativa de mayor riesgo dentro de la Matriz de Ansoff",
      "Requiere investigar previamente, construir capacidades y asegurar recursos para no quebrar el negocio",
      "Estrategia de penetración de mercados (productos actuales en mercados actuales)",
      "Estrategia de desarrollo de nuevos mercados con el mismo producto sin cambios"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 18,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Al analizar los factores coyunturales que afectan la estructura organizacional, ¿qué relaciones son correctas? (Marque las alternativas correctas)",
    opciones: [
      "Mientras más dinámico es el entorno externo, más orgánica debe ser la estructura",
      "Mientras más complejo es el entorno externo, más descentralizada tiende a ser la estructura",
      "A mayor tamaño y antigüedad de la empresa, menor formalización tienen sus procesos",
      "La adhocracia se caracteriza por ser rígida, rutinaria y altamente burocrática",
      "La diversificación de mercados elimina la necesidad de crear divisiones"
    ],
    correctas: [0, 1]
  },
  {
    id: 19,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Al integrar decisiones avanzadas de marketing competitivo, fijación de precios y servicios, ¿qué afirmaciones son correctas? (Marque las alternativas correctas)",
    opciones: [
      "La estrategia de precio de descreme busca maximizar utilidades ingresando al mercado con un precio alto para diferenciar el producto",
      "Dentro de la estrategia de retador de mercado, el ataque de guerrilla es usado por compañías pequeñas que aprovechan su flexibilidad para actuar rápido en un nicho",
      "En la variable Proactividad (7P), la evidencia física incluye el ambiente, decoración y uniformes, mientras la evidencia periférica confirma el servicio (ej. boleto o pasaje)",
      "En contabilidad y marketing, el 'Precio' y el 'Precio de venta' (que incluye IGV) significan exactamente lo mismo",
      "La distribución intensiva consiste en colocar el producto en una sola tienda exclusiva por país"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 20,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "En la gestión avanzada del plan de operaciones, ¿qué principios y criterios corresponden al Mantenimiento Productivo Total (TPM) y a la ubicación de instalaciones? (Marque las alternativas correctas)",
    opciones: [
      "El TPM involucra a todos los trabajadores en labores básicas de mantenimiento y promueve formarlos para que manejen y mantengan sus propias máquinas",
      "Entre los métodos utilizados para decidir la ubicación de instalaciones se encuentran el método de los factores ponderados, el centro de gravedad y el método del transporte",
      "En empresas de servicios de consumo directo, la cercanía al consumidor potencial es irrelevante para los ingresos",
      "El TPM prohíbe desarrollar planes de mantenimiento preventivo para reducir costos",
      "El mantenimiento correctivo se aplica de forma rutinaria antes de que ocurra cualquier falla"
    ],
    correctas: [0, 1]
  }
];
