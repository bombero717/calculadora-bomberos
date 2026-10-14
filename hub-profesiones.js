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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Carteros y Correos",
    "slug": "carteros",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Antropólogos",
    "slug": "antropologos",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Científicos e Investigadores",
    "slug": "cientificos-investigadores",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Pastores",
    "slug": "pastores",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Trabajadores de Matadero",
    "slug": "trabajadores-matadero",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado"
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
    "cotizacion": "Empleado"
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
    "color": "yellow"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Veterinarios",
    "slug": "veterinarios",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Meteorólogos",
    "slug": "meteorologos",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Enólogos",
    "slug": "enologos",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Autónomos (RETA general)",
    "slug": "jubilacion-autonomos",
    "propia": true
  },
  {
    "nombre": "Actores de Doblaje (historia y normativa)",
    "slug": "jubilacion-actores-doblaje",
    "propia": false,
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
    "cotizacion": "Mixto"
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
    "color": "slate"
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
    "color": "slate"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Ingenieros Informáticos",
    "slug": "ingenieros-informaticos",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Ingenieros de Telecomunicaciones",
    "slug": "ingenieros-telecomunicaciones",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Arquitectos",
    "slug": "arquitectos",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Aparejadores",
    "slug": "aparejadores",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto"
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
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Ganaderos",
    "slug": "ganaderos",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Autónomo"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Fotógrafos",
    "slug": "fotografos",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Agentes de Seguros",
    "slug": "agentes-seguros",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Gestores Administrativos",
    "slug": "gestores-administrativos",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate"
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
    "alias": "guía oficial, free tour, guía acompañante, tour leader, visitas guiadas, guía local, informador turístico, intérprete del patrimonio"
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
    "color": "yellow"
  },
  {
    "nombre": "Panaderos",
    "slug": "panaderos",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Jardineros",
    "slug": "jardineros",
    "propia": false,
    "categoria": "Jardinería y Flores",
    "color": "lime",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Floristas",
    "slug": "floristas",
    "propia": false,
    "categoria": "Jardinería y Flores",
    "color": "lime",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Conserjes",
    "slug": "conserjes",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado"
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
    "cotizacion": "Empleado"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Joyeros",
    "slug": "joyeros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber"
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
    "color": "amber"
  },
  {
    "nombre": "Restauradores de Arte",
    "slug": "restauradores-arte",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Maîtres",
    "slug": "maitres",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado",
    "alias": "jefe de sala, jefe de comedor, primer maître, restaurante, sala, F&B, director de restauración"
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
    "cotizacion": "Empleado"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Escoltas",
    "slug": "escoltas",
    "propia": false,
    "categoria": "Seguridad y Vigilancia",
    "color": "stone",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Detectives Privados",
    "slug": "detectives-privados",
    "propia": false,
    "categoria": "Seguridad y Vigilancia",
    "color": "stone",
    "cotizacion": "Mixto"
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
    "cotizacion": "Autónomo"
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
    "cotizacion": "Empleado"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Escaparatistas",
    "slug": "escaparatistas",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Patronistas",
    "slug": "patronistas",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber"
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
    "alias": "limpiacristales en altura, limpieza de fachadas, trabajos verticales, trabajador vertical, limpieza de cristales, limpiador de cristales, limpieza de muros cortina, acceso por cuerda, IRATA"
  },
  {
    "nombre": "Fumigadores",
    "slug": "fumigadores",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado"
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
    "color": "amber"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
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
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Viticultores",
    "slug": "viticultores",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Autónomo"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Diseñadores Industriales",
    "slug": "disenadores-industriales",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto"
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
    "color": "yellow"
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
    "cotizacion": "Autónomo"
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
    "color": "green"
  },
  {
    "nombre": "Arqueólogos",
    "slug": "arqueologos",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Futbolistas",
    "slug": "futbolistas",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Teleoperadores",
    "slug": "teleoperadores",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Data Scientists / Analistas de Datos",
    "slug": "data-scientists",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Diseñadores UX/UI",
    "slug": "ux-ui",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Creadores de Contenido / Streamers",
    "slug": "creadores-contenido",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Organizadores de Eventos",
    "slug": "organizadores-eventos",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Directivos y Gerentes de Empresas (CEOs)",
    "slug": "directivos-ceos",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Especialistas en Marketing Digital",
    "slug": "marketing-digital",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Controladores de Accesos",
    "slug": "controladores-accesos",
    "propia": false,
    "categoria": "Seguridad y Vigilancia",
    "color": "stone",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Azafatas/os de Tierra y Promotores",
    "slug": "azafatas-tierra-promotores",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Funcionarios de Instituciones Penitenciarias",
    "slug": "funcionarios-penitenciarios",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Locutores de Radio",
    "slug": "locutores-radio",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Operadores de Cámara y Técnicos de Imagen",
    "slug": "operadores-camara",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Relaciones Públicas",
    "slug": "relaciones-publicas",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Instaladores de Gas",
    "slug": "instaladores-gas",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Letrados de la Administración de Justicia",
    "slug": "letrados-administracion-justicia",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Profesores Universitarios",
    "slug": "profesores-universitarios",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Profesores de Enseñanza Privada y Concertada",
    "slug": "profesores-privada-concertada",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Orientadores Educativos",
    "slug": "orientadores-educativos",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Sociólogos e Investigadores Sociales",
    "slug": "sociologos",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Trabajadores Funerarios y Tanatopractores",
    "slug": "funerarios-tanatopractores",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Mecánicos de Aviación",
    "slug": "mecanicos-aviacion",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Mantenimiento Aeronáutico (TMA)",
    "slug": "tecnicos-mantenimiento-aeronautico",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Tripulantes de Cabina de Pasajeros (TCP)",
    "slug": "tcp-tripulantes-cabina",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operadores de Maquinaria de Movimiento de Tierras",
    "slug": "operadores-maquinaria-movimiento-tierras",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operadores de Carretillas Elevadoras",
    "slug": "operadores-carretillas-elevadoras",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Rederas, Neskatillas y Empacadoras",
    "slug": "rederas-neskatillas",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Sacerdotes y Religiosos",
    "slug": "sacerdotes-religiosos",
    "propia": false,
    "categoria": "Cultura y Patrimonio",
    "color": "stone",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Visitadores Médicos",
    "slug": "visitadores-medicos",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Mantenimiento Eólico",
    "slug": "tecnicos-mantenimiento-eolico",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Personal de Limpieza Hospitalaria",
    "slug": "limpieza-hospitalaria",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Actuarios de Seguros",
    "slug": "actuarios-seguros",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Administradores de Fincas",
    "slug": "administradores-fincas",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Agentes de Aduanas",
    "slug": "agentes-aduanas",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Agentes de Handling Aeroportuario",
    "slug": "agentes-handling-aeroportuario",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Controladores Aéreos",
    "slug": "controladores-aereos",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Despachadores de Vuelo",
    "slug": "despachadores-vuelo",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Ingenieros Aeroespaciales",
    "slug": "ingenieros-aeroespaciales",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Especialistas en Efectos Visuales (VFX)",
    "slug": "especialistas-vfx",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Croupiers y Personal de Casinos",
    "slug": "croupiers-casinos",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Fruteros y Verduleros",
    "slug": "fruteros-verduleros",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Inspectores de Trabajo y Seguridad Social",
    "slug": "inspectores-trabajo-seguridad-social",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Ingenieros en Electrónica y Automática Industrial",
    "slug": "ingenieros-electronica-automatica",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Gobernantas y Gobernantes de Hotel",
    "slug": "gobernantas-hotel",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Inspectores de Hacienda",
    "slug": "inspectores-hacienda",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Protésicos Dentales",
    "slug": "protesicos-dentales",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Socorristas Acuáticos",
    "slug": "socorristas-acuaticos",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Mixto"
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
  }
];
