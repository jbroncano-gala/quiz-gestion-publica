const PREGUNTAS = [
  // NIVEL BÁSICO (Preguntas 1 a 6)
  {
    id: 1,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "Según la Sesión 6, ¿cuáles son las tres funciones principales del área de Ventas y Marketing? (Selecciona 3)",
    opciones: ["Identificar clientes", "Dar a conocer el producto", "Vender el producto", "Elaborar listas de materiales", "Pagar a acreedores"],
    correctas: [0, 1, 2]
  },
  {
    id: 2,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "En el mapa conceptual de sistemas funcionales (Sesión 6), ¿qué aplicaciones empresariales integran los procesos de negocio? (Selecciona 3)",
    opciones: ["ERP", "SCM", "CRM", "MS-DOS", "BIOS"],
    correctas: [0, 1, 2]
  },
  {
    id: 3,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "De acuerdo con la Sesión 7, ¿cuáles son las funciones del área de Finanzas y Contabilidad? (Selecciona 3)",
    opciones: ["Pagar a acreedores", "Crear estados financieros", "Administrar cuentas de efectivo", "Ensamblar el producto", "Reclutar candidatos"],
    correctas: [0, 1, 2]
  },
  {
    id: 4,
    nivel: "Básico",
    bloom: "Comprender",
    texto: "¿Qué sistema gerencial (Sesión 7) atiende a la alta gerencia para abordar asuntos estratégicos y tendencias a largo plazo (ej. niveles de empleo en 5 años)?",
    opciones: ["TPS", "MIS", "DSS", "ESS", "CRM"],
    correctas: [3]
  },
  {
    id: 5,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "Según la Sesión 7, ¿qué directivo dirige la tecnología y los sistemas de información alineándolos con la estrategia del negocio?",
    opciones: ["CIO (Director de Información)", "CSO (Seguridad)", "CPO (Privacidad)", "CKO (Conocimiento)", "Analista de sistemas"],
    correctas: [0]
  },
  {
    id: 6,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "En la clasificación de tipos de comercio electrónico (Sesión 9), ¿cuál corresponde a transacciones entre consumidores (ej. eBay, Vinted)?",
    opciones: ["B2C", "B2B", "C2C", "B2G", "C2B"],
    correctas: [2]
  },

  // NIVEL INTERMEDIO (Preguntas 7 a 16)
  {
    id: 7,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el flujo de cumplimiento de un pedido entre áreas (Sesión 6), ¿qué secuencia lógica siguen Ventas, Contabilidad y Producción?",
    opciones: [
      "Ventas genera pedido → Contabilidad verifica/aprueba crédito → Producción ensambla y despacha → Contabilidad emite factura",
      "Producción ensambla → Ventas aprueba crédito → Contabilidad genera pedido → Transporte factura",
      "Contabilidad emite factura → Producción compra materiales → Ventas verifica crédito",
      "Ventas despacha → Contabilidad ensambla → Producción aprueba crédito",
      "Todas las áreas operan de forma aislada sin compartir datos"
    ],
    correctas: [0]
  },
  {
    id: 8,
    nivel: "Intermedio",
    bloom: "Aplicar",
    texto: "En el informe MIS de ventas de limpiador de alfombras 2024 (Sesión 6), ¿qué regiones superaron sus ventas planeadas (razón Real frente a plan > 1,00)? (Selecciona 2)",
    opciones: ["Sur (1,01)", "Medio Oeste (1,06)", "Noreste (0,85)", "Oeste (0,91)", "Ninguna región"],
    correctas: [0, 1]
  },
  {
    id: 9,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué diferencia al modelo de producción 'Pull' frente al modelo 'Push' (Sesión 6)? (Selecciona 2)",
    opciones: [
      "El modelo Pull es impulsado por pedidos o compras reales del cliente",
      "En el modelo Pull el flujo de información va del minorista hacia los proveedores",
      "El modelo Pull se basa únicamente en pronósticos sin pedidos reales",
      "El modelo Push significa 'vender lo que fabricamos bajo pedido'",
      "En el modelo Push el cliente diseña el producto antes de fabricarlo"
    ],
    correctas: [0, 1]
  },
  {
    id: 10,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En la Sesión 7 (Del TPS contable al Libro Mayor), ¿qué informes financieros principales se generan a partir del Libro Mayor? (Selecciona 2)",
    opciones: ["Estado de resultados", "Balance general", "Hoja de tiempo del empleado", "Lista de materiales", "Orden de despacho"],
    correctas: [0, 1]
  },
  {
    id: 11,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Según la Sesión 7, ¿qué diferencia a una 'Intranet' de una 'Extranet'?",
    opciones: [
      "La Intranet es un sitio interno para empleados y la Extranet es accesible a proveedores y socios externos",
      "La Extranet es exclusiva para gerentes y la Intranet es pública para cualquier cliente",
      "La Intranet solo funciona sin internet y la Extranet es un sistema operativo",
      "Ambas son idénticas y no tienen control de acceso",
      "La Extranet reemplaza al libro mayor contable"
    ],
    correctas: [0]
  },
  {
    id: 12,
    nivel: "Intermedio",
    bloom: "Aplicar",
    texto: "En la evaluación financiera de inversiones en sistemas (Sesión 7), ¿qué indicador representa la tasa de descuento que hace el Valor Presente Neto (VPN) igual a cero?",
    opciones: ["Tasa Interna de Retorno (TIR)", "Método de recuperación", "Liquidez general", "Prueba ácida", "Rotación de inventarios"],
    correctas: [0]
  },
  {
    id: 13,
    nivel: "Intermedio",
    bloom: "Recordar",
    texto: "En la evolución de interfaces y software (Sesión 9), ¿qué institución investigó y creó los prototipos de la GUI, ventanas y mouse antes de que Apple Macintosh los popularizara?",
    opciones: ["Xerox PARC", "General Electric", "Kodak", "IBM", "CERN"],
    correctas: [0]
  },
  {
    id: 14,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Según la clasificación de modelos de negocio en internet de Laudon (Sesión 9), ¿qué modelos corresponden a PayPal/Booking.com y a eBay/Mercado Libre respectivamente? (Selecciona 2)",
    opciones: [
      "Intermediario de transacciones (PayPal, Booking.com)",
      "Creador de mercado (eBay, Mercado Libre)",
      "Proveedor de contenido (PayPal)",
      "Portal web (Mercado Libre)",
      "Minorista tradicional (Booking.com)"
    ],
    correctas: [0, 1]
  },
  {
    id: 15,
    nivel: "Intermedio",
    bloom: "Recordar",
    texto: "¿Cuáles de las siguientes forman parte de las siete características únicas del comercio electrónico según Laudon (Sesión 9)? (Selecciona 3)",
    opciones: ["Ubicuidad y alcance global", "Estándares universales y riqueza", "Interactividad, densidad de información y personalización", "Asimetría de información y monopolio local", "Horario restringido y alcance únicamente nacional"],
    correctas: [0, 1, 2]
  },
  {
    id: 16,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En los mecanismos de seguridad y confianza del comercio electrónico (Sesión 9), ¿qué funciones cumplen el cifrado TLS y la firma digital? (Selecciona 2)",
    opciones: [
      "El cifrado protege los datos en tránsito",
      "La firma digital garantiza identidad e integridad",
      "El cifrado reemplaza la logística de última milla",
      "La firma digital elimina la necesidad de autenticación",
      "Ambos sirven exclusivamente para diseñar campañas SEO"
    ],
    correctas: [0, 1]
  },

  // NIVEL AVANZADO (Preguntas 17 a 20)
  {
    id: 17,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Caso Efecto Látigo (Sesión 6): Una pequeña variación en la demanda del cliente se amplifica aguas arriba hacia distribuidores, fabricantes y proveedores. ¿Qué solución tecnológica mitiga este fenómeno?",
    opciones: [
      "Implementar sistemas SCM y ERP que compartan datos reales de demanda e inventarios en tiempo real",
      "Aumentar manualmente las existencias de seguridad sin comunicarse con los minoristas",
      "Pasar de un modelo Pull a un modelo Push basado en pronósticos aislados",
      "Desconectar los sistemas de ventas de los de producción",
      "Eliminar los controles de calidad en planta"
    ],
    correctas: [0]
  },
  {
    id: 18,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Caso ERP y estandarización (Sesión 7 - Office Depot y Tasty Baking): ¿por qué las empresas evitan personalizar excesivamente el código de su ERP?",
    opciones: [
      "Para mantener la estandarización de procesos, reducir costos de mantenimiento y facilitar actualizaciones",
      "Porque los ERP no permiten integrar finanzas con recursos humanos",
      "Porque la personalización impide generar el balance general",
      "Porque los usuarios finales no pueden acceder a la base de datos central",
      "Porque el ERP solo sirve para empresas de menos de 10 empleados"
    ],
    correctas: [0]
  },
  {
    id: 19,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Caso Borders vs. Amazon (Sesión 9): Borders tercerizó su tienda en línea a Amazon en 2001 y quebró en 2011. ¿Cuál fue el error estratégico central?",
    opciones: [
      "Entregó a un competidor los datos, historiales de compra y el aprendizaje operativo sobre sus propios clientes",
      "Tercerizar cualquier servicio tecnológico siempre lleva a la quiebra",
      "Cobrar tarifas por transacción en lugar de suscripciones",
      "Utilizar protocolos TCP/IP y estándares abiertos",
      "No abrir más tiendas físicas en centros comerciales"
    ],
    correctas: [0]
  },
  {
    id: 20,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Aplicando la lección del caso Borders a la adopción actual de Inteligencia Artificial (Sesión 9), ¿qué preguntas debe hacerse la gerencia antes de firmar un acuerdo con un proveedor? (Selecciona 3)",
    opciones: [
      "¿Dónde viven los datos y quién puede leerlos sin pedir permiso?",
      "¿Quién dentro de la empresa entiende cómo funciona la solución?",
      "¿Qué pasa si mañana cambias de proveedor?",
      "¿Qué color de interfaz prefiere el proveedor?",
      "¿Cómo eliminar por completo al área de TI interna?"
    ],
    correctas: [0, 1, 2]
  }
];
