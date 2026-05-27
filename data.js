/* Oregon Foods · Consejos del Chef — Data */
window.CHEFS = {
  garibaldi: { name: "Renzo Garibaldi", initials: "RG", restaurant: "Osso · Lima" },
  acurio:    { name: "Gastón Acurio",   initials: "GA", restaurant: "Astrid y Gastón · Lima" },
  martinez:  { name: "Virgilio Martínez",initials: "VM", restaurant: "Central · Lima" },
  tsumura:   { name: "Mitsuharu Tsumura",initials: "MT", restaurant: "Maido · Lima" },
  osterling: { name: "Rafael Osterling", initials: "RO", restaurant: "Rafael · Lima" },
  solis:     { name: "Héctor Solís",     initials: "HS", restaurant: "Fiesta · Chiclayo" }
};

window.PRODUCTS = [
  {
    id: "bife-chorizo", name: "Bife de Chorizo",
    cat: "Línea Selección · Carnes", weight: "500 g", tag: "Nuevo",
    photo: "assets/cortes/bife-angosto.png",
    lede: "El corte rey del asado argentino. Una tira de lomo bajo con su capa de grasa intacta — la que sella, dora y perfuma.",
    body: "Pieza extraída del bife angosto, con un borde graso que es marca registrada. Su sabor concentrado y su jugosidad lo hacen el corte por excelencia para parrilla de domingo.",
    specs: [
      { l: "Origen", v: "Uruguay", sub: "Pradera natural" },
      { l: "Maduración", v: "21 d", sub: "Húmeda" },
      { l: "Grasa", v: "70/30", sub: "Magra/grasa" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 3 días en su empaque original. Una vez abierto, consumir en 24–48 horas." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C en bolsa al vacío. No re-congelar tras descongelar." },
      { icon: "clock",  title: "Descongelación",body: "Pasa de congelador a refrigerador 24 horas antes. Nunca al microondas — pierdes la fibra." },
      { icon: "salt",   title: "Sazón previa",  body: "Sal gruesa 40 minutos antes. Pimienta solo al final de la cocción para que no se queme." }
    ],
    dishes: ["Parrilla", "A la plancha", "Tagliata", "Tartare", "Picaña al horno"],
    recipes: ["r1"]
  },
  {
    id: "ojo-bife", name: "Ojo de Bife",
    cat: "Línea Selección · Carnes", weight: "400 g", tag: "Premium",
    photo: "assets/cortes/bife-ancho.png",
    lede: "El corazón del bife ancho. Marmoleado fino, terneza máxima, sabor profundo.",
    body: "Pieza redondeada extraída del bife ancho. Su marmoleado interior lo convierte en uno de los cortes más jugosos y sabrosos. Ideal para sellado rápido y término a punto.",
    specs: [
      { l: "Origen", v: "USA", sub: "Choice grade" },
      { l: "Maduración", v: "28 d", sub: "Húmeda" },
      { l: "Grosor", v: "3.5 cm", sub: "Recomendado" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 3 días en empaque original." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C al vacío." },
      { icon: "clock",  title: "Templado pre-cocción", body: "Saca de la refrigeradora 30 minutos antes. El corte a temperatura ambiente sella mejor." },
      { icon: "salt",   title: "Reposo post-cocción",  body: "3–5 minutos sobre tabla, tapado con aluminio. No lo cortes antes." }
    ],
    dishes: ["Parrilla", "A la sartén", "Steak frites", "Tataki", "Anticucho de lomo"],
    recipes: ["r2"]
  },
  {
    id: "chorizo-parrillero", name: "Chorizo Parrillero",
    cat: "Línea Tradición · Embutidos", weight: "300 g",
    photo: "assets/cortes/chorizo-parrillero.png",
    lede: "El abrelatas del asado. Cerdo molido, pimentón, ajo, vino. Tripa natural.",
    body: "Embutido fresco hecho con cerdo seleccionado y especiado al estilo criollo. Tripa natural que se dora y abre en la parrilla.",
    specs: [
      { l: "Cerdo", v: "100%", sub: "Sin colorantes" },
      { l: "Tripa", v: "Natural", sub: "Cerdo" },
      { l: "Picante", v: "Suave", sub: "Pimentón dulce" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 5 días en empaque." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 3 meses a –18 °C. Separa unidades antes de congelar." },
      { icon: "fire",   title: "Cocción",        body: "Fuego medio, sin pinchar. Tapa con domo los primeros 4 minutos para que cocine parejo." }
    ],
    dishes: ["Parrilla", "Choripán", "Risotto", "Sancochado", "Pasta con chorizo"],
    recipes: ["r6"]
  },
  {
    id: "tomahawk", name: "Tomahawk",
    cat: "Línea Selección · Carnes", weight: "1.2 kg", tag: "Premium",
    photo: "assets/cortes/tomahawk.png",
    lede: "El corte que es escenografía. Ojo de bife con su costilla limpia — para parrilla de fiesta.",
    body: "Bife ancho con hueso largo limpio. Cocción lenta para llegar al punto sin secar la pieza. Sirve para 2–3 personas.",
    specs: [
      { l: "Origen", v: "USA", sub: "Prime grade" },
      { l: "Maduración", v: "35 d", sub: "Seca/húmeda" },
      { l: "Hueso", v: "20 cm", sub: "French-cut" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 4 días al vacío." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 4 meses a –18 °C." },
      { icon: "clock",  title: "Reverse sear",  body: "Horno a 110 °C hasta interno 50 °C, luego sellado en parrilla a fuego máximo 90 segundos por lado." }
    ],
    dishes: ["Parrilla", "Reverse sear", "Asado al disco", "Para compartir"],
    recipes: ["r4", "r8"]
  },
  {
    id: "salmon", name: "Salmón Atlántico",
    cat: "Salmón Aqua", weight: "450 g",
    photo: "assets/cortes/salmon-aqua.png",
    lede: "Filete sin piel, sin espinas. Llegado del frío del Atlántico Norte.",
    body: "Filete porcionado de salmón atlántico, congelado en altamar para preservar textura. Perfecto para cocción rápida, crudo o curado.",
    specs: [
      { l: "Origen", v: "Noruega", sub: "ASC certificado" },
      { l: "Omega-3", v: "2.5 g", sub: "Por 100 g" },
      { l: "Espinas", v: "0", sub: "Sin espinas" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 2 °C, hasta 2 días tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Mantener a –18 °C hasta el día de uso." },
      { icon: "clock",  title: "Descongelado lento", body: "8 horas en refrigerador. Para crudo, congelar 48 h previas obligatorio." }
    ],
    dishes: ["Tiradito", "A la plancha", "Curado", "Tataki", "Al horno con cítricos"],
    recipes: ["r3", "r10"]
  },
  {
    id: "asado-tira", name: "Asado de Tira",
    cat: "Línea de Carnes", weight: "1 kg",
    photo: "assets/cortes/asado-de-tira.png",
    lede: "El corte popular por excelencia. Tira ancha cortada de costilla, con tres huesos.",
    body: "Tira gruesa cortada transversalmente de la costilla. Pieza icónica del asado peruano-argentino, jugosa cuando se cocina con paciencia.",
    specs: [
      { l: "Corte", v: "3 huesos", sub: "3 cm grosor" },
      { l: "Origen", v: "Argentina", sub: "Pampa húmeda" },
      { l: "Cocción", v: "45 min", sub: "Parrilla lenta" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 3 días." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C." },
      { icon: "fire",   title: "Brasa baja",    body: "Empieza con el hueso hacia abajo a fuego bajo, 25 minutos. Voltea solo una vez." }
    ],
    dishes: ["Parrilla", "Al palo", "Estofado", "Tira al disco"],
    recipes: []
  },
  {
    id: "picana", name: "Picaña",
    cat: "Línea Selección · Carnes", weight: "1 kg",
    photo: "assets/cortes/colita-cuadril.png",
    lede: "La reina del churrasco brasilero. Triángulo de tapa con su capa de grasa que sella todo.",
    body: "Corte de la parte alta del cuadril, con una capa gruesa de grasa que se derrite durante la cocción y baña la carne.",
    specs: [
      { l: "Origen", v: "USA", sub: "Choice grade" },
      { l: "Grasa", v: "Capa", sub: "1.5 cm" },
      { l: "Corte", v: "Tapa", sub: "Cuadril" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 3 días al vacío." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C." },
      { icon: "fire",   title: "Grasa abajo primero", body: "En la parrilla, la capa de grasa va primero al fuego — sella la pieza entera." },
      { icon: "salt",   title: "Sal gruesa",    body: "Solo sal gruesa antes de cocinar. La grasa hace el resto." }
    ],
    dishes: ["Churrasco al espeto", "Parrilla", "Al horno", "Espetinho"],
    recipes: []
  },
  {
    id: "lomo-fino", name: "Lomo Fino",
    cat: "Línea Selección · Carnes", weight: "1.2 kg",
    photo: "assets/cortes/lomo-fino.png",
    lede: "El corte más tierno del animal. Magro, fino, elegante. La pieza del lomo saltado.",
    body: "Músculo interno del lomo, sin trabajo mecánico — por eso su terneza es máxima. Bajo en grasa, sabor sutil, perfecto para preparaciones rápidas.",
    specs: [
      { l: "Origen", v: "USA", sub: "Choice grade" },
      { l: "Grasa", v: "Magra", sub: "5%" },
      { l: "Terneza", v: "Máxima", sub: "Sin tendón" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 3 días al vacío." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C." },
      { icon: "fire",   title: "Fuego alto, tiempo corto", body: "El lomo fino se cocina rápido. Una cocción prolongada lo reseca. Busca un punto rosado en el centro." },
      { icon: "salt",   title: "Salsa al final", body: "Sazónalo justo antes de sellar. La sal previa lo deshidrata por su bajo contenido graso." }
    ],
    dishes: ["Lomo saltado", "Tournedos", "Filet mignon", "Carpaccio", "Beef Wellington"],
    recipes: []
  },
  {
    id: "costilla-cuadril", name: "Costilla de Cuadril",
    cat: "Línea de Carnes", weight: "1.5 kg",
    photo: "assets/cortes/costilla-cuadril.png",
    lede: "Pieza generosa de cuadril con su tapa de grasa. Para asados largos y cortes generosos.",
    body: "Cuadril completo con cobertura grasa intacta. Pieza grande pensada para asado al horno, espeto o cocción lenta. Rinde para varios comensales.",
    specs: [
      { l: "Origen", v: "USA", sub: "Choice grade" },
      { l: "Cocción", v: "Lenta", sub: "Horno o espeto" },
      { l: "Tapa", v: "Grasa", sub: "Intacta" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 4 días al vacío." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C." },
      { icon: "clock",  title: "Horno bajo",    body: "150 °C con termómetro hasta interno 55 °C. La grasa va siempre arriba." },
      { icon: "salt",   title: "Reposo largo",  body: "10 minutos de descanso antes de cortar. Pieza grande, jugos abundantes." }
    ],
    dishes: ["Al horno", "Espeto corrido", "Tira al disco", "Sancochado"],
    recipes: []
  },
  {
    id: "entrana-fina", name: "Entraña Fina",
    cat: "Línea Selección · Carnes", weight: "500 g",
    photo: "assets/cortes/entrana-fina.png",
    lede: "Corte de carnicero. Fibra larga, sabor profundo, marinado en chimichurri.",
    body: "Músculo del diafragma con membrana retirada — la versión 'fina' lista para parrilla. Fibra marcada, mucho sabor, cocción rápida obligatoria.",
    specs: [
      { l: "Origen", v: "Uruguay", sub: "Pradera natural" },
      { l: "Membrana", v: "Retirada", sub: "Lista para parrilla" },
      { l: "Cocción", v: "Rápida", sub: "Fuego alto" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 2 días al vacío." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 4 meses a –18 °C." },
      { icon: "fire",   title: "Brasa intensa y breve", body: "Carbón al rojo vivo. Máximo 3 minutos por lado. Una cocción mayor la endurece." },
      { icon: "salt",   title: "Corte contra la fibra", body: "Mira las líneas del músculo. El cuchillo entra perpendicular, siempre." }
    ],
    dishes: ["Parrilla", "Chimichurri", "Tacos", "A la plancha"],
    recipes: []
  },
  {
    id: "lomo-cubos", name: "Lomo Fino en Cubos",
    cat: "Cortes Caseros · Res", weight: "600 g",
    photo: "assets/cortes/lomo-cubos.png",
    lede: "Lomo fino porcionado en cubos. Listo para el wok, el saltado o la brocheta.",
    body: "Cubos parejos de lomo fino, congelados individualmente para que descongeles solo lo que necesitas. El corte premium de la casa, en formato práctico.",
    specs: [
      { l: "Origen", v: "Brasil", sub: "Selección" },
      { l: "Tamaño", v: "3 cm", sub: "Cubo parejo" },
      { l: "Grasa", v: "Magra", sub: "5%" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 2 días tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C." },
      { icon: "clock",  title: "Descongelación", body: "8 horas en refrigerador. Para wok, puedes saltearlo aún semicongelado." },
      { icon: "fire",   title: "Fuego máximo",  body: "Wok o sartén bien caliente. El lomo se sella en segundos — no llenes la sartén." }
    ],
    dishes: ["Lomo saltado", "Brocheta", "Stroganoff", "Wok con verduras", "Stir-fry"],
    recipes: ["r11"]
  },
  {
    id: "guiso", name: "Res para Guiso",
    cat: "Cortes Caseros · Res", weight: "600 g",
    photo: "assets/cortes/guiso.png",
    lede: "El corte de la paciencia. Trozos para cocción lenta — secos, asados, estofados.",
    body: "Trozos seleccionados para cocciones largas. La fibra y el colágeno se deshacen lentamente, aportando profundidad y sabor al caldo.",
    specs: [
      { l: "Origen", v: "Brasil", sub: "Selección" },
      { l: "Cocción", v: "Lenta", sub: "1.5 a 2 h" },
      { l: "Tamaño", v: "4 cm", sub: "Trozo" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 2 días tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C." },
      { icon: "salt",   title: "Sella primero", body: "Antes de guisar, dora los trozos por todos lados en aceite caliente." },
      { icon: "fire",   title: "Cocción lenta", body: "Hervor mínimo, tapado, mínimo 90 minutos. Si la carne está firme, le falta tiempo, no más fuego." }
    ],
    dishes: ["Seco de res", "Estofado", "Asado a la olla", "Carapulcra", "Cau cau"],
    recipes: ["r12"]
  },
  {
    id: "bistek", name: "Bistek de Res",
    cat: "Cortes Caseros · Res", weight: "600 g",
    photo: "assets/cortes/bistek.png",
    lede: "Filete fino para sartén. Un clásico de la mesa peruana — con arroz, papas fritas y huevo.",
    body: "Filete delgado de res, ideal para cocción rápida en sartén. La base ideal del bistek a lo pobre, el lomo apanado o un buen sándwich de carne.",
    specs: [
      { l: "Origen", v: "Brasil", sub: "Selección" },
      { l: "Grosor", v: "5 mm", sub: "Filete fino" },
      { l: "Cocción", v: "Rápida", sub: "2 min/lado" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 2 días tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C." },
      { icon: "clock",  title: "Descongelado lento", body: "6 horas en refrigerador. Sin líquido en el empaque antes de cocinar." },
      { icon: "fire",   title: "Sartén bien caliente", body: "Sal solo al final. Aceite mínimo — 2 minutos por lado, no más." }
    ],
    dishes: ["Bistek a lo pobre", "Bistek apanado", "Sándwich de bistek", "Bistek a la criolla"],
    recipes: ["r13"]
  },
  {
    id: "carne-molida", name: "Carne Molida de Bistek",
    cat: "Cortes Caseros · Res", weight: "600 g",
    photo: "assets/cortes/carne-molida.png",
    lede: "Molida de res hecha con bistek. Sabor pleno, textura limpia. La base de la cocina diaria.",
    body: "Molida fresca de bistek de res. Sin aditivos ni colorantes. Versátil para tucos, hamburguesas, rellenos o salsa boloñesa criolla.",
    specs: [
      { l: "Origen", v: "Brasil", sub: "Selección" },
      { l: "Grasa", v: "15%", sub: "Equilibrada" },
      { l: "Molido", v: "Bistek", sub: "Sin pellejos" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, máximo 24 horas tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 4 meses a –18 °C." },
      { icon: "clock",  title: "Descongelado",  body: "8 horas en refrigerador. Nunca a temperatura ambiente." },
      { icon: "fire",   title: "Cocción completa", body: "La molida siempre se cocina bien hecha. No debe quedar carne rosada en el centro." }
    ],
    dishes: ["Salsa boloñesa", "Hamburguesas", "Picadillo", "Tallarines saltados", "Pastel de carne"],
    recipes: ["r14"]
  },
  {
    id: "lomito-pollo", name: "Lomito de Pollo",
    cat: "Cortes Caseros · Pollo", weight: "700 g",
    photo: "assets/cortes/lomito-pollo.png",
    lede: "Tiras de pechuga sin hueso, sin piel. Listas para el wok, el chaufa o la salsa.",
    body: "Lomitos individuales de pollo, congelados uno por uno (IQF) para que tomes solo lo que necesitas.",
    specs: [
      { l: "Origen", v: "Perú", sub: "Pollo nacional" },
      { l: "Sin piel", v: "100%", sub: "Sin hueso" },
      { l: "Congelado", v: "IQF", sub: "Individual" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 2 días tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 9 meses a –18 °C." },
      { icon: "clock",  title: "Descongelado rápido", body: "Bolsa cerrada bajo chorro de agua fría, 30 minutos." },
      { icon: "fire",   title: "Wok altísimo",  body: "El pollo va a fuego máximo, en tandas pequeñas. Se sella en 90 segundos." }
    ],
    dishes: ["Chaufa", "Pollo al curry", "Wok thai", "Pollo con verduras", "Sándwich de pollo"],
    recipes: ["r15"]
  },
  {
    id: "filetes-pierna", name: "Filetes de Pierna de Pollo",
    cat: "Cortes Caseros · Pollo", weight: "1 kg",
    photo: "assets/cortes/filetes-pierna.png",
    lede: "Pierna deshuesada y abierta. Más jugosa que la pechuga, lista para apanar o saltear.",
    body: "Filetes de pierna deshuesada, sin piel. La parte más jugosa del pollo, abierta y lista para uso.",
    specs: [
      { l: "Origen", v: "Perú", sub: "Pollo nacional" },
      { l: "Sin hueso", v: "100%", sub: "Sin piel" },
      { l: "Jugosidad", v: "Alta", sub: "Carne oscura" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 2 días tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 9 meses a –18 °C." },
      { icon: "salt",   title: "Marina la noche anterior", body: "La pierna acepta marinadas largas. Sillao, ajo, jengibre, una noche en la refrigeradora." },
      { icon: "fire",   title: "Punto interno 75 °C", body: "El pollo siempre completamente cocido. Si el jugo sale claro, está listo." }
    ],
    dishes: ["Pollo apanado", "Pollo a la naranja", "Pollo al sillao", "Estofado", "Anticucho"],
    recipes: ["r16"]
  },
  {
    id: "filete-pechuga", name: "Filete de Pechuga sin Piel",
    cat: "Cortes Caseros · Pollo", weight: "1 kg",
    photo: "assets/cortes/filete-pechuga.png",
    lede: "El corte magro por excelencia. Sin hueso, sin piel — para preparaciones rápidas y saludables.",
    body: "Pechugas enteras fileteadas, sin hueso ni piel. El corte más proteico del pollo, perfecto para plancha, parrilla o ensaladas.",
    specs: [
      { l: "Origen", v: "Perú", sub: "Pollo nacional" },
      { l: "Proteína", v: "31 g", sub: "Por 100 g" },
      { l: "Grasa", v: "1%", sub: "Muy magra" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 2 días tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 9 meses a –18 °C." },
      { icon: "salt",   title: "Marinada con grasa", body: "La pechuga es magra — necesita aceite o yogur en la marinada para no quedar seca." },
      { icon: "fire",   title: "Cuidado con secarla", body: "Fuego medio, no alto. Termómetro a 72 °C interno y retira. El reposo termina la cocción." }
    ],
    dishes: ["A la plancha", "Pechuga rellena", "Ensalada", "Pollo a la parmesana", "Fajitas"],
    recipes: ["r17"]
  },
  {
    id: "albondiga", name: "Albóndiga de Res",
    cat: "Empanizados · Tradición", weight: "600 g",
    photo: "assets/cortes/albondiga.png",
    lede: "15 albóndigas listas, hechas con bistek molido. Para guisar en salsa, freír o asar.",
    body: "Albóndigas de res precocidas, hechas con bistek molido y la sazón de la casa. Solo requieren calor y una buena salsa.",
    specs: [
      { l: "Unidades", v: "15", sub: "Por bolsa" },
      { l: "Cocción", v: "20 min", sub: "En salsa" },
      { l: "Calidad", v: "Sin", sub: "preservantes" }
    ],
    care: [
      { icon: "fridge", title: "Refrigeración", body: "0 a 4 °C, hasta 3 días tras descongelar." },
      { icon: "snow",   title: "Congelación",   body: "Hasta 6 meses a –18 °C en su bolsa." },
      { icon: "clock",  title: "Cocción directa", body: "Puedes echarlas directo a la salsa caliente, sin descongelar. 25 minutos a fuego medio." },
      { icon: "fire",   title: "Sella primero", body: "Si quieres color extra, dóralas en sartén 2 minutos antes de echarlas a la salsa." }
    ],
    dishes: ["Albóndigas en salsa", "Sopa de albóndigas", "Pasta con albóndigas", "Albóndigas al horno"],
    recipes: ["r18"]
  }
];

window.RECIPES = {
  r1: {
    id:"r1", title:"Bife de chorizo a la parrilla, manteca de hierbas",
    chef:"garibaldi", photo:"assets/chefs/osso-butcher.png",
    time:"35 min", level:"Fácil", serves:"2", temp:"Punto",
    intro:"Una preparación que respeta el corte: sal gruesa, brasa, reposo. La manteca de hierbas se derrite recién al servir.",
    ingredients:[
      {item:"Bife de chorizo Oregon Foods",qty:"500 g"},
      {item:"Sal gruesa de mar",qty:"Al gusto"},
      {item:"Pimienta negra recién molida",qty:"Al gusto"},
      {item:"Manteca a temperatura ambiente",qty:"80 g"},
      {item:"Perejil fresco picado",qty:"2 cdas"},
      {item:"Ajo confitado",qty:"1 diente"},
      {item:"Romero fresco",qty:"1 ramita"}
    ],
    steps:[
      {t:"Templado",body:"Saca el bife de la refrigeradora 30 minutos antes. Sálalo con sal gruesa por ambos lados y déjalo reposar a temperatura ambiente."},
      {t:"Manteca compuesta",body:"Mezcla la manteca con perejil, ajo machacado y hojas de romero. Forma un cilindro con papel film y refrigera."},
      {t:"Brasa alta",body:"Carbón blanco, parrilla a 8 cm. El corte va con la grasa hacia el fuego primero, 4 minutos. Voltéalo y otros 4 minutos."},
      {t:"Reposo",body:"Retira y deja descansar 3 minutos sobre tabla. Es la clave del corte."},
      {t:"Servir",body:"Corta en lonjas contra la fibra. Coloca un disco de la manteca de hierbas encima al servir y deja que se derrita sola."}
    ],
    quote:"El asado no es una receta — es una conversación entre el fuego, el corte y la paciencia.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r2: {
    id:"r2", title:"Tartare de ojo de bife, mostaza ancestral",
    chef:"osterling", photo:"assets/chefs/young-plating.png",
    time:"25 min", level:"Medio", serves:"2", temp:"Crudo",
    intro:"Versión criolla del clásico francés. Corte limpio a cuchillo, mostaza nativa, yema de codorniz.",
    ingredients:[
      {item:"Ojo de bife fresco Oregon Foods",qty:"300 g"},
      {item:"Chalota picada finamente",qty:"1"},
      {item:"Mostaza Dijon",qty:"1 cda"},
      {item:"Alcaparras picadas",qty:"1 cda"},
      {item:"Aceite de oliva extra virgen",qty:"2 cdas"},
      {item:"Yemas de codorniz",qty:"2"},
      {item:"Cebollín picado",qty:"Al gusto"},
      {item:"Sal de Maras y pimienta",qty:"Al gusto"}
    ],
    steps:[
      {t:"Corte",body:"Limpia el ojo de bife de grasa y nervios. Pícalo a cuchillo en cubos de 3 mm. No uses procesador."},
      {t:"Aderezo",body:"En un bowl, mezcla la chalota, mostaza, alcaparras y aceite. Salpimienta."},
      {t:"Mezcla",body:"Incorpora la carne con el aderezo justo antes de servir. Prueba la sal — el ojo de bife pide menos de lo que crees."},
      {t:"Montaje",body:"Con un aro, monta una porción en el centro del plato. Hueco en el centro para la yema de codorniz cruda. Termina con cebollín y un hilo de aceite."}
    ],
    quote:"La carne cruda no perdona errores: pídela del día, córtala bien, sírvela enseguida.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r3: {
    id:"r3", title:"Tiradito de salmón con leche de tigre de rocoto",
    chef:"acurio", photo:"assets/chefs/fish-plating.png",
    time:"20 min", level:"Fácil", serves:"4", temp:"Frío",
    intro:"El tiradito peruano lleva al salmón al territorio criollo. Leche de tigre breve, salmón muy fresco.",
    ingredients:[
      {item:"Salmón Oregon Foods (descongelado correctamente)",qty:"400 g"},
      {item:"Limón sutil fresco",qty:"8 unidades"},
      {item:"Rocoto sin venas ni pepas",qty:"1"},
      {item:"Jengibre rallado",qty:"1 cdta"},
      {item:"Cilantro fresco",qty:"1 ramita"},
      {item:"Hielo en cubos",qty:"Al gusto"},
      {item:"Sal de mar",qty:"Al gusto"},
      {item:"Aceite de oliva",qty:"1 cda"}
    ],
    steps:[
      {t:"Leche de tigre",body:"Licúa limón, rocoto, jengibre y cilantro con hielo y sal. Cuela. Reserva en frío."},
      {t:"Corte sashimi",body:"Lonja el salmón en cortes de 2 mm contra la fibra, con cuchillo bien afilado y un solo movimiento."},
      {t:"Plateado",body:"Acomoda los cortes en plato frío, sin sobreponer. Una pizca de sal de mar sobre cada lonja."},
      {t:"Servir",body:"Bañar con la leche de tigre justo antes de servir. Hilo de aceite de oliva al final. Servir de inmediato."}
    ],
    quote:"El cebiche y el tiradito comparten alma: pescado del día, ácido justo, mano firme.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r4: {
    id:"r4", title:"Tomahawk reverse-sear con sal de Maras",
    chef:"garibaldi", photo:"assets/chefs/osso-butcher.png",
    time:"1 h 45 min", level:"Medio", serves:"3", temp:"Punto",
    intro:"Técnica de cocción inversa: bajas temperaturas primero, sellado final. Resultado: rosa de pared a pared.",
    ingredients:[
      {item:"Tomahawk Oregon Foods",qty:"1.2 kg"},
      {item:"Sal de Maras",qty:"Al gusto"},
      {item:"Pimienta negra entera, recién machacada",qty:"Al gusto"},
      {item:"Ajo en camisa",qty:"4 dientes"},
      {item:"Romero y tomillo",qty:"ramitas"},
      {item:"Manteca",qty:"30 g"}
    ],
    steps:[
      {t:"Dry-brine",body:"Sala el tomahawk generosamente 2 horas antes y déjalo destapado en la refrigeradora para secar la superficie."},
      {t:"Horno bajo",body:"Horno a 110 °C con termómetro insertado. Cocina hasta llegar a interno 50 °C — alrededor de 60 minutos."},
      {t:"Reposo",body:"Saca y deja reposar 10 minutos antes del sellado. Este paso es esencial."},
      {t:"Sellado",body:"Sartén de hierro al rojo vivo. Sella 90 segundos por lado con manteca, ajo, romero y tomillo. Baña con la manteca espumada."},
      {t:"Corte",body:"Separa la carne del hueso con cuchillo, luego corta lonjas gruesas contra la fibra. Termina con pimienta machacada."}
    ],
    quote:"Una buena carne no se 'cocina' — se acompaña. El fuego solo te ayuda a sacar lo que ya está adentro.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r5: {
    id:"r5", title:"Pollo dorado a la chorrillana, cocción lenta",
    chef:"solis", photo:"assets/chefs/kitchen-knife.png",
    time:"1 h 20 min", level:"Fácil", serves:"4", temp:"Caliente",
    intro:"Pollo con la salsa chorrillana del norte: tomate, ají amarillo, cebolla roja, cerveza negra.",
    ingredients:[
      {item:"Pollo Oregon Foods en presas",qty:"1 unidad"},
      {item:"Cebolla roja en pluma gruesa",qty:"2"},
      {item:"Tomate maduro en gajos",qty:"3"},
      {item:"Ají amarillo en tiras",qty:"2"},
      {item:"Cerveza negra",qty:"1 botella"},
      {item:"Ajo molido",qty:"2 cdas"},
      {item:"Comino, sal, pimienta",qty:"Al gusto"},
      {item:"Caldo de pollo",qty:"1 taza"}
    ],
    steps:[
      {t:"Sazón previa",body:"Sazona el pollo con sal, pimienta, comino y ajo. Reposa 30 minutos."},
      {t:"Dorado",body:"En olla de fondo grueso, dora cada presa por todos lados a fuego medio. Retira y reserva."},
      {t:"Sofrito",body:"En la misma olla, sofríe cebolla y ají amarillo hasta caramelizar. Agrega tomate y cocina hasta deshacer."},
      {t:"Cocción lenta",body:"Devuelve el pollo, baña con cerveza y caldo. Tapa y cocina 45 minutos a fuego bajo."},
      {t:"Servir",body:"Acompaña con yuca sancochada y arroz blanco. La salsa debe quedar espesa, brillante."}
    ],
    quote:"La cocina del norte se hace con tiempo. No hay atajo para una buena chorrillana.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r6: {
    id:"r6", title:"Choripán de domingo con chimichurri criollo",
    chef:"garibaldi", photo:"assets/chefs/bbq-grill.png",
    time:"30 min", level:"Fácil", serves:"4", temp:"Caliente",
    intro:"El sándwich definitivo del asado. Pan crocante, chorizo dorado, chimichurri de la noche anterior.",
    ingredients:[
      {item:"Chorizo parrillero Oregon Foods",qty:"4 unidades"},
      {item:"Pan baguette o francés",qty:"4 panes"},
      {item:"Perejil fresco picado",qty:"1 taza"},
      {item:"Ajo picado",qty:"4 dientes"},
      {item:"Ají amarillo seco molido",qty:"1 cdta"},
      {item:"Orégano seco",qty:"2 cdtas"},
      {item:"Vinagre de vino tinto",qty:"1/2 taza"},
      {item:"Aceite de oliva",qty:"1 taza"},
      {item:"Sal y pimienta",qty:"Al gusto"}
    ],
    steps:[
      {t:"Chimichurri",body:"Mezcla todos los ingredientes excepto aceite. Reposa 30 minutos. Agrega aceite, ajusta sal. Ideal hacerlo la noche anterior."},
      {t:"Parrilla",body:"Brasa media. Los chorizos van enteros, sin pinchar, 6 minutos por lado. Termina abriéndolos a la mitad para crispar adentro."},
      {t:"Pan",body:"Abre el pan y tuéstalo en la parrilla 30 segundos."},
      {t:"Armado",body:"Pan, chorizo abierto, cucharada generosa de chimichurri. Cierra. Servir de inmediato."}
    ],
    quote:"El choripán no se piensa. Se come.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r7: {
    id:"r7", title:"Costillas glaseadas con ají panca y miel de caña",
    chef:"acurio", photo:"assets/chefs/open-fire.png",
    time:"3 h 15 min", level:"Medio", serves:"4", temp:"Caliente",
    intro:"El BBQ peruano: ají panca por chipotle, miel de caña por sirope de maple. Pegajoso, ahumado, dulce.",
    ingredients:[
      {item:"Costilla de cerdo Oregon Foods",qty:"1.2 kg"},
      {item:"Pasta de ají panca",qty:"3 cdas"},
      {item:"Miel de caña (chancaca derretida)",qty:"1/2 taza"},
      {item:"Vinagre de manzana",qty:"1/4 taza"},
      {item:"Salsa de soya",qty:"2 cdas"},
      {item:"Páprika ahumada",qty:"1 cda"},
      {item:"Azúcar morena",qty:"2 cdas"},
      {item:"Ajo molido",qty:"1 cda"}
    ],
    steps:[
      {t:"Dry rub",body:"Mezcla páprika ahumada, azúcar morena, sal y pimienta. Frota las costillas y reposa 4 horas."},
      {t:"Cocción lenta",body:"Horno a 120 °C envueltas en aluminio sobre rejilla con bandeja debajo. 2.5 horas."},
      {t:"Glaseado",body:"Mezcla ají panca, miel de caña, vinagre, soya y ajo. Reduce 5 minutos en sartén."},
      {t:"Caramelizar",body:"Descubre las costillas, pinta con glaseado y vuelve al horno a 200 °C, 15 minutos más, pintando dos veces."},
      {t:"Reposo y corte",body:"Reposa 10 minutos. Corta entre los huesos. Sirve con el glaseado sobrante."}
    ],
    quote:"Nuestros sabores peruanos pueden hablar el lenguaje del BBQ, solo que con más historia.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r8: {
    id:"r8", title:"Tomahawk al fuego con puré de oca andina",
    chef:"martinez", photo:"assets/chefs/open-fire.png",
    time:"1 h", level:"Medio", serves:"3", temp:"Punto",
    intro:"Carne y altura. Sellado al fuego directo y puré de oca como guarnición criolla.",
    ingredients:[
      {item:"Tomahawk Oregon Foods",qty:"1.2 kg"},
      {item:"Oca andina pelada",qty:"500 g"},
      {item:"Manteca",qty:"50 g"},
      {item:"Crema de leche",qty:"1/4 taza"},
      {item:"Sal de Maras",qty:"Al gusto"},
      {item:"Pimienta rosa",qty:"Al gusto"},
      {item:"Carbón duro",qty:"Al gusto"}
    ],
    steps:[
      {t:"Brasas vivas",body:"Carbón blanco con llama baja. El tomahawk va salado generosamente y limpio de humedad."},
      {t:"Sellado directo",body:"Sobre brasa viva, 4 minutos por lado para una costra profunda."},
      {t:"Cocción indirecta",body:"Mueve a zona sin fuego, tapa. Cocina 18–22 minutos hasta interno 52 °C."},
      {t:"Puré de oca",body:"Sancocha la oca hasta tierna. Aplasta con manteca y crema, sal de Maras al final."},
      {t:"Reposo y plateado",body:"Reposa la carne 12 minutos. Sirve sobre puré de oca tibio, pimienta rosa."}
    ],
    quote:"Cada altura del Perú nos da un sabor. La oca es de los Andes lo que la papa es del mundo.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r10: {
    id:"r10", title:"Salmón nikkei con ponzu de maracuyá",
    chef:"tsumura", photo:"assets/chefs/copper-lamps.png",
    time:"30 min", level:"Medio", serves:"2", temp:"Templado",
    intro:"Mestizaje en tres bocados: sellado nikkei, acidez peruana, sutileza japonesa.",
    ingredients:[
      {item:"Filete de salmón Oregon Foods",qty:"300 g"},
      {item:"Pulpa de maracuyá",qty:"1/4 taza"},
      {item:"Salsa de soya",qty:"3 cdas"},
      {item:"Mirin",qty:"1 cda"},
      {item:"Jengibre rallado",qty:"1 cdta"},
      {item:"Sésamo blanco y negro",qty:"Al gusto"},
      {item:"Cebollín en pluma",qty:"Al gusto"},
      {item:"Aceite de sésamo",qty:"1 cdta"}
    ],
    steps:[
      {t:"Ponzu",body:"Mezcla maracuyá, soya, mirin y jengibre. Reposa 10 minutos en frío."},
      {t:"Templado",body:"Saca el salmón 10 minutos antes y sécalo bien con papel. Una pizca de sal."},
      {t:"Sellado tataki",body:"Sartén muy caliente con un toque de aceite de sésamo. 40 segundos por lado — busca dorar afuera, dejar rosa adentro."},
      {t:"Corte",body:"Lonjea en cortes de 1.5 cm. Acomoda en plato frío."},
      {t:"Plateado",body:"Baña con ponzu, espolvorea sésamo y cebollín. Servir inmediato."}
    ],
    quote:"Nikkei no es fusión por capricho — es el resultado de generaciones cocinando juntas en un mismo país.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r11: {
    id:"r11", title:"Lomo saltado clásico, al wok",
    chef:"acurio", photo:"assets/chefs/pan-sear.png",
    time:"30 min", level:"Fácil", serves:"3", temp:"Caliente",
    intro:"El plato bandera del Perú. Wok altísimo, lomo en cubos sellado en segundos, papas crocantes y arroz blanco al lado.",
    ingredients:[
      {item:"Lomo Fino en Cubos Oregon Foods",qty:"500 g"},
      {item:"Cebolla roja en pluma gruesa",qty:"1"},
      {item:"Tomate maduro en gajos",qty:"2"},
      {item:"Ají amarillo en tiras",qty:"1"},
      {item:"Ajo molido",qty:"1 cda"},
      {item:"Sillao (salsa de soya)",qty:"3 cdas"},
      {item:"Vinagre tinto",qty:"1 cda"},
      {item:"Pisco quebranta",qty:"1 chorrito"},
      {item:"Cilantro fresco",qty:"ramita"},
      {item:"Papas amarillas en bastones, fritas",qty:"para acompañar"},
      {item:"Arroz blanco recién cocido",qty:"para acompañar"}
    ],
    steps:[
      {t:"Wok al rojo",body:"Wok o sartén grande a fuego máximo. Aceite caliente, casi humeando."},
      {t:"Sellado del lomo",body:"Echa el lomo en cubos sin amontonar — 90 segundos por lado para que selle y no suelte agua."},
      {t:"Aromáticos",body:"Agrega ajo, ají amarillo y cebolla. Saltea 1 minuto. Flamea con pisco si lo prefieres."},
      {t:"Líquidos",body:"Tomate, sillao y vinagre. 1 minuto más — el tomate suelta jugo y la salsa toma cuerpo."},
      {t:"Servir",body:"Cilantro recién picado, papas fritas encima y arroz blanco al lado. Servir de inmediato."}
    ],
    quote:"El lomo saltado se hace al vuelo. Si lo cocinas tres minutos de más, ya no es saltado.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r12: {
    id:"r12", title:"Seco de res norteño con frejoles",
    chef:"solis", photo:"assets/chefs/open-fire.png",
    time:"2 h 30 min", level:"Medio", serves:"5", temp:"Caliente",
    intro:"El seco del norte: culantro molido, chicha de jora, cocción de paciencia. Con frejoles canarios y arroz.",
    ingredients:[
      {item:"Res para Guiso Oregon Foods",qty:"800 g"},
      {item:"Culantro fresco",qty:"1 atado grande"},
      {item:"Chicha de jora (o cerveza negra)",qty:"1 taza"},
      {item:"Ají amarillo en pasta",qty:"2 cdas"},
      {item:"Cebolla roja picada",qty:"1"},
      {item:"Ajo molido",qty:"2 cdas"},
      {item:"Zapallo loche rallado",qty:"1/2 taza"},
      {item:"Caldo de res",qty:"2 tazas"},
      {item:"Frejoles canarios sancochados",qty:"para acompañar"},
      {item:"Yuca sancochada",qty:"para acompañar"}
    ],
    steps:[
      {t:"Sellado",body:"Dora los trozos de guiso en aceite caliente, por todos lados. Retira y reserva."},
      {t:"Aderezo",body:"En la misma olla, sofríe cebolla, ajo, ají amarillo y loche hasta que pierdan crudo."},
      {t:"Culantro licuado",body:"Licúa el culantro con un poco de caldo y agrégalo. Cocina 5 minutos."},
      {t:"Cocción lenta",body:"Devuelve la carne, agrega chicha y caldo. Tapa y cocina 2 horas a fuego mínimo, hasta que el cuchillo entre solo."},
      {t:"Servir",body:"Con frejoles, yuca y arroz blanco. El plato del domingo familiar."}
    ],
    quote:"El seco no se apura. Mientras más tiempo, más sabor — y mejor cuenta lo que somos como cocina del norte.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r13: {
    id:"r13", title:"Bistek a lo pobre con plátano y huevo",
    chef:"osterling", photo:"assets/chefs/pan-sear.png",
    time:"20 min", level:"Fácil", serves:"2", temp:"Caliente",
    intro:"El plato más generoso de la cocina peruana. Bistek, papas fritas, plátano maduro, huevo frito y arroz. Todo junto.",
    ingredients:[
      {item:"Bistek de Res Oregon Foods",qty:"2 filetes"},
      {item:"Papas amarillas en bastones",qty:"2"},
      {item:"Plátano maduro en rodajas",qty:"1"},
      {item:"Huevos",qty:"2"},
      {item:"Ajo molido",qty:"1 cdta"},
      {item:"Sillao",qty:"1 cda"},
      {item:"Cebolla roja en aros",qty:"1/2"},
      {item:"Arroz blanco",qty:"para acompañar"},
      {item:"Sal y pimienta",qty:"Al gusto"}
    ],
    steps:[
      {t:"Papas",body:"Fríe los bastones de papa en aceite a 180 °C hasta dorar. Escurre sobre papel."},
      {t:"Plátano",body:"En el mismo aceite, fríe las rodajas de plátano hasta dorar. Reserva."},
      {t:"Bistek",body:"Sartén muy caliente, aceite mínimo. Sella el bistek 2 minutos por lado con ajo y un toque de sillao."},
      {t:"Huevos",body:"En otra sartén, fríe los huevos con la yema blanda."},
      {t:"Armado",body:"Plato: arroz, bistek encima, papas a un lado, plátanos al otro, huevo coronando todo. Cebolla cruda como contraste."}
    ],
    quote:"El bistek a lo pobre tiene de pobre solo el nombre — es el plato más rico de la cocina criolla.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r14: {
    id:"r14", title:"Tallarín saltado con molida y huacatay",
    chef:"acurio", photo:"assets/chefs/garnish-plating.png",
    time:"35 min", level:"Fácil", serves:"4", temp:"Caliente",
    intro:"La salsa boloñesa peruana: molida, ají panca, huacatay. El huacatay manda.",
    ingredients:[
      {item:"Carne Molida Oregon Foods",qty:"500 g"},
      {item:"Tomate maduro pelado",qty:"4"},
      {item:"Cebolla roja picada fino",qty:"1"},
      {item:"Pasta de ají panca",qty:"2 cdas"},
      {item:"Pasta de huacatay",qty:"1 cdta"},
      {item:"Ajo molido",qty:"2 cdas"},
      {item:"Vino tinto",qty:"1/2 taza"},
      {item:"Tallarín tipo espagueti",qty:"400 g"},
      {item:"Queso parmesano rallado",qty:"para servir"},
      {item:"Sal, pimienta, comino",qty:"Al gusto"}
    ],
    steps:[
      {t:"Aderezo",body:"Sofríe cebolla, ajo, ají panca y comino hasta que la cebolla esté translúcida."},
      {t:"Sella la molida",body:"Agrega la carne molida en porciones, deja que dore antes de mover."},
      {t:"Salsa",body:"Agrega tomate licuado, vino, huacatay. Sal y pimienta. Cocina destapado 25 minutos hasta que reduzca."},
      {t:"Pasta",body:"Cuece el tallarín al dente en agua salada. Reserva 1/2 taza del agua de cocción."},
      {t:"Mezcla final",body:"Mezcla pasta con salsa y un chorrito del agua de cocción. Termina con parmesano abundante."}
    ],
    quote:"El huacatay le da a la salsa una nota verde, peruana, que ninguna boloñesa italiana puede imitar.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r15: {
    id:"r15", title:"Chaufa de pollo con kion y cebollín",
    chef:"tsumura", photo:"assets/chefs/young-plating.png",
    time:"25 min", level:"Fácil", serves:"4", temp:"Caliente",
    intro:"El arroz chaufa de chifa peruano: wok ardiendo, kion fresco, sillao oscuro, huevo revuelto al final.",
    ingredients:[
      {item:"Lomito de Pollo Oregon Foods",qty:"500 g, en tiras"},
      {item:"Arroz blanco frío (del día anterior)",qty:"4 tazas"},
      {item:"Huevos",qty:"3"},
      {item:"Cebollín en pluma",qty:"1 manojo"},
      {item:"Kion (jengibre) picado fino",qty:"1 cda"},
      {item:"Ajo molido",qty:"1 cda"},
      {item:"Sillao oscuro",qty:"4 cdas"},
      {item:"Aceite de ajonjolí",qty:"1 cdta"},
      {item:"Pimiento rojo en cubos",qty:"1/2"}
    ],
    steps:[
      {t:"Huevo revuelto",body:"Wok ardiendo, aceite. Echa los huevos batidos, revuelve hasta cuajar y retira."},
      {t:"Pollo al wok",body:"Más aceite. Sella las tiras de pollo a fuego máximo, 2 minutos. Que doren."},
      {t:"Aromáticos",body:"Ajo, kion y pimiento. 30 segundos."},
      {t:"Arroz",body:"Agrega el arroz frío, separa con palitos o cuchara. Sillao en hilo por las paredes del wok para que se caramelice."},
      {t:"Final",body:"Devuelve el huevo. Cebollín al final fuera del fuego. Unas gotas de aceite de ajonjolí. Listo."}
    ],
    quote:"El arroz frío y el wok bien caliente — sin esos dos, no hay chaufa que valga.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r16: {
    id:"r16", title:"Pollo apanado con limón y aceitunas",
    chef:"garibaldi", photo:"assets/chefs/pan-sear.png",
    time:"40 min", level:"Fácil", serves:"3", temp:"Caliente",
    intro:"Apanado dorado, crocante por fuera, jugoso por dentro. Pierna deshuesada que rinde y no se seca.",
    ingredients:[
      {item:"Filetes de Pierna Oregon Foods",qty:"700 g"},
      {item:"Pan rallado fresco",qty:"2 tazas"},
      {item:"Harina sin preparar",qty:"1 taza"},
      {item:"Huevos batidos",qty:"3"},
      {item:"Limón sutil",qty:"2"},
      {item:"Aceitunas negras",qty:"1/2 taza"},
      {item:"Ajo molido",qty:"1 cda"},
      {item:"Mostaza",qty:"1 cda"},
      {item:"Sal, pimienta, comino",qty:"Al gusto"}
    ],
    steps:[
      {t:"Sazonado",body:"Adoba los filetes con ajo, mostaza, sal, pimienta y comino. Reposa 30 minutos."},
      {t:"Apanado en 3 tiempos",body:"Pasa por harina, luego huevo batido, luego pan rallado. Aprieta para que pegue."},
      {t:"Reposo",body:"Refrigera los filetes apanados 15 minutos. Esto evita que se desprenda el apanado al freír."},
      {t:"Fritura",body:"Aceite a 170 °C, no más. Fríe 3 minutos por lado hasta dorar parejo. Escurre sobre papel."},
      {t:"Servir",body:"Con gotas de limón, aceitunas y arroz blanco. Papa amarilla sancochada queda perfecta al lado."}
    ],
    quote:"Un buen apanado no es tarea — es geometría: harina, huevo, pan rallado. Saltarte un paso es perderlo todo.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r17: {
    id:"r17", title:"Pechuga a la plancha con quinoa y palta",
    chef:"martinez", photo:"assets/chefs/garnish-plating.png",
    time:"30 min", level:"Fácil", serves:"2", temp:"Templado",
    intro:"El plato sano que igual sabe a algo. Pechuga marinada con yogur, quinoa tricolor, palta partida.",
    ingredients:[
      {item:"Filete de Pechuga Oregon Foods",qty:"2 filetes"},
      {item:"Yogur natural",qty:"3 cdas"},
      {item:"Ajo molido",qty:"1 cdta"},
      {item:"Páprika ahumada",qty:"1 cdta"},
      {item:"Limón",qty:"1"},
      {item:"Quinoa tricolor",qty:"1 taza"},
      {item:"Palta",qty:"1"},
      {item:"Tomate cherry",qty:"1 taza"},
      {item:"Aceite de oliva",qty:"2 cdas"},
      {item:"Sal de Maras y pimienta",qty:"Al gusto"}
    ],
    steps:[
      {t:"Marinada con yogur",body:"Mezcla yogur, ajo, páprika, ralladura y jugo de limón. Cubre las pechugas y refrigera 30 minutos. El yogur las mantiene tiernas."},
      {t:"Quinoa",body:"Lava la quinoa muy bien. Cocina con 2 tazas de agua y sal, 15 minutos a fuego bajo. Reposa 5 minutos."},
      {t:"Plancha",body:"Plancha o sartén a fuego medio. Limpia el exceso de marinada de las pechugas y cocina 4 minutos por lado."},
      {t:"Reposo",body:"Saca y deja reposar 3 minutos tapadas. Este paso es esencial: la pechuga termina su cocción fuera del fuego."},
      {t:"Montaje",body:"Quinoa como base, pechuga laminada encima, palta en gajos, tomate cherry partido. Aceite de oliva, sal de Maras."}
    ],
    quote:"La pechuga merece la misma atención que un buen corte de res. La diferencia es saber retirarla a tiempo.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  },
  r18: {
    id:"r18", title:"Albóndigas en salsa de tomate y orégano",
    chef:"osterling", photo:"assets/chefs/copper-lamps.png",
    time:"35 min", level:"Fácil", serves:"4", temp:"Caliente",
    intro:"El guiso de la abuela: albóndigas en salsa espesa de tomate, orégano y un toque de ají panca.",
    ingredients:[
      {item:"Albóndigas de Res Oregon Foods",qty:"15 unidades"},
      {item:"Tomate maduro licuado",qty:"4"},
      {item:"Cebolla roja picada",qty:"1"},
      {item:"Ajo molido",qty:"2 cdas"},
      {item:"Pasta de ají panca",qty:"1 cda"},
      {item:"Orégano seco",qty:"1 cdta"},
      {item:"Caldo de res",qty:"1 taza"},
      {item:"Aceite de oliva",qty:"2 cdas"},
      {item:"Arroz blanco",qty:"para acompañar"},
      {item:"Perejil picado",qty:"para terminar"}
    ],
    steps:[
      {t:"Sella las albóndigas",body:"En sartén con aceite caliente, dora las albóndigas por todos lados, 3 minutos. Retira y reserva."},
      {t:"Aderezo",body:"En la misma olla, sofríe cebolla y ajo. Cuando estén translúcidos, agrega ají panca y orégano."},
      {t:"Salsa",body:"Echa tomate licuado y caldo. Sal y pimienta. Hierve suave 10 minutos hasta que espese."},
      {t:"Cocción",body:"Devuelve las albóndigas a la salsa. Tapa y cocina 15 minutos a fuego bajo, removiendo con cuidado."},
      {t:"Servir",body:"Perejil fresco encima, arroz blanco al lado. Y pan para mojar la salsa, siempre."}
    ],
    quote:"Las albóndigas no son un plato — son un recuerdo. Cada familia tiene su salsa. Esta es la nuestra.",
    quoteSrc:"Frase editorial · Consejos del Chef"
  }
};

/* ============================================================
   Catálogo de productos complementarios (terceros)
   Disponibles en tiendas Oregon Foods
   ============================================================ */
window.COMPLEMENTS = [
  { id:"c1",  cat:"Vino Tinto",        name:"Malbec Santa Julia",                brand:"Santa Julia",        desc:"Malbec argentino frutal y accesible. El clásico del asado de domingo." },
  { id:"c2",  cat:"Vino Tinto",        name:"Oveja Negra Gran Reserva Cab. Sauv.",brand:"Oveja Negra",        desc:"Cabernet Sauvignon chileno de altura. Estructurado, largo en boca." },
  { id:"c3",  cat:"Vino Tinto",        name:"Malbec Alambrado",                  brand:"Alambrado",          desc:"Malbec de Mendoza para el día a día. Frutado y de fácil maridaje." },
  { id:"c4",  cat:"Vino Tinto",        name:"Cote des Roses Pinot Noir",         brand:"Gérard Bertrand",    desc:"Pinot Noir francés elegante, taninos suaves. Para cortes delicados." },
  { id:"c5",  cat:"Vino Blanco",       name:"Crios Chardonnay",                  brand:"Dominio del Plata",  desc:"Chardonnay argentino fresco y cítrico. Excelente con pescados." },
  { id:"c6",  cat:"Vino Blanco",       name:"La Flor Sauvignon Blanc",           brand:"Pulenta Estate",     desc:"Sauvignon Blanc de Mendoza. Herbáceo, con notas de maracuyá." },
  { id:"c7",  cat:"Vino Blanco",       name:"Santa Julia Chardonnay",            brand:"Santa Julia",        desc:"Chardonnay suave y sin exceso de madera. Para platos delicados." },
  { id:"c8",  cat:"Vino Rosado",       name:"Cote des Roses Rosé",               brand:"Gérard Bertrand",    desc:"Rosado provenzal en botella icónica. Fresco y muy versátil." },
  { id:"c9",  cat:"Vino Rosado",       name:"Saurus Pinot Noir Rosé",            brand:"Saurus",             desc:"Rosado patagónico de Pinot Noir. Aromático, suave, frutos rojos." },
  { id:"c10", cat:"Espumante",         name:"Riccadonna Moscato Rosé",           brand:"Riccadonna",         desc:"Espumante italiano semidulce. Para aperitivo o cierre festivo." },
  { id:"c11", cat:"Cerveza",           name:"Heineken",                          brand:"Heineken",           desc:"Lager holandesa refrescante y limpia. El clásico para cualquier corte." },
  { id:"c12", cat:"Cerveza",           name:"Estrella Damm",                     brand:"Estrella Damm",      desc:"Lager mediterránea española. Suave, con notas de maíz y arroz." },
  { id:"c13", cat:"Cerveza de Trigo",  name:"Hofbräu Hefe Weizen",               brand:"Hofbräu",            desc:"Trigo bávaro sin filtrar. Cremosa, con notas de banana y clavo." },
  { id:"c14", cat:"Cerveza Stout",     name:"Guinness",                          brand:"Guinness",           desc:"Stout irlandesa tostada y cremosa. Potencia el sabor de estofados." },
  { id:"c15", cat:"Cerveza de Trigo",  name:"Schöfferhofer Sin Filtrar",         brand:"Schöfferhofer",      desc:"Trigo alemán sin filtrar. Frutal, con levadura en suspensión." },
  { id:"c16", cat:"Queso",             name:"Manchego de Oveja",                 brand:"Artesanal",          desc:"Manchego curado 6 meses. Firme, con sabor tostado y notas de oveja." },
  { id:"c17", cat:"Queso",             name:"Brie Prestige",                     brand:"Prestige",           desc:"Brie francés de doble crema. Suave y mantecoso. Para tabla de quesos." },
  { id:"c18", cat:"Queso",             name:"Provolone Dolce Auricchio",         brand:"Auricchio",          desc:"Provolone italiano joven. Semi-suave, para fundir o servir en tabla." },
  { id:"c19", cat:"Queso",             name:"Parmigiano Reggiano Zanetti",       brand:"Zanetti",            desc:"Parmesano DOP italiano, 18 meses de maduración. Para rallar o en trozos." },
  { id:"c20", cat:"Queso",             name:"Queso de Oveja al Romero",          brand:"Artesanal",          desc:"Queso de oveja con cobertura de romero. Aromático e intenso." },
  { id:"c21", cat:"Salsa",             name:"Chimichurri Clásico",               brand:"Oregon Foods",       desc:"Perejil, ajo, orégano, vinagre. La salsa inseparable del asado argentino." },
  { id:"c22", cat:"Salsa",             name:"Chimichurri al Rocoto",             brand:"Oregon Foods",       desc:"Chimichurri con toque peruano de rocoto. Para los que quieren picante." },
  { id:"c23", cat:"Salsa",             name:"Chimichurri Tío Joe Gaucho",        brand:"Tío Joe",            desc:"Chimichurri gourmet estilo gaucho rutero. 220 g." },
  { id:"c24", cat:"Salsa",             name:"BBQ Sweet & Spicy Sweet Baby Ray's",brand:"Sweet Baby Ray's",   desc:"Salsa barbecue americana. Dulce con toque ahumado y picante. 510 ml." },
  { id:"c25", cat:"Salsa",             name:"Salsa Ají El Charrúa",              brand:"El Charrúa",         desc:"Ají peruano al estilo charrúa. Picante equilibrado para carnes." },
  { id:"c26", cat:"Salsa",             name:"Crema de Rocoto Paladar Gourmet",   brand:"Paladar Gourmet",    desc:"Crema de rocoto suave. Perfecta para pollo a la plancha o como dip." },
  { id:"c27", cat:"Salsa",             name:"Dip con Palta Casa Verde",          brand:"Casa Verde",         desc:"Dip de palta fresco y natural. Para pollo, vegetales o chips." },
  { id:"c28", cat:"Marinado",          name:"Marinado BBQ Garlico",              brand:"Garlico",            desc:"Marinado listo con sabor BBQ y ajo. Aplica y lleva al fuego. 250 g." },
  { id:"c29", cat:"Marinado",          name:"Marinado Lomo Saltado Garlico",     brand:"Garlico",            desc:"Marinado con sillao, ají amarillo y ajo. Para el lomo saltado perfecto." },
  { id:"c30", cat:"Marinado",          name:"Marinado Criollo Garlico",          brand:"Garlico",            desc:"Marinado criollo peruano. Ajo, comino, ají panca. Para res o pollo." },
  { id:"c31", cat:"Sal",               name:"Sal de Maras en Moledor",           brand:"Maras",              desc:"Sal rosada del Cusco extraída de manantiales andinos. 100 g." },
  { id:"c32", cat:"Sal",               name:"Sal Parrillera Condimentada",       brand:"Specia",             desc:"Mezcla de 12 especias para parrilla. El secreto de un buen asado." },
  { id:"c33", cat:"Sal",               name:"Sal Ají Ahumado",                   brand:"Specia",             desc:"Sal con ají ahumado. Para carnes a la parrilla y vegetales. 300 g." },
  { id:"c34", cat:"Pan",               name:"Pan Hamburguesa",                   brand:"Pancitos del Sur",   desc:"Pan de hamburguesa suave. Para choripán, hamburguesa o sándwich." },
  { id:"c35", cat:"Pan",               name:"Pan con Queso Paria",               brand:"Pancitos del Sur",   desc:"Pan relleno con queso paria. Congelado, listo para hornear. 450 g." },
  { id:"c36", cat:"Guarnición",        name:"Papa Prefrita Ziggy",               brand:"LW Holanda",         desc:"Papa prefrita congelada de Holanda. Crujiente en horno o freidora." },
  { id:"c37", cat:"Guarnición",        name:"Camote Rejilla Oregon Reserve",     brand:"Oregon Reserve",     desc:"Camote en rejilla precocido. Dulce natural, ideal como guarnición." },
  { id:"c38", cat:"Picada",            name:"Aceituna Botija",                   brand:"Oregon Foods",       desc:"Aceituna botija peruana sin pepa. Para tabla de quesos y charcutería." },
];

/* Maridajes por producto */
window.PRODUCT_COMPLEMENTS = {
  "bife-chorizo":       ["c1",  "c21", "c31", "c32"],
  "ojo-bife":           ["c2",  "c23", "c31", "c17"],
  "chorizo-parrillero": ["c11", "c34", "c22", "c12"],
  "tomahawk":           ["c3",  "c31", "c32", "c13"],
  "salmon":             ["c5",  "c8",  "c31", "c25"],
  "asado-tira":         ["c12", "c21", "c32", "c36"],
  "picana":             ["c1",  "c21", "c31", "c33"],
  "lomo-fino":          ["c4",  "c23", "c31", "c38"],
  "costilla-cuadril":   ["c13", "c24", "c32", "c36"],
  "entrana-fina":       ["c3",  "c22", "c31", "c11"],
  "lomo-cubos":         ["c29", "c11", "c36", "c26"],
  "guiso":              ["c14", "c30", "c36", "c32"],
  "bistek":             ["c36", "c38", "c32", "c11"],
  "carne-molida":       ["c34", "c24", "c21", "c11"],
  "lomito-pollo":       ["c30", "c15", "c36", "c26"],
  "filetes-pierna":     ["c28", "c26", "c36", "c37"],
  "filete-pechuga":     ["c6",  "c27", "c30", "c37"],
  "albondiga":          ["c19", "c35", "c25", "c9"],
};
