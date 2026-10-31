const HUB_PROFESIONES = [
  {
    "nombre": "Bomberos",
    "slug": "bomberos",
    "propia": true,
    "badge": "Coef. 0,20",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Bomberos Forestales",
    "slug": "bomberos-forestales",
    "propia": true,
    "badge": "Coef. 0,20",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Policía Local",
    "slug": "policia-local",
    "propia": true,
    "badge": "Coef. 0,20",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Policía Nacional",
    "slug": "policia-nacional",
    "propia": true,
    "badge": "Reforma en trámite",
    "badgeColor": "amber"
  },
  {
    "nombre": "Guardia Civil",
    "slug": "guardia-civil",
    "propia": true,
    "badge": "Reforma en trámite",
    "badgeColor": "amber"
  },
  {
    "nombre": "Ertzaintza",
    "slug": "ertzaintza",
    "propia": true,
    "badge": "Coef. 0,20",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Mossos d'Esquadra",
    "slug": "mossos-desquadra",
    "propia": true,
    "badge": "Coef. 0,20",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Policía Foral de Navarra",
    "slug": "policia-foral-navarra",
    "propia": true,
    "badge": "Coef. 0,20",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Jubilación Ordinaria (Régimen General)",
    "slug": "jubilacion-ordinaria",
    "propia": true
  },
  {
    "nombre": "Funcionarios Docentes",
    "slug": "funcionarios-docentes",
    "propia": true,
    "badge": "Disponible",
    "badgeColor": "indigo",
    "alias": "profesor, profesores, profesora, maestro, maestra, docente, docentes"
  },
  {
    "nombre": "Administración General del Estado",
    "slug": "administracion-general-estado",
    "propia": true,
    "badge": "Disponible",
    "badgeColor": "indigo"
  },
  {
    "nombre": "Carrera Judicial y Fiscal",
    "slug": "carrera-judicial-fiscal",
    "propia": true,
    "badge": "Disponible",
    "badgeColor": "indigo"
  },
  {
    "nombre": "Fuerzas Armadas",
    "slug": "fuerzas-armadas",
    "propia": true,
    "badge": "Disponible",
    "badgeColor": "indigo"
  },
  {
    "nombre": "Minería",
    "slug": "mineria",
    "propia": true,
    "badge": "Coef. 0,05-0,50",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Ferroviarios",
    "slug": "ferroviarios",
    "propia": true,
    "badge": "Coef. 0,10-0,15",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Artistas",
    "slug": "artistas",
    "propia": true,
    "badge": "Jubilación anticipada",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Profesionales Taurinos",
    "slug": "toreros",
    "propia": true,
    "badge": "Edad reducida",
    "badgeColor": "emerald",
    "alias": "torero, matador, rejoneador, novillero, banderillero, picador, mozo de espadas"
  },
  {
    "nombre": "Marina Mercante",
    "slug": "marina-mercante",
    "propia": true,
    "badge": "Coef. 0,20-0,40",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Pesca",
    "slug": "pesca",
    "propia": true,
    "badge": "Coef. 0,15-0,40",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Estiba Portuaria",
    "slug": "estiba-portuaria",
    "propia": true,
    "badge": "Coef. 0,30",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Marisqueo",
    "slug": "marisqueo",
    "propia": true,
    "badge": "Coef. 0,15",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Buzos Profesionales",
    "slug": "buzos",
    "propia": true,
    "badge": "Coef. 0,15",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Jubilación por Discapacidad",
    "slug": "jubilacion-discapacidad",
    "propia": true
  },
  {
    "nombre": "Personal de Vuelo",
    "slug": "personal-de-vuelo",
    "propia": true,
    "badge": "Coef. 0,30-0,40",
    "badgeColor": "emerald",
    "alias": "piloto, pilotos, copiloto, aviador, tripulante, azafata, auxiliar de vuelo, comandante, comandante de vuelo"
  },
  {
    "nombre": "Intérpretes de Lengua de Signos",
    "slug": "interpretes-lengua-signos",
    "propia": false,
    "categoria": "Traducción e Interpretación",
    "color": "blue",
    "cotizacion": "Mixto",
    "alias": "intérprete de lengua de signos, intérprete de signos, intérprete de LSE, ILSE, lengua de signos española, guía-intérprete, sordociegos, intérprete de sordos"
  },
  {
    "nombre": "Carteros y Correos",
    "slug": "carteros",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "cartero, cartera, repartidor de Correos, correos, personal de Correos, reparto postal, reparto de correspondencia, funcionario de Correos, factor rural, cartero rural, oficina de Correos"
  },
  {
    "nombre": "Antropólogos",
    "slug": "antropologos",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Mixto",
    "alias": "antropólogo, antropóloga, antropología, antropología social, antropología forense, antropólogo forense, etnógrafo, etnografía, arqueología y antropología"
  },
  {
    "nombre": "Científicos e Investigadores",
    "slug": "cientificos-investigadores",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Empleado",
    "alias": "científico, científica, investigador, investigadora, investigación científica, becario predoctoral, contratado predoctoral, posdoc, investigador posdoctoral, doctorando, personal investigador, CSIC, laboratorio de investigación"
  },
  {
    "nombre": "Pastores",
    "slug": "pastores",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Autónomo",
    "alias": "pastor, pastora, pastoreo, ganadero de ovino, ovejas, cabras, rebaño, cabrero, cabrera, pastor trashumante, ganadería extensiva"
  },
  {
    "nombre": "Trabajadores de Matadero",
    "slug": "trabajadores-matadero",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado",
    "alias": "trabajador de matadero, operario de matadero, deshuesador, carnicería industrial, sacrificio de animales, matadero, operario cárnico"
  },
  {
    "nombre": "Actores de Doblaje",
    "slug": "artistas",
    "propia": true,
    "badge": "Jubilación anticipada",
    "badgeColor": "emerald"
  },
  {
    "nombre": "Empleadas de Hogar",
    "slug": "empleadas-hogar",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado",
    "alias": "empleada de hogar, empleado de hogar, empleada doméstica, empleado doméstico, trabajadora del hogar, servicio doméstico, externa, limpiadora de casas, asistenta, sistema especial empleados de hogar, trabajo doméstico"
  },
  {
    "nombre": "Camareras de Piso",
    "slug": "camareras-piso",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado",
    "alias": "camareras de piso,camarera de piso,kellys,las kellys,limpieza de habitaciones,hotel"
  },
  {
    "nombre": "Limpiadoras",
    "slug": "limpiadoras",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado",
    "alias": "limpiadora, limpiador, personal de limpieza, limpieza de edificios, limpieza de oficinas, limpieza de locales, limpiadora de comunidades, limpiadora de escaleras, limpiadora de contratas, limpieza industrial"
  },
  {
    "nombre": "Comerciales",
    "slug": "comerciales",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto",
    "alias": "representante de comercio, agente comercial, vendedor, viajante, delegado comercial, gestor comercial, key account manager, ejecutivo de ventas"
  },
  {
    "nombre": "Dependientes de Comercio",
    "slug": "dependientes",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado",
    "alias": "dependiente, dependienta, dependiente de tienda, vendedor de tienda, personal de tienda, retail, personal de retail, auxiliar de comercio, comercio minorista, dependiente de supermercado, dependiente de ropa, tienda de ropa"
  },
  {
    "nombre": "Camareros",
    "slug": "camareros",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado",
    "alias": "camareros,camareras,camarero,camarera,hostelería,bar,restaurante,sala"
  },
  {
    "nombre": "Cocineros",
    "slug": "cocineros",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "alias": "cocinero, cocinera, jefe de cocina, chef, cocina de restaurante, cocinero de restaurante, cocina colectiva, segundo de cocina"
  },
  {
    "nombre": "Camioneros",
    "slug": "transportistas",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "camionero, camionera, camioneros, conductor de camión, conductor profesional, conductores profesionales, chófer, transportista, tráiler, camión, conductor de mercancías, CAP, tacógrafo, transporte por carretera"
  },
  {
    "nombre": "Conductores VTC",
    "slug": "conductores-vtc",
    "propia": false,
    "alias": "uber, cabify, bolt, vtc",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Repartidores",
    "slug": "repartidores",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto",
    "alias": "riders, mensajeros, Glovo, Uber Eats, ley rider, reparto a domicilio, repartidores de comida, última milla"
  },
  {
    "nombre": "Administrativos",
    "slug": "administrativos",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "administrativo, auxiliar administrativo, oficial administrativo, personal de oficina, administrativa, auxiliar de oficina, funcionario administrativo, administrativo del Estado"
  },
  {
    "nombre": "Secretarias y Recepcionistas",
    "slug": "secretarias",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "secretaria, secretaria de dirección, asistente de dirección, executive assistant, asistente ejecutiva, asistente virtual, recepcionista, office manager, secretariado"
  },
  {
    "nombre": "Mecánicos",
    "slug": "mecanicos",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto",
    "alias": "mecánico, mecánica, mecánico del automóvil, mecánico de automoción, taller de coches"
  },
  {
    "nombre": "Electricistas",
    "slug": "electricistas",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "electricista, instalador eléctrico, instalador autorizado, boletín eléctrico, REBT, baja tensión, electricista de obra"
  },
  {
    "nombre": "Fontaneros",
    "slug": "fontaneros",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "fontanero, fontanería, calefactor, calefacción, instalador de agua, instalador térmico, RITE, saneamiento, caldera"
  },
  {
    "nombre": "Albañiles",
    "slug": "albaniles",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado",
    "alias": "albañil, albañilería, oficial de albañil, construcción, obrero de la construcción, obrero de obra, albañil autónomo, reformas"
  },
  {
    "nombre": "Pintores",
    "slug": "pintores",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "pintor de obra, pintor decorador, pintor de brocha gorda, empapelador, estuquista, pintor de fachadas, pintor industrial"
  },
  {
    "nombre": "Peluqueros",
    "slug": "peluqueros",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto",
    "alias": "peluquero, barbero, estilista, colorista, peluquería, barbería, alquiler de sillón"
  },
  {
    "nombre": "Programadores",
    "slug": "programadores",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto",
    "alias": "programador, programadora, desarrollador, desarrolladora, desarrollador de software, developer, desarrollo web, programación, informático, desarrollo de software, freelance informático, full stack, backend, frontend"
  },
  {
    "nombre": "Diseñadores Gráficos",
    "slug": "disenadores",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "diseñador, diseñadora, diseñador web, diseñadora web, diseño gráfico, ux, ui, ux/ui, diseñador ux, diseñador digital, director de arte, directora de arte, freelance creativo"
  },
  {
    "nombre": "Operarios de Fábrica",
    "slug": "operarios-fabrica",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "operario de fábrica, peón de industria, peón industrial, cadena de montaje, línea de producción, operario de línea, ETT, industria manufacturera, envasado, embotellado"
  },
  {
    "nombre": "Vigilantes de Seguridad",
    "slug": "vigilantes-seguridad",
    "propia": false,
    "categoria": "Seguridad y Vigilancia",
    "color": "stone",
    "cotizacion": "Empleado",
    "alias": "vigilante de seguridad, vigilante, vigilante privado, seguridad privada, guarda de seguridad, vigilante de obra, vigilante de centro comercial, vigilante nocturno, empresa de seguridad, TIP"
  },
  {
    "nombre": "Cajeros",
    "slug": "cajeros",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado",
    "alias": "cajeras, cajeros de supermercado, cajeros de comercio, caja, supermercado, hipermercado, autopago, cobro"
  },
  {
    "nombre": "Empleados de Banca",
    "slug": "banca",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "bancario, bancaria, banco, empleado de banco, caja de ahorros, cajas, entidad financiera, director de sucursal, gestor comercial, cooperativa de crédito, ERE banca"
  },
  {
    "nombre": "Médicos",
    "slug": "medicos",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "médico, facultativo, médico de familia, médico especialista, FEA, médico de urgencias, médico de atención primaria, médico estatutario, MIR, médico residente, doctor"
  },
  {
    "nombre": "Médicos Forenses",
    "slug": "medicos-forenses",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "médico forense, médica forense, forense, forenses, medicina legal, medicina forense, Cuerpo de Médicos Forenses, Instituto de Medicina Legal, IMLCF, autopsias, necropsias, levantamiento de cadáveres, peritaje médico, perito médico judicial, funcionario de Justicia, MUGEJU, Clases Pasivas médico, anatomía forense"
  },
  {
    "nombre": "Enfermeros",
    "slug": "enfermeros",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "enfermero, enfermera, enfermeros, enfermeras, enfermería, personal de enfermería, DUE, ATS, graduado en enfermería, diplomado en enfermería, EIR, enfermera especialista"
  },
  {
    "nombre": "Profesores de Academia",
    "slug": "profesores",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto",
    "alias": "profesor de academia, profesora de academia, profesor particular, profesor de clases particulares, academia, enseñanza no reglada, formador, docente de academia, clases particulares, titular de academia"
  },
  {
    "nombre": "Abogados",
    "slug": "abogados",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto",
    "alias": "abogado, letrado, jurista, asesor jurídico, abogado de oficio, turno de oficio, abogado in-house, mutualista"
  },
  {
    "nombre": "Pediatras",
    "slug": "pediatras",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "pediatra, neonatólogo, médico de niños, atención primaria, pediatría, guardias"
  },
  {
    "nombre": "Cirujanos",
    "slug": "cirujanos",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "cirujano, cirugía, traumatólogo, neurocirujano, médico especialista quirúrgico, quirófano, MIR"
  },
  {
    "nombre": "Dentistas",
    "slug": "dentistas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "dentista, odontólogo, estomatólogo, clínica dental, odontología"
  },
  {
    "nombre": "Matronas",
    "slug": "matronas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "matrona, matrón, comadrona, enfermera obstétrico-ginecológica, enfermería obstétrica, EIR matrona, partos, paritorio, atención al parto, matrona de atención primaria"
  },
  {
    "nombre": "Fisioterapeutas",
    "slug": "fisioterapeutas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "fisioterapeuta, fisio, fisioterapia, rehabilitación, fisioterapeuta deportivo, fisioterapeuta a domicilio, physiotherapist"
  },
  {
    "nombre": "Psicólogos",
    "slug": "psicologos",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "psicólogo, psicóloga, psicólogo clínico, psicólogo sanitario, PIR, psicólogo general sanitario, PGS, terapeuta, gabinete de psicología, consulta de psicología, salud mental"
  },
  {
    "nombre": "Farmacéuticos",
    "slug": "farmaceuticos",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "farmacéutico, farmacéutica, farmacia, oficina de farmacia, boticario, titular de farmacia, farmacéutico adjunto, farmacéutico sustituto, farmacéutico hospitalario, farmacia hospitalaria, regente de farmacia"
  },
  {
    "nombre": "Veterinarios",
    "slug": "veterinarios",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "veterinario, veterinaria, clínica veterinaria, veterinario de animales de compañía, veterinario clínico, veterinario de ganadería, veterinario oficial, veterinario de mataderos, hospital veterinario"
  },
  {
    "nombre": "Meteorólogos",
    "slug": "meteorologos",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Empleado",
    "alias": "meteorólogo, meteoróloga, meteorología, AEMET, predictor, previsión del tiempo, hombre del tiempo, presentador del tiempo, observador meteorológico, climatólogo"
  },
  {
    "nombre": "Enólogos",
    "slug": "enologos",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado",
    "alias": "enólogo, enóloga, enología, bodega, director técnico de bodega, maestro bodeguero, técnico de bodega, elaboración de vino, bodeguero"
  },
  {
    "nombre": "Autónomos (RETA general)",
    "slug": "jubilacion-autonomos",
    "propia": true
  },
  {
    "nombre": "Actores de Doblaje (historia y normativa)",
    "slug": "actores-doblaje",
    "propia": false,
    "alias": "actor de doblaje, actriz de doblaje, actores de doblaje, doblaje, doblador, doblaje de voz, locutor, locutores, artista de voz, sonorización, estudio de doblaje, takes, convocatoria general, AISGE, ADOMA, estatuto del artista",
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Podólogos",
    "slug": "podologos",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "podólogo, podóloga, podología, quiropodista, quiropodia, clínica podológica, pies, cirugía podológica, ortopodología, podólogo autónomo"
  },
  {
    "nombre": "Logopedas",
    "slug": "logopedas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "logopeda, logopedia, terapeuta del lenguaje, foniatra, voz, habla, disfagia, atención temprana"
  },
  {
    "nombre": "Economistas",
    "slug": "economistas",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "alias": "economista, economista colegiado, auditor, auditora, consultor financiero, analista económico, asesor económico, licenciado en económicas, analista financiero"
  },
  {
    "nombre": "Contables",
    "slug": "contables",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto",
    "alias": "contable, contabilidad, técnico de contabilidad, auxiliar contable, jefe de contabilidad, controller, asesor contable, llevar la contabilidad, experto contable"
  },
  {
    "nombre": "Auditores",
    "slug": "auditores",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "auditor de cuentas, auditoría, ROAC, censor jurado, auditor financiero, Big Four"
  },
  {
    "nombre": "Consultores",
    "slug": "consultores",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Autónomo",
    "alias": "consultor, consultora, consultor de empresa, consultor de negocio, consultor de estrategia, consultor TI, consultor freelance, asesor de empresas"
  },
  {
    "nombre": "Personal de Recursos Humanos",
    "slug": "recursos-humanos",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "alias": "recursos humanos, RRHH, RR.HH., responsable de recursos humanos, técnico de recursos humanos, técnico de selección, selección de personal, gestión de personas, HR, nóminas y personal, director de recursos humanos, headhunter"
  },
  {
    "nombre": "Ingenieros Industriales",
    "slug": "ingenieros-industriales",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "ingeniero industrial, ingenieros industriales, ingeniería industrial, proyectista industrial, director de planta, project manager, consultor de ingeniería, visado, colegio de ingenieros industriales, mutualidad de la ingeniería, MUPITI, pasarela al RETA"
  },
  {
    "nombre": "Ingenieros de Caminos",
    "slug": "ingenieros-caminos",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "ingeniero de caminos, ingeniera de caminos, ingeniero de caminos canales y puertos, ICCP, obra civil, ingeniería civil, ingeniero civil, ingeniero de obras públicas, ingeniero de carreteras"
  },
  {
    "nombre": "Ingenieros Informáticos",
    "slug": "ingenieros-informaticos",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto",
    "alias": "ingeniero informático, ingeniera informática, ingeniería informática, informática, ingeniero de software, arquitecto de software, consultor informático"
  },
  {
    "nombre": "Ingenieros de Telecomunicaciones",
    "slug": "ingenieros-telecomunicaciones",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto",
    "alias": "ingeniero de telecomunicaciones, ingeniera de telecomunicaciones, ingeniería de telecomunicación, telecomunicaciones, ingeniero de redes, ingeniero de radiofrecuencia, ingeniero de telecos, operadora de telecomunicaciones, ingeniero de comunicaciones"
  },
  {
    "nombre": "Arquitectos",
    "slug": "arquitectos",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "arquitecto, arquitecta, arquitectura, estudio de arquitectura, arquitecto colegiado, arquitecto autónomo, director de obra, proyectista, hNA, mutualidad de arquitectos, arquitecto superior"
  },
  {
    "nombre": "Aparejadores",
    "slug": "aparejadores",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "aparejador, aparejadora, arquitecto técnico, arquitecta técnica, ingeniero de edificación, ingeniería de edificación, director de ejecución de obra, PREMAAT, coordinador de seguridad y salud, tasador"
  },
  {
    "nombre": "Administradores de Sistemas",
    "slug": "administradores-sistemas",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado",
    "alias": "administrador de sistemas, sysadmin, administrador de servidores, administrador de redes, DevOps, cloud, CPD, infraestructura IT"
  },
  {
    "nombre": "Analistas de Sistemas",
    "slug": "analistas-sistemas",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado",
    "alias": "analista de sistemas, analista funcional, analista programador, jefe de proyecto TI, ingeniero de sistemas, técnico de sistemas, arquitecto TI, analista informático"
  },
  {
    "nombre": "Especialistas en Ciberseguridad",
    "slug": "especialistas-ciberseguridad",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto",
    "alias": "ciberseguridad, pentester, hacker ético, analista SOC, CISO, informática forense, seguridad informática, ciberseguridad cloud"
  },
  {
    "nombre": "Agricultores",
    "slug": "agricultores",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Autónomo",
    "alias": "agricultor, agricultora, agricultura, titular de explotación agraria, explotación agrícola, sistema especial agrario, SETA, labrador, labradora, cultivos"
  },
  {
    "nombre": "Ganaderos",
    "slug": "ganaderos",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Autónomo",
    "alias": "ganadero, ganadera, ganadería, explotación ganadera, titular de explotación ganadera, vacuno, porcino, ovino, granja, ganadero autónomo, SETA, peón ganadero, ordeño"
  },
  {
    "nombre": "Tractoristas",
    "slug": "tractoristas",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Mixto",
    "alias": "tractorista, tractoristas, tractor, maquinista agrícola, operador de maquinaria agrícola, cosechadora, sulfatar, fitosanitarios, jornadas reales, SETA, campo, vuelco de tractor"
  },
  {
    "nombre": "Periodistas",
    "slug": "periodistas",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "periodista, redactor, redactora, reportero, reportera, corresponsal, colaborador a la pieza, freelance periodístico, medios de comunicación, prensa, comunicador, columnista, editor"
  },
  {
    "nombre": "Fotógrafos",
    "slug": "fotografos",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "fotógrafo, fotógrafa, fotografía, reportero gráfico, fotoperiodista, fotógrafo de bodas, fotógrafo freelance, fotógrafo de estudio, fotógrafo autónomo, fotógrafo profesional"
  },
  {
    "nombre": "Traductores e Intérpretes",
    "slug": "traductores",
    "propia": false,
    "categoria": "Traducción e Interpretación",
    "color": "blue",
    "cotizacion": "Mixto",
    "alias": "intérprete, interprete de conferencias, localizador, subtitulador, traductor audiovisual, traductor literario, traductor freelance, intérprete simultáneo"
  },
  {
    "nombre": "Bibliotecarios",
    "slug": "bibliotecarios",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Empleado",
    "alias": "bibliotecario, bibliotecaria, biblioteca, archivero, archivera, archivo, documentalista, técnico de biblioteca, auxiliar de biblioteca, biblioteca pública, facultativo de archivos y bibliotecas"
  },
  {
    "nombre": "Agentes de Seguros",
    "slug": "agentes-seguros",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto",
    "alias": "agente de seguros, agente de seguros exclusivo, agente vinculado, corredor de seguros, correduría de seguros, mediador de seguros, comercial de seguros, asesor de seguros, seguros, agencia de seguros, mediación de seguros"
  },
  {
    "nombre": "Auxiliares de Enfermería de Atención Primaria",
    "slug": "auxiliares-enfermeria-primaria",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "auxiliar de enfermería, TCAE, TCAE atención primaria, auxiliar de enfermería de centro de salud, técnico en cuidados auxiliares de enfermería, auxiliar de atención primaria, auxiliar de consultorio"
  },
  {
    "nombre": "Peones Agrícolas",
    "slug": "peones-agricolas",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Empleado",
    "alias": "peón agrícola, jornalero, temporero, recolector, trabajador del campo, fijo discontinuo agrario, peón de campo"
  },
  {
    "nombre": "Peones de Construcción",
    "slug": "peones-construccion",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado",
    "alias": "peón, peón de obra, peón de albañil, peón ordinario, peón especialista, peón de construcción, ayudante de obra, peonaje"
  },
  {
    "nombre": "Carpinteros",
    "slug": "carpinteros",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "carpintero, carpintera, carpintería, carpintero de madera, ebanista, ebanistería, carpintero de obra, carpintero de taller, carpintero autónomo, muebles a medida"
  },
  {
    "nombre": "Taxistas",
    "slug": "taxistas",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Autónomo",
    "alias": "taxista, taxistas, taxi, conductor de taxi, licencia de taxi, titular de licencia, eurotaxi, auto-taxi, cartilla municipal, flotero, VTC, taxi autónomo"
  },
  {
    "nombre": "Trabajadores Sociales",
    "slug": "trabajadores-sociales",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado",
    "alias": "trabajador social, trabajadora social, asistente social, servicios sociales, mediador familiar, perito social, intervención social, ONG, tercer sector, burnout"
  },
  {
    "nombre": "Técnicos de Laboratorio Sanitario",
    "slug": "tecnicos-laboratorio-sanitario",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "técnico de laboratorio, TEL, laboratorio clínico, analistas, técnico superior laboratorio clínico y biomédico, laboratorio hospitalario"
  },
  {
    "nombre": "Flebotomistas y Técnicos de Extracción de Sangre",
    "slug": "flebotomistas",
    "propia": false,
    "alias": "flebotomista, extractor de sangre, técnico de extracción, venopunción, pinchador, sacador de sangre",
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Técnicos de Radiología",
    "slug": "tecnicos-radiologia",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "técnico de radiología, TSID, radiodiagnóstico, imagen para el diagnóstico, medicina nuclear, rayos X, TAC, resonancia, técnico radiólogo"
  },
  {
    "nombre": "Técnicos de Emergencias Sanitarias",
    "slug": "tecnicos-emergencias-sanitarias",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "TES, técnicos de emergencias, ambulancias, transporte sanitario, SAMUR, SUMMA, 061, 112, soporte vital básico"
  },
  {
    "nombre": "Celadores",
    "slug": "celadores",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "camillero, celador de hospital, celador sanitario, celador de urgencias, celador de quirófano, celador conductor, personal no sanitario hospital"
  },
  {
    "nombre": "Educadores Infantiles",
    "slug": "educadores-infantiles",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Empleado",
    "alias": "educador infantil, educadora infantil, escuela infantil, guardería, TSEI, técnico superior en educación infantil, 0-3 años, maestra de infantil, primer ciclo"
  },
  {
    "nombre": "Ingenieros Agrónomos",
    "slug": "ingenieros-agronomos",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Mixto",
    "alias": "ingeniero agrónomo, ingeniero técnico agrícola, perito agrícola, consultor agroambiental, ingeniero agrícola, técnico agrario"
  },
  {
    "nombre": "Ingenieros de Montes",
    "slug": "ingenieros-montes",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Mixto",
    "alias": "ingeniero forestal, ingeniero técnico forestal, ingeniero de montes, técnico forestal, gestión forestal, ordenación de montes, Tragsa"
  },
  {
    "nombre": "Leñadores y Motosierristas",
    "slug": "lenadores-motosierristas",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Mixto",
    "alias": "leñador, leñadora, motosierrista, talador, tala de árboles, apeo, corta de árboles, aprovechamiento maderero, aprovechamientos forestales, rematante forestal, trabajador forestal a destajo, madera, motosierra, desramado"
  },
  {
    "nombre": "Delineantes",
    "slug": "delineantes",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "delineante proyectista, técnico en delineación, dibujante técnico, modelador BIM, proyectista CAD, técnico superior en proyectos de edificación, delineante de obra civil"
  },
  {
    "nombre": "Técnicos de Mantenimiento",
    "slug": "tecnicos-mantenimiento",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "técnicos de mantenimiento,técnico de mantenimiento,mantenimiento industrial,mantenimiento de edificios,mantenedor,electromecánico,retén,guardias"
  },
  {
    "nombre": "Gestores Administrativos",
    "slug": "gestores-administrativos",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "alias": "gestor administrativo, gestora administrativa, gestor, gestor colegiado, trámites administrativos, colegio de gestores, gestoría administrativa, despacho de gestoría"
  },
  {
    "nombre": "Graduados Sociales",
    "slug": "graduados-sociales",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto",
    "alias": "graduado social, asesor laboral, asesoría laboral, gestor de nóminas, graduada social, relaciones laborales, despacho laboral, laboralista"
  },
  {
    "nombre": "Asesores Fiscales",
    "slug": "asesores-fiscales",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto",
    "alias": "asesor fiscal, consultor tributario, asesoría, gestoría, impuestos, renta, Veri*Factu"
  },
  {
    "nombre": "Analistas Financieros",
    "slug": "analistas-financieros",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "analistas de inversión, equity research, analistas de riesgos, banca de inversión, gestores de fondos, CFA"
  },
  {
    "nombre": "Agentes Inmobiliarios",
    "slug": "agentes-inmobiliarios",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto",
    "alias": "agente inmobiliario, asesor inmobiliario, API, agente de la propiedad, captador, comercial inmobiliario, inmobiliaria, agencia inmobiliaria, franquicia inmobiliaria, intermediario inmobiliario"
  },
  {
    "nombre": "Guías Turísticos",
    "slug": "guias-turisticos",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto",
    "alias": "guías turísticos,guía turístico,guía oficial,free tour,visitas guiadas,guía de turismo"
  },
  {
    "nombre": "Agentes de Viajes",
    "slug": "agentes-de-viajes",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado",
    "alias": "agente de viajes, agencia de viajes, touroperador, turismo, billetaje, asesor de viajes"
  },
  {
    "nombre": "Reponedores",
    "slug": "reponedores",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado",
    "alias": "reponedor, reponedor de supermercado, mozo de reposición, reposición nocturna, lineal, hipermercado"
  },
  {
    "nombre": "Ayudantes de Cocina",
    "slug": "ayudantes-cocina",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado",
    "alias": "ayudante de cocina, pinche, pinche de cocina, auxiliar de cocina, marmitón, fregador, plonge, office, cocina de colectividades, comedor escolar, ayudante de cocinero, hostelería cocina"
  },
  {
    "nombre": "Carniceros",
    "slug": "carniceros",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Mixto",
    "alias": "carnicero, carnicera, charcutero, charcutera, despiezador, despiece, matarife, sala de despiece, industria cárnica, carnicería, mercado de abastos"
  },
  {
    "nombre": "Pescaderos",
    "slug": "pescaderos",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "alias": "pescadero, pescadera, pescadería, pescado fresco, vendedor de pescado, mayorista de pescado, tienda de pescado"
  },
  {
    "nombre": "Panaderos",
    "slug": "panaderos",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "alias": "panadero, panadera, panadería, obrador, horno de pan, maestro panadero, panadero artesano, panadero autónomo, panadería artesana, oficial de panadería"
  },
  {
    "nombre": "Soldadores",
    "slug": "soldadores",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "soldador, soldadura, soldadores homologados, TIG, MIG, MAG, electrodo, argonero, tubero, soldador submarino, oxicorte, soldadura hiperbárica, buceador industrial"
  },
  {
    "nombre": "Instaladores de Climatización",
    "slug": "instaladores-climatizacion",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "frigoristas, aire acondicionado, calefacción, aerotermia, bomba de calor, instaladores térmicos, RITE, gases fluorados, climatización"
  },
  {
    "nombre": "Cerrajeros",
    "slug": "cerrajeros",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "cerrajero, cerrajera, cerrajería, cerrajero 24 horas, cerrajero urgente, apertura de puertas, cerrajero de metal, cerrajero autónomo, cerraduras, taller de cerrajería, cerrajero de urgencias"
  },
  {
    "nombre": "Transportistas Autónomos",
    "slug": "transportistas-autonomos",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Autónomo",
    "alias": "transportista autónomo, transportista autónoma, transportistas autónomos, camionero autónomo, autónomo del transporte, TRADE, tarjeta de transporte, MDPE, MDLE, RETA transporte, transporte por carretera, camión propio"
  },
  {
    "nombre": "Mozos de Almacén",
    "slug": "mozos-almacen",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "mozo de almacén, operario logístico, carretillero, picking, almacenero, logística"
  },
  {
    "nombre": "Peones Forestales",
    "slug": "peones-forestales",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Empleado",
    "alias": "peón forestal, peona forestal, motosierrista, brigadista, cuadrilla forestal, trabajador forestal, selvicultura, tratamientos selvícolas, monte, limpieza de montes, forestal"
  },
  {
    "nombre": "Jardineros",
    "slug": "jardineros",
    "propia": false,
    "categoria": "Jardinería y Flores",
    "color": "lime",
    "cotizacion": "Mixto",
    "alias": "jardinero, jardinera, jardinería, mantenimiento de jardines, jardinero de comunidades, jardinero autónomo, poda, césped, empresa de jardinería, vivero"
  },
  {
    "nombre": "Floristas",
    "slug": "floristas",
    "propia": false,
    "categoria": "Jardinería y Flores",
    "color": "lime",
    "cotizacion": "Mixto",
    "alias": "florista, floristería, tienda de flores, diseñador floral, diseñadora floral, arreglos florales, arte floral, ramos de flores, flores, tienda de plantas, decoración floral"
  },
  {
    "nombre": "Conserjes",
    "slug": "conserjes",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado",
    "alias": "conserje, conserja, portero, portera, portero de finca, portero de comunidad, portería, conserje de colegio, conserje de edificio, vivienda de portería, portero de vivienda, finca urbana"
  },
  {
    "nombre": "Barrenderos",
    "slug": "barrenderos",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado",
    "alias": "barrendero, barrendera, limpieza viaria, limpieza viaria y RSU, operario de limpieza viaria, peón de limpieza, limpieza urbana, baldeo, barredora, servicio de limpieza del ayuntamiento, saneamiento público"
  },
  {
    "nombre": "Poceros",
    "slug": "poceros",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Mixto",
    "alias": "pocero, pocera, limpiador de alcantarillado, alcantarillero, operario de saneamiento, desatascos, desatascador, desatasco de tuberías, fosas sépticas, fosa séptica, camión cuba, cisterna de limpieza, pozos de registro, redes de saneamiento, espacios confinados, limpieza de pozos, colectores"
  },
  {
    "nombre": "Limpiadores de Fosas Sépticas",
    "slug": "limpiadores-fosas-septicas",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Mixto",
    "alias": "limpiador de fosas sépticas, limpiadora de fosas sépticas, fosa séptica, fosas sépticas, pozos negros, pozo negro, vaciado de fosas, vaciador de fosas, camión cuba, camión cisterna de saneamiento, depósitos de aguas residuales, separador de grasas, limpieza de fosas, desatascos, saneamiento, aguas fecales"
  },
  {
    "nombre": "Operarios de Plantas de Reciclaje",
    "slug": "operarios-plantas-reciclaje",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado",
    "alias": "operario de planta de reciclaje, operaria de planta de reciclaje, operario de reciclaje, operarios de reciclaje, reciclador, recicladora, recicladores, operario de triaje, triaje de residuos, cinta de triaje, clasificador de residuos, clasificación de materiales, planta de triaje, planta de valorización, valorización de residuos, planta de tratamiento de residuos, punto de transferencia, ecoparque, selección de envases, reciclaje"
  },
  {
    "nombre": "Recogedores de Residuos",
    "slug": "recogedores-residuos",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado",
    "alias": "basurero, basurera, recogedor de basura, peón de recogida, operario de limpieza viaria, recogida de residuos, RSU, camión de basura, estribo, contrata de basuras"
  },
  {
    "nombre": "Biólogos",
    "slug": "biologos",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Mixto",
    "alias": "biólogo, bióloga, biólogas, biotecnólogo, biotecnólogos, biotecnología, genetista, genetistas, bioinformático, investigador biológico, biólogo sanitario"
  },
  {
    "nombre": "Químicos",
    "slug": "quimicos",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Empleado",
    "alias": "químico, química, ingeniero químico, laboratorio químico, farmoquímica, técnico químico"
  },
  {
    "nombre": "Técnicos de Prevención de Riesgos Laborales",
    "slug": "tecnicos-prevencion-riesgos",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "técnico de prevención, prevencionista, técnico PRL, PRL, coordinador de seguridad, servicio de prevención ajeno, SPA, riesgos laborales"
  },
  {
    "nombre": "Técnicos Medioambientales",
    "slug": "tecnicos-medioambientales",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Mixto",
    "alias": "técnico de medio ambiente, ambientólogo, consultor ambiental, ciencias ambientales, evaluación de impacto ambiental, auditor ISO 14001, técnico de residuos"
  },
  {
    "nombre": "Monitores Deportivos",
    "slug": "monitores-deportivos",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "monitor deportivo, instructor de fitness, monitor de gimnasio, clases dirigidas, spinning, pilates, zumba, crossfit, deporte base, técnico deportivo, TAFAD, TSEAS"
  },
  {
    "nombre": "Zapateros",
    "slug": "zapateros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "zapatero, zapatera, zapatero remendón, reparador de calzado, calzado, fábrica de calzado, arreglo de calzado, zapatería, aparadora, aparador, trabajador del calzado, cobbler"
  },
  {
    "nombre": "Cristaleros",
    "slug": "cristaleros",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "instaladores de vidrio, vidrio, cristalería, acristalamiento, ventanas, doble acristalamiento, cristaleros de obra"
  },
  {
    "nombre": "Escayolistas",
    "slug": "escayolistas",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "escayola, molduras, falsos techos, escayolista, montador de escayola, rosetones, placas de escayola"
  },
  {
    "nombre": "Alicatadores",
    "slug": "alicatadores",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "alicatador, alicatadora, alicatado, azulejador, enchapador, colocador de azulejos, colocador de cerámica, alicatador autónomo, reformas de baños, reformas de cocinas"
  },
  {
    "nombre": "Encofradores",
    "slug": "encofradores",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado",
    "alias": "encofrador, encofradores, ferrallista, ferralla, estructurista, encofrado, oficial de encofrados, encofrador ferrallista, hormigón, desencofrar"
  },
  {
    "nombre": "Techadores",
    "slug": "techadores",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "tejadores, impermeabilizadores, cubiertas, tejados, uralita, amianto, montadores de cubiertas, pizarreros"
  },
  {
    "nombre": "Andamistas",
    "slug": "andamistas",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado",
    "alias": "montadores de andamios, andamios, estructuras tubulares, cimbras, trabajos en altura, montadores de andamiaje"
  },
  {
    "nombre": "Pintores de Coches",
    "slug": "pintores-coches",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "pintor de coches, pintor de carrocería, chapa y pintura, cabina de pintura, isocianatos, pintor de automóviles"
  },
  {
    "nombre": "Chapistas del Automóvil",
    "slug": "chapistas-automocion",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "chapista, chapista de coches, carrocero, chapa y pintura, bancada, reparador de carrocería, técnico en carrocería, taller de chapa"
  },
  {
    "nombre": "Tapiceros",
    "slug": "tapiceros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "tapicero, tapicería, restaurador de muebles, retapizado, tapizado, tapicería náutica, tapicería de automoción, mueble tapizado, sofás"
  },
  {
    "nombre": "Auxiliares de Clínica",
    "slug": "auxiliares-clinica",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "auxiliar de clínica, auxiliar de enfermería de hospital, auxiliar de planta, auxiliar de hospital, auxiliar geriátrico, auxiliar pediátrico, auxiliar de esterilización, TCAE hospital"
  },
  {
    "nombre": "Técnicos de Farmacia",
    "slug": "tecnicos-farmacia",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "técnico en farmacia, técnico en farmacia y parafarmacia, auxiliar de farmacia, parafarmacia, farmacia hospitalaria, técnico de almacén de medicamentos"
  },
  {
    "nombre": "Dietistas-Nutricionistas",
    "slug": "dietistas-nutricionistas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "dietista, nutricionista, dietista-nutricionista, nutrición, dietética, técnico en dietética"
  },
  {
    "nombre": "Ópticos-Optometristas",
    "slug": "opticos-optometristas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "óptico, optometrista, óptica, optometría, gafas, lentes de contacto, graduación de la vista, optica"
  },
  {
    "nombre": "Terapeutas Ocupacionales",
    "slug": "terapeutas-ocupacionales",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "terapeuta ocupacional, terapia ocupacional, TO, rehabilitación, atención temprana"
  },
  {
    "nombre": "Técnicos de Anatomía Patológica",
    "slug": "tecnicos-anatomia-patologica",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "anatomía patológica, citodiagnóstico, citotécnico, histología, biopsias, formol, formaldehído, técnico de patología"
  },
  {
    "nombre": "Técnicos en Cuidados Auxiliares de Enfermería",
    "slug": "tcae",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "TCAE, técnico en cuidados auxiliares de enfermería, técnica en cuidados auxiliares de enfermería, auxiliar sanitario, enfermería auxiliar, técnico auxiliar de enfermería"
  },
  {
    "nombre": "Esteticistas",
    "slug": "esteticistas",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto",
    "alias": "esteticista, técnico de estética, estética, depilación, uñas, micropigmentación, centro de estética, spa"
  },
  {
    "nombre": "Manicuristas",
    "slug": "manicuristas",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto",
    "alias": "manicura, pedicura, estilista de uñas, técnica de uñas, uñas de gel, nail artist, uñas acrílicas, nail bar"
  },
  {
    "nombre": "Masajistas",
    "slug": "masajistas",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto",
    "alias": "masajista, quiromasajista, masoterapeuta, masaje deportivo, masaje relajante, spa"
  },
  {
    "nombre": "Tatuadores",
    "slug": "tatuadores",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Autónomo",
    "alias": "tatuador, piercer, perforador corporal, micropigmentador, anillador, artista corporal, estudio de tatuajes"
  },
  {
    "nombre": "Sastres",
    "slug": "sastres",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "sastre, sastrería, sastre a medida, alta costura, arreglos de ropa, maestro sastre, vestuario"
  },
  {
    "nombre": "Modistas",
    "slug": "modistas",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "modista, modistería, costurera, costura, arreglos de ropa, alta costura, vestuario, atelier"
  },
  {
    "nombre": "Torneros",
    "slug": "torneros",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto",
    "alias": "tornero, torno, torno paralelo, torno CNC, torneado, mecanizado, arranque de viruta, taladrina, plato de garras, tornero fresador"
  },
  {
    "nombre": "Fresadores",
    "slug": "fresadores",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "fresador, fresadora, tornero fresador, torneros fresadores, mecanizado, mecanizado CNC, operador de fresadora, centro de mecanizado, arranque de viruta, programador CNC"
  },
  {
    "nombre": "Montadores Industriales",
    "slug": "montadores-industriales",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto",
    "alias": "montador de estructuras, montador mecánico, tubero industrial, ajustador, instalador de maquinaria, montador de plantas"
  },
  {
    "nombre": "Reparadores de Electrodomésticos",
    "slug": "reparadores-electrodomesticos",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto",
    "alias": "reparador de electrodomésticos, técnico SAT, servicio técnico, servicio de asistencia técnica, gama blanca, lavadoras, frigoríficos, técnico de electrodomésticos, derecho a reparar"
  },
  {
    "nombre": "Técnicos Electrónicos",
    "slug": "tecnicos-electronicos",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto",
    "alias": "técnico electrónico, electrónica, microsoldadura, SMD, reballing, reparación de placas, servicio técnico, electromedicina, mantenimiento electrónico, colofonia"
  },
  {
    "nombre": "Ceramistas",
    "slug": "ceramistas",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "ceramista, alfarero, alfarera, alfarería, cerámica, cerámica artesanal, fábrica de azulejos, taller de cerámica, torno de alfarero, azulejero, artesano de la cerámica"
  },
  {
    "nombre": "Joyeros",
    "slug": "joyeros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "alias": "joyera, taller de joyería, joyería artesanal, diseñador de joyas"
  },
  {
    "nombre": "Orfebres",
    "slug": "orfebres",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "orfebre, orfebrería, platero, platería, arte sacro, cincelador, repujado, joyero, joyería, engastador, metales preciosos"
  },
  {
    "nombre": "Tallistas",
    "slug": "tallistas",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "alias": "tallista, talla de madera, tallista de madera, tallista de piedra, imaginero, imaginería, escultor, escultora, escultor artesano, talla artesanal, ebanista tallista"
  },
  {
    "nombre": "Restauradores de Arte",
    "slug": "restauradores-arte",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Mixto",
    "alias": "restaurador de arte, restauradora de arte, restauración de obras de arte, conservador-restaurador, restaurador de bienes culturales, restauración de patrimonio, restaurador de pintura, restaurador de escultura, conservación del patrimonio, restauración artística"
  },
  {
    "nombre": "Afiladores",
    "slug": "afiladores",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto",
    "alias": "afilador, vaciador, vaciadores, afilador de cuchillos, afilado industrial, rectificador de herramientas"
  },
  {
    "nombre": "Sumilleres",
    "slug": "sumilleres",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado",
    "alias": "sumiller, sumillera, sommelier, sumillería, enólogo de sala, jefe de sala de vinos, bodega de restaurante, vinos, cavista, experto en vinos, catador de vinos"
  },
  {
    "nombre": "Maîtres",
    "slug": "maitres",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado",
    "alias": "maîtres,maitre,jefe de sala,jefe de comedor,restaurante,sala"
  },
  {
    "nombre": "Recepcionistas de Hotel",
    "slug": "recepcionistas-hotel",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado",
    "alias": "recepción hotel, night auditor, auditor nocturno, front desk, check-in, jefe de recepción, conserjería, reservas"
  },
  {
    "nombre": "Animadores Turísticos",
    "slug": "animadores-turisticos",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado",
    "alias": "animadores turísticos,animador turístico,animación turística,animadora,miniclub,hotel,resort,crucero"
  },
  {
    "nombre": "Encargados de Tienda",
    "slug": "encargados-tienda",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado",
    "alias": "encargado de tienda, store manager, director de tienda, responsable de tienda, jefe de sección, retail"
  },
  {
    "nombre": "Dependientes de Farmacia",
    "slug": "dependientes-farmacia",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "auxiliar de farmacia, mancebo de farmacia, auxiliar de oficina de farmacia, dependiente de parafarmacia, dependienta de farmacia, vendedor de parafarmacia"
  },
  {
    "nombre": "Cuidadores de Mayores",
    "slug": "cuidadores-mayores",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado",
    "alias": "cuidador de mayores, cuidadora de mayores, cuidador de ancianos, cuidadora de ancianos, cuidadora interna, interna, cuidadora externa, cuidador de personas dependientes, cuidador no profesional, cuidadora familiar, convenio especial cuidadores, asistente personal"
  },
  {
    "nombre": "Auxiliares a Domicilio",
    "slug": "auxiliares-domicilio",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado",
    "alias": "auxiliar de ayuda a domicilio, SAD, servicio de ayuda a domicilio, ayuda a domicilio, asistente personal, cuidadora domiciliaria, auxiliar domiciliaria, dependencia"
  },
  {
    "nombre": "Niñeras",
    "slug": "nineras",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado",
    "alias": "niñera, niñero, cuidadora infantil, cuidador infantil, cuidadora de niños, canguro, au pair, babysitter, cuidado de niños, niñera interna, niñera externa, cuidador de niños"
  },
  {
    "nombre": "Escoltas",
    "slug": "escoltas",
    "propia": false,
    "categoria": "Seguridad y Vigilancia",
    "color": "stone",
    "cotizacion": "Empleado",
    "alias": "escolta, escolta privado, escolta privada, guardaespaldas, protección de personas, seguridad personal, escolta de seguridad privada, vigilante escolta, protección personal"
  },
  {
    "nombre": "Detectives Privados",
    "slug": "detectives-privados",
    "propia": false,
    "categoria": "Seguridad y Vigilancia",
    "color": "stone",
    "cotizacion": "Mixto",
    "alias": "detective privado, detective, detective privada, detectives, agencia de detectives, investigador privado, despacho de detectives, investigación privada, informes de detective"
  },
  {
    "nombre": "Procuradores",
    "slug": "procuradores",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Autónomo",
    "alias": "procurador, procurador de los tribunales, procuradora, procura, mutualidad de procuradores, mutualista, pasarela al RETA, LexNET, representación procesal, J2"
  },
  {
    "nombre": "Notarios",
    "slug": "notarios",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Autónomo",
    "alias": "notario, notaria, notaría, oficial de notaría, empleado de notaría, notario colegiado, protocolo notarial, fe pública, fedatario, escritura pública, titular de notaría"
  },
  {
    "nombre": "Vendedores de Coches",
    "slug": "vendedores-coches",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "vendedor de coches, asesor comercial de automoción, concesionario, compraventa de coches, comercial de automoción"
  },
  {
    "nombre": "Electricistas del Automóvil",
    "slug": "electricistas-automocion",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "electricista del automóvil, electromecánico, electricista de coches, vehículo eléctrico, alta tensión, diagnosis, taller"
  },
  {
    "nombre": "Árbitros Deportivos",
    "slug": "arbitros-deportivos",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "árbitro, árbitra, árbitros, colegiado, juez de línea, juez deportivo, jueces deportivos, cronometrador, comisario técnico, árbitro de fútbol, árbitro de baloncesto, VAR, informador arbitral"
  },
  {
    "nombre": "Entrenadores Personales",
    "slug": "entrenadores-personales",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Autónomo",
    "alias": "entrenador personal, entrenadora personal, personal trainer, preparador físico, preparadora física, instructor de fitness, entrenador de gimnasio, coach deportivo, entrenamiento personal"
  },
  {
    "nombre": "Técnicos de Sonido",
    "slug": "tecnicos-sonido",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "técnico de sonido, ingeniero de sonido, ingeniero de audio, sonidista, sonorista, microfonista, mezclador de sonido directo, FOH, técnico de directo, diseñador de sonido, foley"
  },
  {
    "nombre": "Iluminadores",
    "slug": "iluminadores",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "iluminador, técnico de iluminación, técnico de luces, gaffer, jefe de eléctricos, diseñador de luces, diseñador de iluminación, operador de mesa de luces, rigger, eléctrico de rodaje"
  },
  {
    "nombre": "Escenógrafos",
    "slug": "escenografos",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "escenógrafo, escenógrafa, director de arte, directora de arte, diseñador de escenografía, diseñador de producción, decorador, decorador de espectáculos, escenografía, scenographer"
  },
  {
    "nombre": "Conductores de Autobús Urbano",
    "slug": "conductores-autobus-urbano",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "conductor de autobús urbano, conductora de autobús urbano, conductor de bus, chófer de autobús, conductor de autobús, conductor de EMT, conductor de TMB, autobús urbano, transporte urbano, transporte público, conductor de autobús interurbano"
  },
  {
    "nombre": "Operadores Logísticos",
    "slug": "operadores-logisticos",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "operario de logística, coordinador logístico, gestor de cadena de suministro, supply chain, jefe de tráfico, responsable de almacén"
  },
  {
    "nombre": "Soladores",
    "slug": "soladores",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "solador, soladora, plaquetista, colocador de suelos, colocador de baldosas, baldosas, gres, porcelánico, terrazo, embaldosador, pavimentos cerámicos"
  },
  {
    "nombre": "Yeseros",
    "slug": "yeseros",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "yesero, yesera, yesista, enlucidor, guarnecedor, lucir yeso, proyectado de yeso, yeso proyectado, maestro yesero, revocos de yeso"
  },
  {
    "nombre": "Instaladores de Pladur",
    "slug": "instaladores-pladur",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "pladur, placa de yeso laminado, yeso laminado, obra seca, Knauf, Placo, montador de pladur, tabiquería seca"
  },
  {
    "nombre": "Vidrieros Artísticos",
    "slug": "vidrieros-artisticos",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "vidriero artístico, vidriera artística, vidriero, vitralista, vitrales, vidrio soplado, soplador de vidrio, vidrieras, artesano del vidrio, maestro vidriero, vidrio artesanal"
  },
  {
    "nombre": "Ortopedas",
    "slug": "ortopedas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "ortopeda, traumatólogo, cirugía ortopédica y traumatología, médico traumatólogo, COT"
  },
  {
    "nombre": "Técnicos Ortoprotésicos",
    "slug": "tecnicos-ortoprotesicos",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "técnico ortoprotésico, técnica ortoprotésica, ortoprotésico, ortopedia, ortopedista, ortesis, técnico ortopédico, técnico en ortoprótesis, taller ortopédico, ortopedia técnica"
  },
  {
    "nombre": "Higienistas Dentales",
    "slug": "higienistas-dentales",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "higienista, higienista dental, técnico superior en higiene bucodental, higiene bucodental, higienista bucodental, limpieza dental"
  },
  {
    "nombre": "Auxiliares de Odontología",
    "slug": "auxiliares-odontologia",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "auxiliar de odontología, auxiliar dental, auxiliar de clínica dental, auxiliar de dentista, ayudante de dentista, asistente dental, auxiliar de gabinete dental, auxiliar de odontólogo"
  },
  {
    "nombre": "Caldereros Industriales",
    "slug": "caldereros-industriales",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "calderero industrial, calderero, caldereros, calderería, calderería industrial, calderería pesada, construcciones metálicas, estructuras metálicas, tubero industrial, trazador, recipientes a presión"
  },
  {
    "nombre": "Matriceros",
    "slug": "matriceros",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "matricero, matricería, ajustador de moldes, ajustador matricero, troquelista, moldes, troqueles, electroerosión, moldes de inyección, utillajes"
  },
  {
    "nombre": "Operadores de Máquinas CNC",
    "slug": "operadores-cnc",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "operador cnc, operador de máquinas cnc, control numérico, mecanizado cnc, centro de mecanizado, torno cnc, fresadora cnc, taladrina, mecanizado"
  },
  {
    "nombre": "Electromecánicos",
    "slug": "electromecanicos",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto",
    "alias": "electromecánico, electromecánica, mecánico de coches, mecánico de automóviles, mecánico de taller, taller mecánico, mecánico de vehículos, electromecánica del automóvil, mantenimiento industrial, técnico de diagnosis"
  },
  {
    "nombre": "Visual Merchandisers",
    "slug": "visual-merchandisers",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto",
    "alias": "visual merchandiser, visual merchandising, escaparatismo, merchandiser, decorador de tiendas, implantador, imagen de tienda, responsable de visual, VM, montaje de tiendas, implantación comercial"
  },
  {
    "nombre": "Escaparatistas",
    "slug": "escaparatistas",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto",
    "alias": "escaparatista, escaparate, escaparatismo, decorador de escaparates, montador de escaparates, diseñador de escaparates, window dresser, vestir escaparates, decorador comercial, decoración de tiendas"
  },
  {
    "nombre": "Patronistas",
    "slug": "patronistas",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "alias": "patronista, patronaje, patrón de ropa, modelista, modelista de ropa, técnico de confección, escalador de patrones, diseñador de moda, costura industrial, confección, técnica de patronaje"
  },
  {
    "nombre": "Bordadoras",
    "slug": "bordadoras",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "bordadora, artesana del bordado, bordado a mano, bordado en oro, bordado de arte sacro, bordadora industrial, picadora de bordado, bordado de indumentaria tradicional, bordados de Lorca"
  },
  {
    "nombre": "Limpiacristales",
    "slug": "limpiacristales",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "limpiacristales en altura, limpieza de fachadas, limpieza de cristales, limpiador de cristales, limpieza de muros cortina"
  },
  {
    "nombre": "Fumigadores",
    "slug": "fumigadores",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado",
    "alias": "fumigador, fumigadora, control de plagas, técnico de plagas, desratización, desinsectación, DDD, aplicador de biocidas, empresa de plagas, exterminador, plagas, aplicador de plaguicidas"
  },
  {
    "nombre": "Deshollinadores",
    "slug": "deshollinadores",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Autónomo",
    "alias": "deshollinador, limpiador de chimeneas, limpiachimeneas, chimeneas, limpieza de conductos, mantenimiento de conductos, calderas de biomasa, extracciones de humos"
  },
  {
    "nombre": "Cesteros",
    "slug": "cesteros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Autónomo",
    "alias": "cestero, cestera, mimbre, esparto, cestería, artesano de fibras, caña, enea, junco, mimbrero, esparteros"
  },
  {
    "nombre": "Toneleros",
    "slug": "toneleros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "alias": "tonelero, tonelera, tonelería, barricas, fabricante de barricas, barrica de roble, armador de barricas, bocoyes, cuberos, botas de vino, artesano de barricas, toneles"
  },
  {
    "nombre": "Guarnicioneros",
    "slug": "guarnicioneros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "guarnicionero, albardero, talabartero, guadarnés, monturas, sillas de montar, arreos, cuero, lezna, enganche, marroquinería"
  },
  {
    "nombre": "Encuadernadores",
    "slug": "encuadernadores",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "encuadernador, encuadernación, artes gráficas, postimpresión, acabados gráficos, guillotinista, imprenta, restaurador de libros, manipulados de papel"
  },
  {
    "nombre": "Profesores de Autoescuela",
    "slug": "profesores-autoescuela",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto",
    "alias": "profesor de autoescuela, profesora de autoescuela, profesor de formación vial, autoescuela, formador vial, profesor de conducir, profesor de prácticas de conducción, titular de autoescuela, instructor de conducción, escuela de conductores, carné de conducir, clases de conducir"
  },
  {
    "nombre": "Formadores Ocupacionales",
    "slug": "formadores-ocupacionales",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto",
    "alias": "formador ocupacional, formador para el empleo, formación profesional para el empleo, certificado de profesionalidad, teleformación, tutor online, academia de formación, cursos del paro, FPE"
  },
  {
    "nombre": "Profesores de Idiomas",
    "slug": "profesores-idiomas",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto",
    "alias": "profesor de idiomas, profesor de inglés, profesor de francés, academia de idiomas, escuela oficial de idiomas, EOI, ELE, nativo, clases particulares de idiomas, preparador de exámenes, teacher"
  },
  {
    "nombre": "Monitores de Ocio y Tiempo Libre",
    "slug": "monitores-ocio-tiempo-libre",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Empleado",
    "alias": "monitor de ocio y tiempo libre, monitora de ocio y tiempo libre, monitor de tiempo libre, monitor de comedor, monitor de campamentos, monitor de actividades, monitor infantil y juvenil, animador sociocultural, monitor de colonias, educador de tiempo libre, actividades extraescolares, campamentos"
  },
  {
    "nombre": "Montadores de Cine y TV",
    "slug": "montadores-cine-tv",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "montador de cine, editor de vídeo, editor audiovisual, colorista, etalonador, postproductor, montador de televisión"
  },
  {
    "nombre": "Guionistas",
    "slug": "guionistas",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "guionista, argumentista, guion de cine, guion de TV, guionista de series, showrunner, script doctor, escaletista, dialoguista, guionista de videojuegos, game writer, guionista de humor, sala de guion, derechos de autor DAMA SGAE"
  },
  {
    "nombre": "Productores Audiovisuales",
    "slug": "productores-audiovisuales",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "productor ejecutivo, director de producción, jefe de producción, line producer, ayudante de producción, producción de cine y televisión, productora audiovisual"
  },
  {
    "nombre": "Apicultores",
    "slug": "apicultores",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Autónomo",
    "alias": "apicultor, apicultora, apicultura, abejas, colmenas, miel, apicultor trashumante, explotación apícola, colmenero, producción de miel, apiario"
  },
  {
    "nombre": "Viticultores",
    "slug": "viticultores",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Autónomo",
    "alias": "viticultor, viticultora, viticultura, viñedo, viña, vendimiador, poda de viñedo, cooperativa vitivinícola, viñador, explotación vitícola"
  },
  {
    "nombre": "Técnicos de Ascensores",
    "slug": "tecnicos-ascensores",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "técnico de ascensores, ascensorista, conservador de ascensores, montador de ascensores, mantenimiento de ascensores, escaleras mecánicas, montacargas, elevadores, foso, retén de rescate, amianto"
  },
  {
    "nombre": "Técnicos de Alarmas",
    "slug": "tecnicos-alarmas",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "técnico de alarmas, instalador de alarmas, sistemas de seguridad, CCTV, videovigilancia, control de accesos, detección de incendios, central receptora de alarmas, CRA, mantenedor de alarmas"
  },
  {
    "nombre": "Instaladores de Paneles Solares",
    "slug": "instaladores-paneles-solares",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto",
    "alias": "placas solares, fotovoltaica, autoconsumo, energía solar, renovables, instaladores fotovoltaicos, montadores de placas"
  },
  {
    "nombre": "Técnicos de Automatización Industrial",
    "slug": "tecnicos-automatizacion",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "plc, scada, robotica industrial, programador de autómatas, integrador de robots, instrumentación, commissioning, puesta en marcha"
  },
  {
    "nombre": "Diseñadores de Interiores",
    "slug": "disenadores-interiores",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "diseñador de interiores, diseñadora de interiores, interiorista, interiorismo, decorador de interiores, decoradora, diseño de interiores, estudio de interiorismo, home staging, proyectos de interiores"
  },
  {
    "nombre": "Diseñadores Industriales",
    "slug": "disenadores-industriales",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "diseñador industrial, diseñadora industrial, diseño industrial, diseño de producto, diseñador de producto, ingeniero de diseño, prototipado, estudio de diseño, ingeniero de diseño industrial"
  },
  {
    "nombre": "Ilustradores",
    "slug": "ilustradores",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Autónomo",
    "alias": "ilustrador, ilustradora, dibujante, historietista, comiquero, autor de cómic, concept artist, ilustración editorial, ilustrador freelance, dibujante de cómic, creador gráfico"
  },
  {
    "nombre": "Taxidermistas",
    "slug": "taxidermistas",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Autónomo",
    "alias": "taxidermista, disecador, naturalizador, preparador de fauna, preparador naturalista, preparador de museo, disecar animales, trofeos de caza, taxidermia, preparador biológico"
  },
  {
    "nombre": "Relojeros",
    "slug": "relojeros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto",
    "alias": "relojero, relojería, reparador de relojes, maestro relojero, fornituras, servicio técnico de relojes, calibre, cambiapilas, micromecánica"
  },
  {
    "nombre": "Encargados de Obra",
    "slug": "encargados-obra",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado",
    "alias": "capataz, jefe de obra, encargado general, encargado de edificación, encargado de construcción, recurso preventivo"
  },
  {
    "nombre": "Operadores de Grúa Torre",
    "slug": "operadores-grua-torre",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado",
    "alias": "gruista, gruistas, operador de grúa, grúa torre, maquinista de grúa, carné de gruista, grúa de obra, operario de grúa"
  },
  {
    "nombre": "Traductores Jurados",
    "slug": "traductores-jurados",
    "propia": false,
    "categoria": "Traducción e Interpretación",
    "color": "blue",
    "cotizacion": "Autónomo",
    "alias": "traductor-intérprete jurado, intérprete jurado, traducción jurada, traductor oficial, traductor público, perito lingüístico, traducción oficial"
  },
  {
    "nombre": "Baristas",
    "slug": "baristas",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Mixto",
    "alias": "barista, baristas, café de especialidad, tercera ola, tostador de café, catador, Q-Grader, cafetería, jefe de barra, latte art, especialista en café"
  },
  {
    "nombre": "Reposteros",
    "slug": "reposteros",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "alias": "repostero, repostera, pastelero, pastelera, pastelería, repostería, obrador de pastelería, pastelería artesanal, chocolatero, panadero y pastelero, cake designer, confitero, tartas"
  },
  {
    "nombre": "Maquilladores",
    "slug": "maquilladores",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto",
    "alias": "maquillador, maquilladora, caracterizador, caracterización, maquillaje profesional, maquillaje cine, maquillaje novias, FX, prótesis"
  },
  {
    "nombre": "Pilotos de Automovilismo",
    "slug": "pilotos-automovilismo",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Autónomo",
    "alias": "piloto de carreras, piloto de rallies, piloto de karting, fórmula, RFEDA, deportista del motor, piloto de circuito"
  },
  {
    "nombre": "Pilotos de Motociclismo",
    "slug": "pilotos-motociclismo",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Autónomo",
    "alias": "piloto de motos, MotoGP, motocross, trial, enduro, velocidad, RFME, piloto de moto"
  },
  {
    "nombre": "Tenistas",
    "slug": "tenistas",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Autónomo",
    "alias": "tenista, tenista profesional, tenis, jugador de tenis, jugadora de tenis, deportista de tenis, circuito ATP, circuito WTA, entrenador de tenis, tenis profesional, raqueta"
  },
  {
    "nombre": "Deportistas Profesionales",
    "slug": "deportistas-profesionales",
    "propia": false,
    "alias": "futbolistas, baloncestistas, balonmanistas, ciclistas, golfistas, atletas, gimnastas, nadadores, deportista de alto nivel, DAN",
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Gericultores",
    "slug": "gericultores",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado",
    "alias": "gericultor, gericultora, gerocultor, gerocultora, auxiliar de geriatría, auxiliar de residencia, auxiliar de ayuda a domicilio en residencia, residencia de ancianos, centro de día, atención sociosanitaria"
  },
  {
    "nombre": "Educadores Sociales",
    "slug": "educadores-sociales",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Empleado",
    "alias": "educador social, educadora social, educación social, centro de menores, piso tutelado, CRAE, mediador socioeducativo, intervención socioeducativa, ONG, tercer sector"
  },
  {
    "nombre": "Agentes Forestales y Medioambientales",
    "slug": "agentes-forestales",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "alias": "agente forestal, agente medioambiental, agente de medio ambiente, guarda forestal, guarda de medio ambiente, agente rural, agente del medio natural, guarda del medio natural, guardia forestal, agentes forestales y medioambientales, guarda de espacios naturales"
  },
  {
    "nombre": "Arqueólogos",
    "slug": "arqueologos",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Mixto",
    "alias": "arqueólogo, arqueóloga, arqueología, arqueología de campo, arqueología preventiva, excavación arqueológica, técnico de patrimonio, arqueólogo de gabinete, yacimientos, prospección arqueológica, patrimonio arqueológico"
  },
  {
    "nombre": "Futbolistas",
    "slug": "futbolistas",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Empleado",
    "alias": "futbolista, futbolista profesional, jugador de fútbol, jugadora de fútbol, fútbol, deportista profesional, futbolista de Primera, futbolista de Segunda, fútbol profesional, LaLiga, retirada del fútbol"
  },
  {
    "nombre": "Teleoperadores",
    "slug": "teleoperadores",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "teleoperador, teleoperadora, call center, centro de llamadas, contact center, atención telefónica, telemarketing, atención al cliente telefónica, operador telefónico, telefonista, televenta, agente de call center"
  },
  {
    "nombre": "Data Scientists / Analistas de Datos",
    "slug": "data-scientists",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado",
    "alias": "científico de datos, científicos de datos, ciencia de datos, analista de datos, analistas de datos, data analyst, data engineer, ingeniero de datos"
  },
  {
    "nombre": "Diseñadores UX/UI",
    "slug": "ux-ui",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto",
    "alias": "diseñador UI, diseñadora UX/UI, diseño de interfaces, diseñador de producto digital, experiencia de usuario, product designer, investigador UX"
  },
  {
    "nombre": "Creadores de Contenido / Streamers",
    "slug": "creadores-contenido",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Autónomo",
    "alias": "creador de contenido, creadora de contenido, streamer, youtuber, influencer, tiktoker, instagramer, twitch, redes sociales, content creator, vloguero, podcaster, creador digital"
  },
  {
    "nombre": "Organizadores de Eventos",
    "slug": "organizadores-eventos",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto",
    "alias": "organizador de eventos, organizadora de eventos, wedding planner, planificador de bodas, regidor, event planner, eventos, producción de eventos, organización de bodas, coordinador de eventos, gestor de eventos, agencia de eventos"
  },
  {
    "nombre": "Directivos y Gerentes de Empresas (CEOs)",
    "slug": "directivos-ceos",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto",
    "alias": "directivo, directiva, CEO, gerente, director general, consejero delegado, alta dirección, personal de alta dirección, gerente de empresa, directivo de empresa, administrador de sociedad, director ejecutivo"
  },
  {
    "nombre": "Especialistas en Marketing Digital",
    "slug": "marketing-digital",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto",
    "alias": "marketing digital, especialista en marketing digital, community manager, SEO, SEM, publicidad online, responsable de marketing, growth marketing, social media, social media manager, marketing online, publicista digital"
  },
  {
    "nombre": "Controladores de Accesos",
    "slug": "controladores-accesos",
    "propia": false,
    "categoria": "Seguridad y Vigilancia",
    "color": "stone",
    "cotizacion": "Empleado",
    "alias": "controlador de accesos, controlador, portero de discoteca, portero de local, portero de sala, control de acceso, puertas de locales, personal de control de accesos, controlador de sala, portero de pub, controlador de eventos"
  },
  {
    "nombre": "Azafatas/os de Tierra y Promotores",
    "slug": "azafatas-tierra-promotores",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto",
    "alias": "azafata de tierra, azafato de tierra, azafato, promotora, promotor, azafata de congresos, azafata de eventos, azafata de ferias, promotor de ventas, imagen y promoción"
  },
  {
    "nombre": "Funcionarios de Instituciones Penitenciarias",
    "slug": "funcionarios-penitenciarios",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "funcionario de prisiones, funcionaria de prisiones, funcionario de instituciones penitenciarias, funcionario de cárceles, funcionario de prisión, cárcel, prisión, centro penitenciario, ayudante de instituciones penitenciarias, vigilancia penitenciaria"
  },
  {
    "nombre": "Locutores de Radio",
    "slug": "locutores-radio",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "locutor de radio, locutora de radio, locutora, presentador de radio, radio, radiofonista, productor de radio, comunicador de radio, speaker, cuñas publicitarias, voz en off"
  },
  {
    "nombre": "Operadores de Cámara y Técnicos de Imagen",
    "slug": "operadores-camara",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "operador de cámara, operadora de cámara, cámara de televisión, cámara de cine, cámara, cameraman, cámara de TV, técnico de imagen, técnico audiovisual, técnico de realización, rodajes, realizador, videógrafo, ENG"
  },
  {
    "nombre": "Relaciones Públicas",
    "slug": "relaciones-publicas",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto",
    "alias": "relaciones públicas, RRPP, RR.PP., relaciones públicas de ocio nocturno, comunicación corporativa, dircom, director de comunicación, responsable de comunicación, jefe de prensa, gabinete de prensa, relaciones institucionales, agencia de comunicación"
  },
  {
    "nombre": "Instaladores de Gas",
    "slug": "instaladores-gas",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto",
    "alias": "instalador de gas, instaladora de gas, técnico de calefacción, instalador de calefacción, gasista, instalador autorizado de gas, instalación de gas, caldera de gas, fontanero y gasista, técnico de gas, mantenimiento de calderas"
  },
  {
    "nombre": "Letrados de la Administración de Justicia",
    "slug": "letrados-administracion-justicia",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "letrado de la administración de justicia, LAJ, secretario judicial, letrada de la administración de justicia, secretario de juzgado, secretaria judicial, cuerpo de letrados, fe pública judicial, juzgado, justicia"
  },
  {
    "nombre": "Profesores Universitarios",
    "slug": "profesores-universitarios",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto",
    "alias": "profesor universitario, profesora universitaria, catedrático, catedrática, profesor titular, profesor contratado doctor, profesor asociado, docente universitario, universidad, profesor de universidad, ayudante doctor, personal docente e investigador, PDI"
  },
  {
    "nombre": "Profesores de Enseñanza Privada y Concertada",
    "slug": "profesores-privada-concertada",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Empleado",
    "alias": "profesor de colegio concertado, profesora de colegio concertado, profesor de colegio privado, profesor de enseñanza concertada, enseñanza concertada, enseñanza privada, colegio concertado, colegio privado, docente de concertada, maestro de concertada, pago delegado, maestra de colegio privado"
  },
  {
    "nombre": "Orientadores Educativos",
    "slug": "orientadores-educativos",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto",
    "alias": "orientador educativo, orientadora educativa, orientador, orientadora, orientador escolar, departamento de orientación, psicopedagogo, psicopedagoga, orientación educativa, equipo de orientación, EOEP, docente de orientación, orientador de instituto"
  },
  {
    "nombre": "Sociólogos e Investigadores Sociales",
    "slug": "sociologos",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Mixto",
    "alias": "sociólogo, socióloga, sociología, investigador social, investigadora social, analista social, estudios sociales, consultor social, sociólogo investigador, encuestas, estudios de mercado"
  },
  {
    "nombre": "Trabajadores Funerarios y Tanatopractores",
    "slug": "funerarios-tanatopractores",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado",
    "alias": "tanatopractor, tanatopractora, tanatopraxia, funeraria, empleado de funeraria, trabajador funerario, sepulturero, enterrador, conductor de coche fúnebre, tanatorio, servicios funerarios, embalsamador, director de funeraria"
  },
  {
    "nombre": "Mecánicos de Aviación",
    "slug": "mecanicos-aviacion",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "mecánico de aviación, mecánico de aeronaves, mecánico de avión, técnico de aviones, mecánico aeronáutico, mantenimiento de aeronaves, mecánico de línea, mecánico de hangar, licencia B1, licencia B2, hangar, aviones"
  },
  {
    "nombre": "Técnicos de Mantenimiento Aeronáutico (TMA)",
    "slug": "tecnicos-mantenimiento-aeronautico",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "técnico de mantenimiento aeronáutico, TMA, técnico de mantenimiento de aeronaves, técnico de aviación, licencia EASA Parte 66, EASA Part-66, técnico B1, técnico B2, certifying staff, técnico de mantenimiento de aviones"
  },
  {
    "nombre": "Tripulantes de Cabina de Pasajeros (TCP)",
    "slug": "tcp-tripulantes-cabina",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "TCP, tripulante de cabina de pasajeros, tripulante de cabina, auxiliar de vuelo, azafata de vuelo, azafato de vuelo, personal de cabina, azafata de avión, sobrecargo, cabin crew"
  },
  {
    "nombre": "Operadores de Maquinaria de Movimiento de Tierras",
    "slug": "operadores-maquinaria-movimiento-tierras",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado",
    "alias": "operador de maquinaria, operador de excavadora, maquinista, maquinista de obra, operador de pala, operador de dúmper, operador de bulldozer, conductor de excavadora, retroexcavadora, excavadora, maquinaria pesada, movimiento de tierras, operador de maquinaria de obra"
  },
  {
    "nombre": "Operadores de Carretillas Elevadoras",
    "slug": "operadores-carretillas-elevadoras",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "operador de carretilla, carretillera, carretilla elevadora, mozo de almacén con carretilla, conductor de carretilla, transpaleta, apilador"
  },
  {
    "nombre": "Rederas, Neskatillas y Empacadoras",
    "slug": "rederas-neskatillas",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado",
    "alias": "redera, rederas, neskatila, neskatilas, empacadora, empacadoras, empacadora de conservas, arreglo de redes, redes de pesca, rederas y neskatillas, remendar redes, trabajadoras del mar, Régimen del Mar, puerto"
  },
  {
    "nombre": "Sacerdotes y Religiosos",
    "slug": "sacerdotes-religiosos",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Empleado",
    "alias": "sacerdote, cura, párroco, religioso, religiosa, monja, fraile, clero, clérigo, ministro de culto, obispo, diácono, religiosos y religiosas, congregación religiosa"
  },
  {
    "nombre": "Visitadores Médicos",
    "slug": "visitadores-medicos",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado",
    "alias": "visitador médico, visitadora médica, delegado de laboratorio, informador técnico sanitario, representante de laboratorio, propagandista farmacéutico, delegado comercial farmacéutico, informador médico, comercial farmacéutico, laboratorio farmacéutico"
  },
  {
    "nombre": "Técnicos de Mantenimiento Eólico",
    "slug": "tecnicos-mantenimiento-eolico",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado",
    "alias": "técnico de mantenimiento eólico, técnico eólico, técnica eólica, aerogenerador, parque eólico, energía eólica, técnico de aerogeneradores, trabajo en altura, GWO, tecnico de turbinas eólicas, mantenimiento de aerogeneradores"
  },
  {
    "nombre": "Personal de Limpieza Hospitalaria",
    "slug": "limpieza-hospitalaria",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado",
    "alias": "limpieza hospitalaria, limpiador de hospital, limpiadora de hospital, personal de limpieza de hospital, limpiadora sanitaria, limpieza de centros sanitarios, limpieza de quirófanos, limpieza de centros de salud, limpiadora de clínica, contrata de limpieza, hospital, mozo de limpieza hospitalaria"
  },
  {
    "nombre": "Actuarios de Seguros",
    "slug": "actuarios-seguros",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto",
    "alias": "actuario, actuaria, actuario de seguros, actuariado, ciencias actuariales, matemático de seguros, cálculo actuarial, analista de riesgos, actuario de pensiones, aseguradora, reaseguro, instituto de actuarios"
  },
  {
    "nombre": "Administradores de Fincas",
    "slug": "administradores-fincas",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Autónomo",
    "alias": "administrador de fincas, administradora de fincas, administrador de comunidades, gestor de comunidades de propietarios, comunidades de propietarios, propiedad horizontal, colegio de administradores de fincas, administrador colegiado, administración de fincas, presidente de comunidad"
  },
  {
    "nombre": "Agentes de Aduanas",
    "slug": "agentes-aduanas",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto",
    "alias": "agente de aduanas, agente de aduanas y transitario, representante aduanero, despachante de aduanas, aduanas, transitario, agente transitario, agencia de aduanas, despacho de aduanas, DUA, comercio exterior, logística aduanera"
  },
  {
    "nombre": "Agentes de Handling Aeroportuario",
    "slug": "agentes-handling-aeroportuario",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "agente de handling, handling aeroportuario, handling, personal de rampa, agente de rampa, mozo de rampa, facturación de aeropuerto, asistencia en tierra, personal de tierra de aeropuerto, aeropuerto, operario de handling, carga y descarga de aviones"
  },
  {
    "nombre": "Controladores Aéreos",
    "slug": "controladores-aereos",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "controlador aéreo, controladora aérea, controlador de tráfico aéreo, controlador de tránsito aéreo, ATC, controlador aéreo de torre, controlador de ruta, torre de control, ENAIRE, tránsito aéreo, tráfico aéreo, navegación aérea"
  },
  {
    "nombre": "Despachadores de Vuelo",
    "slug": "despachadores-vuelo",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "despachador de vuelo, despachadora de vuelo, operador de vuelo, técnico de operaciones de vuelo, flight dispatcher, dispatcher, dispatcher de aerolínea, EOV, encargado de operaciones de vuelo, planificación de vuelos, control de operaciones"
  },
  {
    "nombre": "Pilotos de Pruebas",
    "slug": "pilotos-pruebas",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "piloto de pruebas, piloto de ensayos, piloto de ensayos en vuelo, piloto de prueba, piloto de test, test pilot, flight test, ensayos en vuelo, piloto experimental, piloto de producción, piloto de certificación, piloto de fabricante, aviación de pruebas, licencia de piloto de pruebas"
  },
  {
    "nombre": "Prácticos de Puerto",
    "slug": "practicos-puerto",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto",
    "alias": "práctico de puerto, práctica de puerto, práctico, prácticos, practicaje, servicio de practicaje, corporación de prácticos, capitán de practicaje, piloto de puerto, piloto de puerto marítimo, harbour pilot, maritime pilot, pilot boat, lancha de prácticos, escala de práctico, estación de practicaje, régimen del mar"
  },
  {
    "nombre": "Amarradores de Puerto",
    "slug": "amarradores-puerto",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto",
    "alias": "amarrador de puerto, amarrador, amarradora, amarre de buques, amarre y desamarre, servicio de amarre, servicios portuarios de amarre, estachas, amarrar buques, boteros amarradores, lancha de amarre, capataz de amarre, atraque de buques, mooring, linesman, tráfico interior de puertos"
  },
  {
    "nombre": "Personal de Salvamento Marítimo",
    "slug": "salvamento-maritimo",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado",
    "alias": "salvamento marítimo, Salvamento Marítimo, Sasemar, SASEMAR, tripulante de salvamento, guardamar, salvamar, rescate en la mar, rescatador marítimo, patrón de salvamento, remolcador de salvamento, buque de salvamento, centro de coordinación de salvamento, lucha contra la contaminación marina, coeficiente reductor salvamento, 0,35"
  },
  {
    "nombre": "Pilotos de Drones",
    "slug": "pilotos-drones",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto",
    "alias": "piloto de drones, piloto de dron, pilotos de dron, operador de drones, operador de dron, operador RPAS, piloto RPAS, piloto UAS, operador UAS, piloto UAV, piloto remoto, aeronave no tripulada, aeronaves pilotadas por control remoto, dron, drones, fotogrametría con drones, inspección con drones, fotografía aérea con dron, radiofonista UAS, AESA"
  },
  {
    "nombre": "Ingenieros Aeroespaciales",
    "slug": "ingenieros-aeroespaciales",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "ingeniero aeroespacial, ingeniera aeroespacial, ingeniero aeronáutico, ingeniería aeroespacial, ingeniero de aviones, ingeniero de estructuras aeronáuticas, ingeniero espacial, aviación, Airbus, satélites, ingeniero de sistemas aeroespaciales"
  },
  {
    "nombre": "Especialistas en Efectos Visuales (VFX)",
    "slug": "especialistas-vfx",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto",
    "alias": "especialista en VFX, artista VFX, efectos visuales, VFX, efectos especiales, postproducción, compositor digital, animador 3D, motion graphics, cine y televisión, rotoscopia"
  },
  {
    "nombre": "Croupiers y Personal de Casinos",
    "slug": "croupiers-casinos",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado",
    "alias": "croupier, crupier, crupiers, personal de casino, dealer, repartidor de cartas, ruleta, blackjack, póker, sala de juego, juego de casino, casino de juego"
  },
  {
    "nombre": "Fruteros y Verduleros",
    "slug": "fruteros-verduleros",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto",
    "alias": "frutero, frutera, verdulero, verdulera, frutería, verdulería, tienda de frutas, puesto de frutas, fruta y verdura, vendedor de frutas, mayorista de frutas, comercio de alimentación"
  },
  {
    "nombre": "Inspectores de Trabajo y Seguridad Social",
    "slug": "inspectores-trabajo-seguridad-social",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "inspector de trabajo, inspectora de trabajo, inspector de trabajo y seguridad social, subinspector laboral, subinspector de empleo y seguridad social, inspección de trabajo, ITSS, cuerpo de inspección, inspector laboral, inspección laboral"
  },
  {
    "nombre": "Ingenieros en Electrónica y Automática Industrial",
    "slug": "ingenieros-electronica-automatica",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto",
    "alias": "ingeniero electrónico, ingeniera electrónica, ingeniero de automatización, ingeniero de automática, ingeniería electrónica industrial, automatización industrial, ingeniero de control, ingeniero de PLC, ingeniero de instrumentación, robótica industrial, ingeniero de electrónica, integrador de sistemas"
  },
  {
    "nombre": "Gobernantas y Gobernantes de Hotel",
    "slug": "gobernantas-hotel",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado",
    "alias": "gobernanta, gobernante, gobernanta de hotel, subgobernanta, subgobernante, jefa de pisos, jefe de pisos, ama de llaves, gobernanta de pisos, responsable de pisos, departamento de pisos"
  },
  {
    "nombre": "Inspectores de Hacienda",
    "slug": "inspectores-hacienda",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado",
    "alias": "inspector de hacienda, inspectora de hacienda, inspector de Hacienda del Estado, inspector tributario, AEAT, Agencia Tributaria, inspector de la Agencia Tributaria, inspección tributaria, cuerpo superior de inspectores, funcionario de Hacienda, técnico de Hacienda"
  },
  {
    "nombre": "Protésicos Dentales",
    "slug": "protesicos-dentales",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "protésico dental, protésica dental, prótesis dental, técnico de prótesis dental, laboratorio dental, técnico de laboratorio dental, dentadura, coronas y puentes, mecánico dental, laboratorio de prótesis, CAD/CAM dental, implantes dentales"
  },
  {
    "nombre": "Socorristas Acuáticos",
    "slug": "socorristas-acuaticos",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Mixto",
    "alias": "socorrista, socorrista acuático, socorrista de piscina, socorrista de playa, socorrismo, salvamento acuático, salvavidas, lifeguard, socorrista de verano, vigilante de piscina, piscinas, playas, salvamento y socorrismo"
  },
  {
    "nombre": "Chóferes Privados y de Representación",
    "slug": "choferes-privados",
    "propia": false,
    "alias": "chofer particular, chofer de empresa, conductor de representación",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Conductores de Transporte Escolar",
    "slug": "conductores-transporte-escolar",
    "propia": false,
    "alias": "autobús escolar, autocar de menores, ruta escolar",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Conductores de Ambulancia y Transporte Sanitario",
    "slug": "conductores-ambulancia",
    "propia": false,
    "alias": "conductor de ambulancia, transporte sanitario, TES",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Conductores de Camión Hormigonera",
    "slug": "conductores-hormigonera",
    "propia": false,
    "alias": "autohormigonera, camión de hormigón",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Conductores de Grúa de Asistencia en Carretera",
    "slug": "conductores-grua-asistencia",
    "propia": false,
    "alias": "gruista, auxilio en carretera, rescate vehicular",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Conductores de Camión de Basura",
    "slug": "conductores-camion-basura",
    "propia": false,
    "alias": "recogida de residuos urbanos, camión recolector",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Conductores de Metro y Tranvía",
    "slug": "conductores-metro-tranvia",
    "propia": false,
    "alias": "maquinista de metro, metro ligero, ferrocarril suburbano",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Acupuntores",
    "slug": "acupuntores",
    "propia": false,
    "alias": "medicina tradicional china, acupuntura, terapias naturales",
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Adiestradores y Educadores Caninos",
    "slug": "adiestradores-caninos",
    "propia": false,
    "alias": "educador canino, modificación de conducta canina, guía canino civil, entrenador de perros",
    "categoria": "Mascotas y Cuidado Animal",
    "color": "amber",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Auxiliares Técnicos Veterinarios",
    "slug": "auxiliares-tecnicos-veterinarios",
    "propia": false,
    "alias": "ATV, auxiliar de clínica veterinaria, técnico veterinario, enfermero veterinario, auxiliar veterinario",
    "categoria": "Mascotas y Cuidado Animal",
    "color": "amber",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Audioprotesistas",
    "slug": "audioprotesistas",
    "propia": false,
    "alias": "audiología protésica, centro auditivo, gabinete auditivo, adaptador de audífonos",
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Auxiliares de Óptica",
    "slug": "auxiliares-optica",
    "propia": false,
    "alias": "vendedor de óptica, personal de comercio óptico, montador de óptica, asesor de imagen visual",
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Administradores de Bases de Datos (DBA)",
    "slug": "administradores-bases-datos-dba",
    "propia": false,
    "alias": "DBA, administrador de base de datos, database administrator, Oracle, SQL Server, PostgreSQL",
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Agentes de la Propiedad Industrial (Patentes y Marcas)",
    "slug": "agentes-patentes-marcas",
    "propia": false,
    "alias": "agente de la propiedad industrial, API, patentes, marcas, modelos de utilidad, OEPM",
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Criminólogos",
    "slug": "criminologos",
    "propia": false,
    "alias": "criminología, criminólogo, análisis criminal, perfilador, victimología",
    "categoria": "Seguridad y Vigilancia",
    "color": "stone",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Diplomáticos",
    "slug": "diplomaticos",
    "propia": false,
    "alias": "carrera diplomática, embajadores, cónsules, servicio exterior, ministerio de asuntos exteriores",
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Grabadores de Datos",
    "slug": "grabadores-datos",
    "propia": false,
    "alias": "grabador de datos, data entry, introducción de datos, operador de teclado, mecanógrafo",
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Inspectores de Educación",
    "slug": "inspectores-educacion",
    "propia": false,
    "alias": "inspección educativa, inspector de educación, cuerpo de inspectores",
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Mozos de Mudanzas",
    "slug": "mozos-mudanzas",
    "propia": false,
    "alias": "mozo de mudanzas, mudanzas, cargador, operario de capitoné, montador de muebles, transporte de enseres, guardamuebles, portes, montamuebles",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Lavacoches y Limpiadores de Vehículos",
    "slug": "lavacoches",
    "propia": false,
    "alias": "lavacoches, limpiador de vehículos, limpiadores de vehículos, lavadero de coches, túnel de lavado, detailing, detailer, preparador de vehículos, limpieza de flotas, rent a car, autolavado",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Inspectores de ITV",
    "slug": "inspectores-itv",
    "propia": false,
    "alias": "inspector de ITV, estaciones ITV, inspección técnica de vehículos",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Inspectores de Obra",
    "slug": "inspectores-obra",
    "propia": false,
    "alias": "inspector de obra, inspección de obras, control de calidad de obra, supervisor de obra",
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Inspectores de Sanidad",
    "slug": "inspectores-sanidad",
    "propia": false,
    "alias": "inspector de sanidad, inspección sanitaria, salud pública, inspectores farmacéuticos, inspectores médicos",
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Antenistas e Instaladores de Telecomunicaciones",
    "slug": "antenistas",
    "propia": false,
    "alias": "antenista, instalador de antenas, instalador de telecomunicaciones, montador de torres, torrero, ICT, TDT, parabólica, estación base, radiofrecuencia, instalador de telefonía",
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Instaladores de Fibra Óptica",
    "slug": "instaladores-fibra-optica",
    "propia": false,
    "alias": "instalador de fibra óptica, FTTH, técnico de telecomunicaciones, empalmador de fibra, técnico de redes",
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Instrumentistas de Quirófano",
    "slug": "instrumentistas-quirofano",
    "propia": false,
    "alias": "instrumentista de quirófano, enfermería quirúrgica, técnico de quirófano, instrumentación quirúrgica",
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Osteópatas",
    "slug": "osteopatas",
    "propia": false,
    "alias": "osteopatía, osteópata, terapia manual, medicina manual",
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Perfusionistas Cardiovasculares",
    "slug": "perfusionistas-cardiovasculares",
    "propia": false,
    "alias": "perfusionista, circulación extracorpórea, bypass cardiopulmonar, ECMO",
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Peritos Calígrafos",
    "slug": "peritos-caligrafos",
    "propia": false,
    "alias": "perito calígrafo, grafología, pericial caligráfica, grafólogo, documentoscopia",
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Peritos de Seguros",
    "slug": "peritos-seguros",
    "propia": false,
    "alias": "perito de seguros, peritaje, tasador de siniestros, perito de averías",
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Peritos Tasadores Inmobiliarios",
    "slug": "peritos-tasadores-inmobiliarios",
    "propia": false,
    "alias": "tasador inmobiliario, perito tasador, tasación de viviendas, valoración inmobiliaria, tasadora",
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Quiroprácticos",
    "slug": "quiropracticos",
    "propia": false,
    "alias": "quiropráctica, quiropráctico, ajustes vertebrales, quiropraxia",
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Técnicos de Nóminas y Seguros Sociales",
    "slug": "tecnicos-nominas-seguros-sociales",
    "propia": false,
    "alias": "técnico de nóminas, nóminas, seguros sociales, gestor de nóminas, payroll, laboral",
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Soporte Informático (Helpdesk)",
    "slug": "tecnicos-soporte-informatico-helpdesk",
    "propia": false,
    "alias": "helpdesk, soporte técnico, técnico de soporte, técnico informático, service desk, microinformática",
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Tramitadores de Siniestros",
    "slug": "tramitadores-siniestros",
    "propia": false,
    "alias": "tramitador de siniestros, gestor de siniestros, siniestros de seguros, liquidador de siniestros",
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Registradores de la Propiedad",
    "slug": "registradores-propiedad",
    "propia": false,
    "alias": "registrador, registro de la propiedad, registro mercantil, registro de bienes muebles, funcionario registral",
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Barmans y Cocteleros",
    "slug": "barmans-cocteleros",
    "propia": false,
    "alias": "barman, bartender, coctelero, mixólogo, mixologo, camarero de barra, coctelería, cócteles, bar manager",
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Conserjes de Hotel y Botones",
    "slug": "conserjes-hotel-botones",
    "propia": false,
    "alias": "conserje de hotel, botones, bellboy, mozo de equipaje, concierge, portero de hotel, llaves de oro, pajería, conserjería de hotel",
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Creadores de Videojuegos",
    "slug": "creadores-videojuegos",
    "propia": false,
    "alias": "game designer, desarrollador de videojuegos, programador de videojuegos, indie developer, artista 3D, game developer, productor de videojuegos, videojuegos, gamedev",
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Directores de Hotel",
    "slug": "directores-hotel",
    "propia": false,
    "alias": "director de hotel, general manager, gerente de hotel, director de alojamiento, director de operaciones hoteleras, director de establecimiento, hotelero, revenue manager, gm",
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Estanqueros",
    "slug": "estanqueros",
    "propia": false,
    "alias": "estanquero, estanco, expendeduría de tabaco, expendedor de tabaco, titular de estanco, dependiente de estanco, tabacalera, timbres, concesionario de tabacos",
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Jefes de Sala de Juegos",
    "slug": "jefes-sala-juegos",
    "propia": false,
    "alias": "jefe de sala, jefe de mesa, inspector de juego, pit boss, jefe de sector, director de casino, encargado de bingo, encargado de salón de juego, casino, bingo, salón de juegos, apuestas",
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Agentes de Movilidad y Controladores de Estacionamiento",
    "slug": "agentes-movilidad",
    "propia": false,
    "alias": "agente de movilidad, agente de movilidad urbana, controlador de estacionamiento, controlador ORA, controlador SER, ORA, SER, zona azul, zona verde, estacionamiento regulado, parquímetros, multacar, vigilante de tráfico, auxiliar de movilidad",
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Compradores Retail y Category Managers",
    "slug": "compradores-retail",
    "propia": false,
    "alias": "comprador retail, compradores retail, buyer, buyers, retail buyer, category manager, jefe de compras, director de compras, gestor de surtido, aprovisionamiento, sourcing, central de compras, compras",
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Ajustadores Mecánicos",
    "slug": "ajustadores-mecanicos",
    "propia": false,
    "alias": "ajustador mecánico, ajustadores mecánicos, mecánico ajustador, mecánicos ajustadores, ajustador, montador mecánico, mantenedor de maquinaria, mantenimiento mecánico, mantenimiento industrial, taller de mecanizado, mecanizado, CNC, metal, ajuste mecánico",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Preparadores de Pedidos y Pickers",
    "slug": "preparadores-pedidos",
    "propia": false,
    "alias": "preparador de pedidos, preparadores de pedidos, picker, pickers, preparación de pedidos, picking, voice picking, operario de almacén, operarios de almacén, mozo de almacén, clasificador de paquetería, e-commerce, fulfillment, logística, almacén",
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Asfaltadores y Pavimentadores",
    "slug": "asfaltadores-pavimentadores",
    "propia": false,
    "alias": "asfaltador, asfaltadores, pavimentador, pavimentadores, operario de extendedora, maquinista de rodillo, compactadora, rastrillero, obra vial, aglomerado asfáltico, mezclas bituminosas, firmes y carreteras, asfalto, betún, carreteras",
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operarios de Conservación de Carreteras",
    "slug": "operarios-conservacion-carreteras",
    "propia": false,
    "alias": "operario de conservación de carreteras, operaria de conservación de carreteras, conservación de carreteras, conservación vial, mantenimiento de carreteras, mantenimiento vial, peón caminero, peones camineros, caminero, camineros, vialidad invernal, quitanieves, balizamiento, abanderado, señalista de obra, bacheo, biondas, cunetas, vigilante de conservación vial, explotación de carreteras, autovías, arcén",
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Artilleros y Barrenistas",
    "slug": "artilleros-voladuras",
    "propia": false,
    "alias": "artillero, artilleros, barrenista, barrenistas, artillero de voladuras, pegador, cargador de explosivos, ayudante de artillero, voladuras, explosivos, dinamita, barrenos, cantera, tunelería, obra pública, minería",
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operadores de Tuneladora",
    "slug": "operadores-tuneladora",
    "propia": false,
    "alias": "operador de tuneladora, operadores de tuneladora, tuneladora, tbm, tunnel boring machine, tunelero, tuneleros, piloto de escudo, topo, túneles, excavación subterránea, metro, dovelas",
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Canteros y Labrantes de Piedra",
    "slug": "canteros",
    "propia": false,
    "alias": "cantero, canteros, labrante de piedra, labrantes, piedra natural, granito, pizarra, cantera, picapedrero, escultor de piedra",
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Marmolistas y Talladores de Piedra",
    "slug": "marmolistas",
    "propia": false,
    "alias": "marmolista, marmolistas, tallador de piedra, talladores, marmolería, encimeras, montador de encimeras, cuarzo, silestone, aglomerado de cuarzo, granito, piedra natural, silicosis, sílice, pulidor de piedra, cortador de piedra",
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Caldereros Navales",
    "slug": "caldereros-navales",
    "propia": false,
    "alias": "calderero naval, caldereros navales, tubero naval, tuberos navales, trazador de calderería, montador naval, astillero, astilleros, reparación de buques, construcción naval, naval, calderería pesada, barcos, buques",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Plataformas Petrolíferas",
    "slug": "plataformas-petroliferas",
    "propia": false,
    "alias": "plataforma petrolífera, plataformas petrolíferas, offshore, petróleo, gas, sondeos, perforador, roughneck, hidrocarburos, oil and gas, plataforma marina, plataformas de gas",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operadores de Refinería",
    "slug": "operadores-refineria",
    "propia": false,
    "alias": "operador de refinería, operadores de refinería, refinería, petroquímica, planta química, panelista, operador de planta, refino, petróleo, correturnos, turnos, hidrocarburos, industria química",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operadores de Planta Química",
    "slug": "operadores-planta-quimica",
    "propia": false,
    "alias": "operador de planta química, operadores de planta química, planta química, industria química, panelista, operador de reactores, reactores, fertilizantes, farmacéutica, plásticos, turnos, toxicidad, correturnos, quinto turno",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Refractaristas y Albañiles de Hornos",
    "slug": "refractaristas",
    "propia": false,
    "alias": "refractarista, refractaristas, albañil de hornos, albañiles de hornos, refractario, refractarios, hornos industriales, revestimiento refractario, montador de refractario, siderurgia, cementera, parada de planta, paradas, fibras cerámicas, sílice",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operadores de Caldera",
    "slug": "operadores-caldera",
    "propia": false,
    "alias": "operador de caldera, operadores de caldera, operador de calderas, operadores de calderas, fogonero, fogoneros, caldera industrial, calderas industriales, operador industrial de calderas, carné de calderas, sala de calderas, sala de máquinas, generador de vapor, vapor, central térmica, planta térmica, cogeneración, calefacción, turnos rotativos, ITC EP-1, equipos a presión, encargado de calderas",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Ensayos No Destructivos",
    "slug": "tecnicos-ensayos-no-destructivos",
    "propia": false,
    "alias": "técnico de ensayos no destructivos, técnicos de ensayos no destructivos, END, NDT, ensayos no destructivos, inspector END, inspector de soldaduras, inspector de ensayos no destructivos, radiografía industrial, gammagrafía, gammagrafista, ultrasonidos industriales, partículas magnéticas, líquidos penetrantes, control de calidad de soldaduras, ISO 9712, CERTIAEND, licencia CSN, operador de instalaciones radiactivas, dosimetría, radiaciones ionizantes, paradas de planta",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Curtidores de Piel",
    "slug": "curtidores-piel",
    "propia": false,
    "alias": "curtidor, curtidores, curtidor de pieles, curtidores de pieles, curtidor de piel, tenería, tenerías, curtiduría, curtidurías, trabajador de tenería, adobador, adobadores, adobo de pieles, cuero, industria del cuero, curtido al cromo, curtido vegetal, ribera, pelambre, descarnado, rebajado, bombos de curtido, acabado de pieles, tintado de pieles, marroquinería, peletería",
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Trabajos Verticales",
    "slug": "trabajos-verticales",
    "propia": false,
    "alias": "trabajos verticales, técnico de trabajos verticales, trabajador vertical, trabajadores verticales, acceso por cuerdas, trabajos en altura, posicionamiento mediante cuerdas, trabajos de acceso y posicionamiento mediante cuerdas, rehabilitación de fachadas, pintor en altura, alpinista industrial, alpinismo industrial, IRATA, ANETVA, aerogeneradores, inspección en altura, arnés, rescate en altura, cuerdas y anclajes",
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
  }
];
