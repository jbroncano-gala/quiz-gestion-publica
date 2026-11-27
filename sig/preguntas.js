const PREGUNTAS = [
  // =========================================================================
  // NIVEL BÁSICO (Preguntas 1 a 6)
  // =========================================================================
  {
    id: 1,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "En una organización, los procesos de negocio se agrupan en áreas funcionales y se integran mediante aplicaciones empresariales. ¿Cuáles de las siguientes son aplicaciones empresariales integradoras? (Marque las alternativas correctas)",
    opciones: [
      "ERP (Planificación de Recursos Empresariales)",
      "SCM (Gestión de la Cadena de Suministro)",
      "CRM (Gestión de Relaciones con el Cliente)",
      "MS-DOS",
      "BIOS"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 2,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Cuáles son los tres procesos de negocio principales del área funcional de Ventas y Marketing? (Marque las alternativas correctas)",
    opciones: [
      "Identificar clientes",
      "Dar a conocer el producto",
      "Vender el producto",
      "Elaborar listas de materiales",
      "Pagar a acreedores"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 3,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Cuáles son los procesos de negocio principales del área de Finanzas y Contabilidad? (Marque las alternativas correctas)",
    opciones: [
      "Pagar a acreedores",
      "Crear estados financieros",
      "Administrar cuentas de efectivo",
      "Ensamblar el producto",
      "Contratar empleados"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 4,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Qué directivo del departamento de sistemas dirige la tecnología y los sistemas de información alineándolos con la estrategia del negocio? (Marque la respuesta correcta)",
    opciones: [
      "CIO (Director de Información)",
      "CSO (Director de Seguridad)",
      "CPO (Director de Privacidad)",
      "CKO (Director de Conocimiento)",
      "CAIO (Director de Inteligencia Artificial)"
    ],
    correctas: [0]
  },
  {
    id: 5,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Qué tipo de comercio electrónico corresponde a transacciones realizadas directamente entre consumidores, como ocurre en eBay o Vinted? (Marque la respuesta correcta)",
    opciones: [
      "C2C (Consumidor a consumidor)",
      "B2B (Empresa a empresa)",
      "B2C (Empresa a consumidor)",
      "B2G (Empresa a gobierno)",
      "C2B (Consumidor a empresa)"
    ],
    correctas: [0]
  },
  {
    id: 6,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "Todo sistema de información está conformado por seis componentes fundamentales. ¿Cuáles de los siguientes corresponden a los componentes tecnológicos del sistema? (Marque las alternativas correctas)",
    opciones: [
      "Hardware y Software",
      "Base de datos",
      "Redes",
      "Reglas de negocio manuales",
      "Clima organizacional"
    ],
    correctas: [0, 1, 2]
  },

  // =========================================================================
  // NIVEL INTERMEDIO (Preguntas 7 a 16)
  // =========================================================================
  {
    id: 7,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el flujo interfuncional de cumplimiento de un pedido entre áreas (Ventas, Contabilidad y Producción), ¿qué actividad realiza Contabilidad inmediatamente después de que Ventas envía el pedido? (Marque la respuesta correcta)",
    opciones: [
      "Verificar y aprobar el crédito del cliente",
      "Ensamblar y despachar el producto",
      "Trasladar la mercadería hasta el cliente",
      "Elaborar la lista de materiales de planta",
      "Evaluar el desempeño del personal de ventas"
    ],
    correctas: [0]
  },
  {
    id: 8,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿En qué se diferencian los Sistemas de Información Gerencial (MIS) de los Sistemas de Apoyo a la Decisión (DSS) en marketing? (Marque las alternativas correctas)",
    opciones: [
      "Los MIS resumen datos de los TPS en informes periódicos con preguntas definidas de antemano",
      "Los DSS combinan datos y modelos analíticos para responder preguntas '¿qué pasa si...?' ante problemas únicos",
      "Los DSS reemplazan por completo a los TPS en el registro de ventas diarias",
      "Los MIS solo los utiliza la alta dirección para proyecciones a diez años",
      "Ninguno de los dos utiliza datos provenientes de clientes o ventas"
    ],
    correctas: [0, 1]
  },
  {
    id: 9,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Cuáles de las siguientes capacidades corresponden a un sistema de Gestión de Relaciones con el Cliente (CRM)? (Marque las alternativas correctas)",
    opciones: [
      "Automatización de ventas (prospectos, cotizaciones y enfoque en clientes rentables)",
      "Servicio al cliente (eficiencia en centros de llamadas y mesas de ayuda)",
      "Marketing (análisis de campañas para atraer y retener clientes)",
      "Control de mantenimiento preventivo de maquinaria pesada",
      "Cálculo de impuestos y depreciación de activos fijos"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 10,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Respecto a los modelos 'push' y 'pull' en la cadena de suministro, ¿qué afirmaciones son verdaderas? (Marque las alternativas correctas)",
    opciones: [
      "El modelo push se impulsa por pronósticos o estimaciones de la demanda (producir para inventario)",
      "El modelo pull se guía por pedidos o compras reales del cliente (producir bajo pedido)",
      "En el modelo pull la información fluye únicamente del fabricante hacia el cliente",
      "El modelo push elimina por completo la necesidad de mantener inventarios",
      "Ambos modelos funcionan exactamente con el mismo flujo de información"
    ],
    correctas: [0, 1]
  },
  {
    id: 11,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el área de Finanzas y Contabilidad, ¿cómo fluye la información desde los sistemas operativos hasta los estados financieros? (Marque las alternativas correctas)",
    opciones: [
      "El sistema de nómina y otros TPS contables alimentan el Libro Mayor",
      "El Libro Mayor consolida ingresos y gastos para generar el Estado de Resultados y el Balance General",
      "Los informes financieros se elaboran sin registrar transacciones en el Libro Mayor",
      "El sistema de nómina envía directamente los cheques al cliente externo",
      "Las cuentas por cobrar se gestionan fuera de la base de datos central del ERP"
    ],
    correctas: [0, 1]
  },
  {
    id: 12,
    nivel: "Intermedio",
    bloom: "Recordar",
    texto: "¿Qué métodos financieros se utilizan para evaluar inversiones en sistemas de información? (Marque las alternativas correctas)",
    opciones: [
      "Valor Presente Neto (VPN) y Tasa Interna de Retorno (TIR)",
      "Rendimiento contable / Retorno de la Inversión (ROI)",
      "Método de recuperación (tiempo en que se recupera la inversión)",
      "Índice de rotación de inventarios físicos",
      "Prueba ácida de liquidez corriente"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 13,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Cuál es la diferencia funcional entre una Intranet y una Extranet empresarial? (Marque las alternativas correctas)",
    opciones: [
      "La Intranet es un sitio web interno que facilita la integración y el flujo de información dentro de la empresa",
      "La Extranet es un sitio accesible a proveedores y socios externos para coordinar suministros",
      "La Extranet es de acceso público abierto para cualquier usuario sin autenticación",
      "La Intranet sustituye por completo al internet comercial en todo el país",
      "Ambas cumplen exactamente la misma función sin distinguir usuarios internos o externos"
    ],
    correctas: [0, 1]
  },
  {
    id: 14,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el departamento de Sistemas de Información, ¿qué funciones cumplen el CSO y el CPO respectivamente? (Marque las alternativas correctas)",
    opciones: [
      "El CSO gestiona la política de seguridad de la información",
      "El CPO vela por el cumplimiento de las leyes de protección de datos personales y privacidad",
      "El CSO dirige exclusivamente las campañas de marketing digital",
      "El CPO programa el código fuente de las aplicaciones móviles",
      "Ambos roles se encargan únicamente de reparar hardware de oficina"
    ],
    correctas: [0, 1]
  },
  {
    id: 15,
    nivel: "Intermedio",
    bloom: "Recordar",
    texto: "Según Kenneth C. Laudon, ¿cuáles de las siguientes son características únicas del comercio electrónico frente al comercio tradicional? (Marque las alternativas correctas)",
    opciones: [
      "Ubicuidad y alcance global",
      "Estándares universales y riqueza multimedia",
      "Interactividad, densidad de información y personalización",
      "Dependencia exclusiva de horarios físicos de oficina",
      "Aumento obligatorio de intermediarios comerciales"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 16,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Cómo se distinguen los datos, la información y el conocimiento en la cadena de valor de un sistema de información? (Marque las alternativas correctas)",
    opciones: [
      "Los datos son hechos sin procesar y sin contexto (ej. código de curso, nota 14)",
      "La información son datos organizados con significado y el conocimiento es información aplicada a una decisión",
      "Datos e información significan exactamente lo mismo en la gestión gerencial",
      "El conocimiento se genera automáticamente sin intervención ni interpretación humana",
      "Los datos solo existen en formato impreso mientras que el conocimiento es solo hardware"
    ],
    correctas: [0, 1]
  },

  // =========================================================================
  // NIVEL AVANZADO (Preguntas 17 a 20)
  // =========================================================================
  {
    id: 17,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Caso Efecto Látigo: Una pequeña variación en la demanda del consumidor final se amplifica progresivamente hacia el minorista, distribuidor, fabricante y proveedor. ¿Qué solución tecnológica mitiga este fenómeno? (Marque la respuesta correcta)",
    opciones: [
      "Implementar sistemas SCM y ERP integrados que compartan datos reales de pedidos, inventarios y demanda en tiempo real",
      "Aumentar manualmente las existencias de seguridad sin comunicarse con los demás eslabones",
      "Basar toda la producción exclusivamente en pronósticos aislados bajo un enfoque push rígido",
      "Desconectar los sistemas de ventas de los sistemas de planificación de producción",
      "Ocultar los niveles de inventario a los proveedores estratégicos"
    ],
    correctas: [0]
  },
  {
    id: 18,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Caso Estandarización de ERP (Office Depot y Tasty Baking): ¿Por qué las empresas evitan personalizar excesivamente el código de su sistema ERP? (Marque la respuesta correcta)",
    opciones: [
      "Para mantener la estandarización de procesos, reducir costos de mantenimiento y facilitar futuras actualizaciones",
      "Porque los ERP estandarizados no permiten conectar contabilidad con recursos humanos",
      "Porque personalizar el software impide emitir estados financieros básicos",
      "Porque la base de datos central solo funciona si no tiene reglas de negocio",
      "Porque los sistemas ERP únicamente se aplican en microempresas sin procesos definidos"
    ],
    correctas: [0]
  },
  {
    id: 19,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Caso Borders vs. Amazon aplicado a la adopción actual de Inteligencia Artificial: Borders tercerizó su tienda en línea a Amazon durante siete años y quebró en 2011. ¿Qué tres preguntas clave debe hacerse la gerencia antes de tercerizar una solución tecnológica o de IA? (Marque las alternativas correctas)",
    opciones: [
      "¿Dónde viven los datos y quién puede leerlos sin pedir permiso?",
      "¿Quién dentro de la empresa entiende cómo funciona la solución?",
      "¿Qué pasa si mañana cambias de proveedor?",
      "¿Qué color de logotipo utiliza el proveedor en su portal web?",
      "¿Cómo eliminar por completo el aprendizaje interno de nuestra propia operación?"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 20,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "En la gestión estratégica mediante sistemas de información (ej. matrícula universitaria en línea y aula virtual), ¿cómo se generan ventajas competitivas sostenibles? (Marque las alternativas correctas)",
    opciones: [
      "Liderazgo en costos al automatizar procesos repetitivos y reducir papel y colas",
      "Diferenciación y vínculos con clientes mediante servicios digitales 100 % en línea y seguimiento de trámites",
      "Aislando las bases de datos de cada oficina para evitar que compartan información",
      "Eliminando los controles de retroalimentación para acelerar los registros sin validar",
      "Sustituyendo a las personas capacitadas y los procesos claros únicamente con compra de hardware"
    ],
    correctas: [0, 1]
  }
];
