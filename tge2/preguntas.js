const PREGUNTAS = [
  // NIVEL BÁSICO (Preguntas 1 a 6)
  {
    id: 1,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Cuáles son los cuatro estados financieros principales que permiten evaluar la situación y desempeño económico de una empresa? (Marque las alternativas correctas)",
    opciones: [
      "Estado de situación financiera y Estado de resultados",
      "Estado de flujos de efectivo",
      "Estado de cambios en el patrimonio",
      "Inventario físico de almacén diario",
      "Registro de asistencia del personal"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 2,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Qué cinco elementos fundamentales conforman la estructura de los estados financieros para medir tanto la situación financiera como los resultados? (Marque las alternativas correctas)",
    opciones: [
      "Activo, Pasivo y Patrimonio",
      "Ingresos",
      "Gastos",
      "Segmentación psicográfica y posicionamiento",
      "Matriz de Ansoff y fuerzas competitivas"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 3,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "Según el marco conceptual de la información financiera, ¿cuáles son las cuatro características cualitativas que garantizan que los reportes sirvan para decidir? (Marque las alternativas correctas)",
    opciones: [
      "Comprensibilidad y Comparabilidad",
      "Relevancia",
      "Fiabilidad",
      "Confidencialidad absoluta ante auditorías",
      "Subjetividad estimada"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 4,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Cuál es la ecuación contable básica que expresa la relación entre los componentes del Estado de Situación Financiera? (Marque la respuesta correcta)",
    opciones: [
      "Activo = Pasivo + Patrimonio",
      "Activo = Pasivo - Patrimonio",
      "Patrimonio = Activo + Pasivo",
      "Utilidad Bruta = Activo + Pasivo",
      "Pasivo = Activo + Patrimonio"
    ],
    correctas: [0]
  },
  {
    id: 5,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Cuál es la tasa máxima anual en soles fijada por el BCRP (vigente mayo–octubre 2026, Ley N.º 31143) que pueden cobrar las entidades financieras en créditos de consumo y mype? (Marque la respuesta correcta)",
    opciones: [
      "114,13%",
      "69,68%",
      "24,65%",
      "35,00%",
      "85,50%"
    ],
    correctas: [0]
  },
  {
    id: 6,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Qué entidad bancaria estatal actúa como banco de desarrollo de segundo piso fondeando a entidades financieras sin otorgar créditos directos a las mypes? (Marque la respuesta correcta)",
    opciones: [
      "Cofide",
      "Banco de la Nación",
      "Agrobanco",
      "Caja Municipal de Arequipa",
      "Mibanco"
    ],
    correctas: [0]
  },

  // NIVEL INTERMEDIO (Preguntas 7 a 16)
  {
    id: 7,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué diferencias clave distinguen a la contabilidad financiera de la contabilidad administrativa? (Marque las alternativas correctas)",
    opciones: [
      "La contabilidad financiera informa a usuarios externos (inversionistas, bancos, Estado) bajo normas NIIF",
      "La contabilidad administrativa apoya las decisiones internas de la gerencia con reportes por producto o zona",
      "Los presupuestos son un ejemplo típico de contabilidad administrativa",
      "La contabilidad financiera se elabora sin seguir ninguna norma contable",
      "La contabilidad administrativa está prohibida para la toma de decisiones gerenciales"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 8,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Respecto a los dos postulados básicos de la información financiera (Devengado y Empresa en marcha), ¿qué afirmaciones son correctas? (Marque las alternativas correctas)",
    opciones: [
      "Bajo el principio de Devengado, las operaciones se registran cuando ocurren, aunque se cobren o paguen después",
      "El postulado de Empresa en marcha asume que el negocio continuará operando en el futuro previsible",
      "Ambos postulados sirven de base para reconocer y medir las cifras en los estados financieros",
      "Bajo el Devengado, una venta al crédito solo se registra cuando el cliente paga en efectivo",
      "Empresa en marcha significa que la empresa cerrará al finalizar el mes"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 9,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el Estado de Situación Financiera, ¿cómo se clasifican las partidas corrientes y no corrientes? (Marque las alternativas correctas)",
    opciones: [
      "Activo corriente (hasta 1 año): efectivo, cuentas por cobrar e inventarios",
      "Activo no corriente (más de 1 año): equipos, local, vehículos e intangibles",
      "Pasivo corriente: deudas con proveedores, sueldos y CTS por pagar",
      "Pasivo no corriente: efectivo en caja y mercadería disponible",
      "Patrimonio: préstamos bancarios a corto plazo"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 10,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En el Estado de Flujos de Efectivo, ¿cómo se agrupan los movimientos de entrada y salida de dinero? (Marque las alternativas correctas)",
    opciones: [
      "Actividades de operación: cobros de ventas y pagos habituales del giro del negocio",
      "Actividades de inversión: compra o venta de equipos y activos de largo plazo",
      "Actividades de financiamiento: aportes de socios, préstamos recibidos y pago de cuotas",
      "Actividades de publicidad: campañas en redes sociales exclusivamente",
      "Actividades tributarias: cálculo de depreciación sin movimiento de caja"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 11,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Por qué una empresa puede mostrar utilidad contable en su Estado de Resultados y, aun así, enfrentar problemas de liquidez en caja? (Marque la respuesta correcta)",
    opciones: [
      "Porque vende al crédito y cobra tarde, o paga a sus proveedores antes de cobrar a sus clientes",
      "Porque la utilidad contable siempre es idéntica al saldo final de efectivo en caja",
      "Porque el Estado de Resultados registra únicamente entradas de dinero en efectivo",
      "Porque las compras de equipos se registran como gastos operativos del mes",
      "Porque los aportes de capital se suman directamente a las ventas"
    ],
    correctas: [0]
  },
  {
    id: 12,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Cuál es la función de las Notas a los estados financieros y del Estado de cambios en el patrimonio? (Marque las alternativas correctas)",
    opciones: [
      "Las Notas explican y detallan las cifras y resumen las políticas contables (inventarios, depreciación)",
      "Las Notas complementan a los estados financieros, pero no los reemplazan",
      "El Estado de cambios en el patrimonio muestra variaciones por aportes, utilidades, pérdidas o dividendos",
      "Las Notas reemplazan por completo al Estado de Situación Financiera",
      "El Estado de cambios en el patrimonio detalla únicamente las compras diarias de mercadería"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 13,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En la gestión presupuestaria, ¿cómo se clasifican los tipos de presupuestos según su flexibilidad, plazo y contenido? (Marque las alternativas correctas)",
    opciones: [
      "Según flexibilidad: estático (un solo nivel de actividad) y flexible (analiza variaciones real vs. proyectado)",
      "Según plazo: corto plazo (hasta 1 año) y largo plazo (más de 1 año)",
      "Según contenido: operativo (ventas, producción y gastos) y financiero (inversiones y efectivo)",
      "Según flexibilidad: rígido permanente que nunca admite evaluación de desviaciones",
      "Según contenido: tributario exclusivo sin incluir ventas ni costos"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 14,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En la secuencia lógica para elaborar estados financieros proyectados a partir del presupuesto, ¿cuál es el punto de partida inicial? (Marque la respuesta correcta)",
    opciones: [
      "El pronóstico y presupuesto de ventas",
      "El pago de dividendos a los accionistas",
      "El cierre del Estado de Situación Financiera",
      "La liquidación de impuestos anuales",
      "La amortización final de préstamos a largo plazo"
    ],
    correctas: [0]
  },
  {
    id: 15,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Según la clasificación de entidades del sistema financiero supervisadas por la SBS, ¿qué características corresponden a cada tipo de entidad? (Marque las alternativas correctas)",
    opciones: [
      "Banca múltiple: mayor red, montos y plazos; tasas más bajas con buen historial, pero exige más formalidad",
      "Cajas municipales y rurales: especializadas en micro y pequeña empresa con atención cercana",
      "Edpymes: enfocadas en crédito a la micro y pequeña empresa, pero no captan depósitos del público",
      "Edpymes: son bancos estatales dedicados exclusivamente a financiar exportaciones mineras",
      "Banca múltiple: otorga créditos sin evaluar historial crediticio ni garantías"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 16,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Respecto a los instrumentos de financiamiento privado alternativo (Ángeles inversionistas, Capital de riesgo, Factoring y Leasing), ¿qué afirmaciones son correctas? (Marque las alternativas correctas)",
    opciones: [
      "Los ángeles inversionistas aportan capital a negocios nuevos a cambio de participación accionaria",
      "El factoring permite adelantar el cobro de facturas por cobrar",
      "El leasing consiste en el alquiler de maquinaria o equipos con opción de compra",
      "El capital de riesgo presta dinero sin exigir participación ni retorno financiero",
      "El factoring es un subsidio estatal no reembolsable"
    ],
    correctas: [0, 1, 2]
  },

  // NIVEL AVANZADO (Preguntas 17 a 20)
  {
    id: 17,
    nivel: "Avanzado",
    bloom: "Aplicar",
    texto: "Caso Bodega 'Mi Emprendimiento': En diciembre registró Ventas por S/ 20,000, Costo de ventas por S/ 12,000, Gastos de ventas y administración por S/ 4,500 y Gastos financieros por S/ 300. ¿Cuál es su Utilidad bruta y su Utilidad antes de impuestos respectivamente? (Marque las alternativas correctas)",
    opciones: [
      "Utilidad bruta de S/ 8,000 (margen bruto del 40%)",
      "Utilidad antes de impuestos de S/ 3,200 (16% de las ventas)",
      "El costo de ventas representa el 60% de los ingresos por ventas",
      "Utilidad bruta de S/ 3,500",
      "Pérdida neta de S/ 1,200"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 18,
    nivel: "Avanzado",
    bloom: "Aplicar",
    texto: "Caso Flujo de Efectivo Mensual: Un emprendimiento inicia el mes con S/ 2,000 en caja, cobra S/ 8,000 a clientes, paga S/ 6,200 a proveedores y gastos operativos, y compra un equipo al contado por S/ 1,000. ¿Cuál es el saldo final de caja al cierre del mes? (Marque la respuesta correcta)",
    opciones: [
      "S/ 2,800",
      "S/ 3,800",
      "S/ 1,800",
      "S/ 800",
      "S/ 4,200"
    ],
    correctas: [0]
  },
  {
    id: 19,
    nivel: "Avanzado",
    bloom: "Aplicar",
    texto: "Caso Estado de Cambios en el Patrimonio: Un negocio inicia el periodo con un capital de S/ 10,000; durante el año el propietario realiza un aporte adicional de S/ 2,000, el negocio obtiene una utilidad de S/ 2,500 y el propietario efectúa retiros personales por S/ 1,000. ¿Cuál es el Patrimonio final? (Marque la respuesta correcta)",
    opciones: [
      "S/ 13,500",
      "S/ 14,500",
      "S/ 11,500",
      "S/ 12,500",
      "S/ 15,500"
    ],
    correctas: [0]
  },
  {
    id: 20,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Al evaluar y comparar cotizaciones de crédito en distintas entidades financieras (por ejemplo, tasas anuales para microempresa que varían desde 24,65% hasta 69,68% según la SBS), ¿qué criterios técnicos debe aplicar el emprendedor? (Marque las alternativas correctas)",
    opciones: [
      "Comparar la TCEA (Tasa de Costo Efectivo Anual) y no solo la TEA, pues la TCEA incluye comisiones y seguros",
      "Cotizar exactamente el mismo monto y el mismo plazo en todas las entidades y solicitar la hoja resumen",
      "Verificar en el portal oficial de la SBS y comprobar que la cuota mensual sea compatible con su flujo de caja",
      "Elegir cualquier entidad sin comparar porque todas cobran exactamente la misma tasa legal",
      "Evaluar únicamente la TEA asumiendo que los seguros y gastos administrativos son gratuitos"
    ],
    correctas: [0, 1, 2]
  }
];
