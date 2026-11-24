const PREGUNTAS = [
  // NIVEL BÁSICO (Preguntas 1 a 6)
  {
    id: 1,
    nivel: "Básico",
    bloom: "Comprender",
    texto: "¿Qué condiciones reales caracterizan el entorno en el que un gerente toma decisiones dentro de una organización? (Marque las alternativas correctas)",
    opciones: [
      "Información imperfecta",
      "Recursos limitados y tiempo limitado",
      "Consecuencias que afectan a otras personas",
      "Certeza absoluta sobre todos los resultados futuros",
      "Ausencia total de restricciones organizacionales"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 2,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Cuáles son las cuatro categorías en las que se clasifican las decisiones según la posibilidad de predecir sus consecuencias? (Marque las alternativas correctas)",
    opciones: [
      "Certidumbre y riesgo",
      "Incertidumbre",
      "Conflicto",
      "Improvisación unilateral",
      "Rutina operativa"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 3,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Qué herramientas de software especializado se emplean para resolver modelos cuantitativos en la toma de decisiones gerenciales? (Marque las alternativas correctas)",
    opciones: [
      "WINQSB",
      "STATGRAPHICS",
      "SPSS",
      "AutoCAD",
      "CorelDRAW"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 4,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿Con qué otro nombre se conoce formalmente a la Ciencia de la Administración? (Marque la respuesta correcta)",
    opciones: [
      "Investigación Operacional",
      "Auditoría Forense",
      "Contabilidad Gubernamental",
      "Gestión del Talento Humano",
      "Psicología Organizacional"
    ],
    correctas: [0]
  },
  {
    id: 5,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "En el proceso básico para decidir, ¿cuál es el primer paso que debe realizar el decisor? (Marque la respuesta correcta)",
    opciones: [
      "Determinar claramente la meta",
      "Seleccionar la técnica estadística",
      "Implementar la solución inmediatamente",
      "Buscar responsables externos",
      "Calcular el valor esperado"
    ],
    correctas: [0]
  },
  {
    id: 6,
    nivel: "Básico",
    bloom: "Recordar",
    texto: "¿En qué dirección se resuelve numéricamente un árbol de decisión para obtener el plan óptimo de acción? (Marque la respuesta correcta)",
    opciones: [
      "De derecha a izquierda",
      "De izquierda a derecha",
      "De arriba hacia abajo únicamente",
      "Desde el nodo raíz hacia las ramas finales",
      "En orden alfabético de los eventos"
    ],
    correctas: [0]
  },

  // NIVEL INTERMEDIO (Preguntas 7 a 16)
  {
    id: 7,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "Respecto a la relación entre la calidad de una decisión y su resultado, ¿qué afirmaciones son verdaderas? (Marque las alternativas correctas)",
    opciones: [
      "Una buena decisión no garantiza siempre resultados exitosos, sino un proceso racional y analítico",
      "Puede existir una mala decisión que produzca un buen resultado por azar",
      "La evaluación continua y el aprendizaje fortalecen las capacidades decisorias",
      "Una buena decisión se define únicamente porque produjo ganancias inmediatas",
      "Si dos gerentes deciden igual con la misma información, quien tuvo mal resultado decidió mal"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 8,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Cuáles de los siguientes estilos corresponden a perfiles de decisores? (Marque las alternativas correctas)",
    opciones: [
      "Pensador y cowboy (repentino)",
      "Maquiavélico (el fin justifica los medios)",
      "Historiador y cauteloso",
      "Autómata determinista",
      "Especulador bursátil"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 9,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "En la estructura de un problema de decisión, ¿qué elementos forman parte de sus componentes principales? (Marque las alternativas correctas)",
    opciones: [
      "El decisor y el analista",
      "Factores controlables y factores incontrolables",
      "Resultados posibles y restricciones ambientales/estructurales",
      "Únicamente los estados financieros auditados",
      "Exclusivamente las variables controlables por el gerente"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 10,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué características distinguen a un modelo determinista frente a un modelo probabilista? (Marque las alternativas correctas)",
    opciones: [
      "En el determinista el resultado esperado se conoce con precisión (certeza)",
      "En el determinista existe una relación directa y previsible entre decisión y resultado",
      "En el probabilista se incluye riesgo, incertidumbre y análisis estadístico",
      "El modelo determinista se basa en eventos aleatorios sin datos fijos",
      "El modelo probabilista asume estabilidad absoluta sin variabilidad"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 11,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué ejemplos corresponden a situaciones modeladas bajo un enfoque determinista? (Marque las alternativas correctas)",
    opciones: [
      "Una fábrica automatizada que conoce exactamente cuántas piezas produce por hora",
      "Un banco que aplica una tasa de interés fija en un préstamo",
      "Una empresa que paga salarios fijos mensuales estables",
      "Una aerolínea sujeta a retrasos por clima o huelgas",
      "Una inversión en bolsa expuesta a la volatilidad del mercado"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 12,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué diferencia a la toma de decisiones bajo riesgo de la toma de decisiones bajo incertidumbre? (Marque las alternativas correctas)",
    opciones: [
      "Bajo riesgo se conocen o pueden estimarse las probabilidades de cada resultado",
      "Bajo incertidumbre se conocen las alternativas y resultados, pero no las probabilidades",
      "Bajo incertidumbre se aplican criterios como maximax (optimista) o maximin (conservador)",
      "Bajo riesgo no existe ningún dato histórico ni modelo probabilístico",
      "Bajo incertidumbre las consecuencias son deterministas y exactas"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 13,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué elementos definen una situación de toma de decisiones bajo conflicto? (Marque las alternativas correctas)",
    opciones: [
      "Los resultados están influenciados por un oponente racional con intereses propios",
      "El oponente también toma decisiones buscando alcanzar sus objetivos",
      "Estos problemas se analizan mediante la teoría de juegos",
      "El resultado depende exclusivamente de fenómenos climáticos",
      "No existe competencia entre actores"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 14,
    nivel: "Intermedio",
    bloom: "Recordar",
    texto: "En la simbología estándar de un árbol de decisión, ¿qué representan los cuadrados y los círculos respectivamente? (Marque las alternativas correctas)",
    opciones: [
      "Los cuadrados representan puntos de decisión (alternativas)",
      "Los círculos representan nodos de eventos (estados inciertos)",
      "Los triángulos o extremos finales representan resultados económicos",
      "Los círculos representan decisiones obligatorias del gerente",
      "Los cuadrados representan probabilidades condicionales"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 15,
    nivel: "Intermedio",
    bloom: "Aplicar",
    texto: "Una alternativa de inversión genera una ganancia de S/ 50,000 con probabilidad 0.6 y una ganancia de S/ 10,000 con probabilidad 0.4. ¿Cuál es su Valor Esperado (VE)? (Marque la respuesta correcta)",
    opciones: [
      "S/ 34,000",
      "S/ 30,000",
      "S/ 60,000",
      "S/ 24,000",
      "S/ 40,000"
    ],
    correctas: [0]
  },
  {
    id: 16,
    nivel: "Intermedio",
    bloom: "Comprender",
    texto: "¿Qué aplicaciones prototipo de la Investigación Operacional / Ciencia de la Administración permiten optimizar las operaciones empresariales? (Marque las alternativas correctas)",
    opciones: [
      "Control y falta de existencias (inventarios)",
      "Puesta en cola y congestión (líneas de espera)",
      "Planificación y control de proyectos",
      "Redacción de actas notariales",
      "Diseño gráfico publicitario"
    ],
    correctas: [0, 1, 2]
  },

  // NIVEL AVANZADO (Preguntas 17 a 20)
  {
    id: 17,
    nivel: "Avanzado",
    bloom: "Aplicar",
    texto: "Caso Multi-Hardware: Cada CD navideño cuesta $3,500 y se vende a $8,000 (los no vendidos se pierden sin valor). Si se ordenan 200 unidades y la demanda resulta ser de 100 unidades, ¿cuál es la utilidad o pérdida neta en ese escenario? (Marque la respuesta correcta)",
    opciones: [
      "Utilidad de $100,000 (Ingreso $800,000 menos Costo $700,000)",
      "Utilidad de $450,000",
      "Pérdida de $350,000",
      "Utilidad de $900,000",
      "Punto de equilibrio ($0)"
    ],
    correctas: [0]
  },
  {
    id: 18,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "En un árbol de decisión para maximizar ganancias: la rama D1 tiene un nodo con E1 (p=0.5, S/ 50,000) y E2 (p=0.5, -S/ 10,000), mientras que la rama D2 tiene un nodo con E3 (p=0.1, S/ 10,000), E4 (p=0.4, S/ 38,000) y E5 (p=0.5, S/ 35,000). ¿Qué decisión conviene elegir y cuál es su valor esperado? (Marque las alternativas correctas)",
    opciones: [
      "Elegir D2 porque ofrece el mayor valor esperado",
      "El valor esperado de D2 es S/ 33,700",
      "El valor esperado de D1 es S/ 20,000",
      "Elegir D1 porque su valor esperado es S/ 40,000",
      "Ambas decisiones tienen exactamente el mismo valor esperado"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 19,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "Caso Gerencial: Una empresa pierde liquidez y evalúa: (A) Despedir 20 trabajadores, (B) Aumentar precios, (C) Pedir un préstamo, o (D) No hacer nada. ¿Qué criterios analíticos debe evaluar el gerente antes de decidir? (Marque las alternativas correctas)",
    opciones: [
      "Identificar qué información adicional necesita y qué riesgos tiene cada alternativa",
      "Evaluar a quién afectará la decisión y qué ocurre si resulta equivocada",
      "Considerar si cambiaría la decisión al disponer de nueva información",
      "Elegir 'No hacer nada' porque evita cualquier consecuencia negativa",
      "Aumentar precios asumiendo que ningún cliente abandonará la empresa"
    ],
    correctas: [0, 1, 2]
  },
  {
    id: 20,
    nivel: "Avanzado",
    bloom: "Analizar",
    texto: "En la metodología de Investigación Operacional / Ciencia de la Administración, ¿qué etapas son indispensables entre la construcción del modelo y su puesta en marcha? (Marque las alternativas correctas)",
    opciones: [
      "Validación y verificación para comprobar que el modelo sea coherente y confiable",
      "Establecimiento de controles para supervisar el comportamiento del sistema",
      "Análisis de sensibilidad y comunicación de resultados al decisor",
      "Omitir la validación para ahorrar tiempo antes de implementar",
      "Eliminar los controles posteriores una vez ejecutada la solución"
    ],
    correctas: [0, 1, 2]
  }
];
