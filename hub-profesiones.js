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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Limpiadoras",
    "slug": "limpiadoras",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Comerciales",
    "slug": "comerciales",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Dependientes de Comercio",
    "slug": "dependientes",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Camareros",
    "slug": "camareros",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado"
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
    "cotizacion": "Empleado"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Administrativos",
    "slug": "administrativos",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Secretarias y Recepcionistas",
    "slug": "secretarias",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Fontaneros",
    "slug": "fontaneros",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Peluqueros",
    "slug": "peluqueros",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Programadores",
    "slug": "programadores",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue"
  },
  {
    "nombre": "Diseñadores Gráficos",
    "slug": "disenadores",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Operarios de Fábrica",
    "slug": "operarios-fabrica",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Empleados de Banca",
    "slug": "banca",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Médicos",
    "slug": "medicos",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Enfermeros",
    "slug": "enfermeros",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Pediatras",
    "slug": "pediatras",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Cirujanos",
    "slug": "cirujanos",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Dentistas",
    "slug": "dentistas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Psicólogos",
    "slug": "psicologos",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Auditores",
    "slug": "auditores",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Consultores",
    "slug": "consultores",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Autónomo"
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
    "color": "cyan"
  },
  {
    "nombre": "Ingenieros de Caminos",
    "slug": "ingenieros-caminos",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan"
  },
  {
    "nombre": "Ingenieros Informáticos",
    "slug": "ingenieros-informaticos",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue"
  },
  {
    "nombre": "Ingenieros de Telecomunicaciones",
    "slug": "ingenieros-telecomunicaciones",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue"
  },
  {
    "nombre": "Arquitectos",
    "slug": "arquitectos",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan"
  },
  {
    "nombre": "Aparejadores",
    "slug": "aparejadores",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan"
  },
  {
    "nombre": "Administradores de Sistemas",
    "slug": "administradores-sistemas",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Analistas de Sistemas",
    "slug": "analistas-sistemas",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Especialistas en Ciberseguridad",
    "slug": "especialistas-ciberseguridad",
    "propia": false,
    "categoria": "Tecnología e Informática",
    "color": "blue",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Peones Agrícolas",
    "slug": "peones-agricolas",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Peones de Construcción",
    "slug": "peones-construccion",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
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
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Trabajadores Sociales",
    "slug": "trabajadores-sociales",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Laboratorio Sanitario",
    "slug": "tecnicos-laboratorio-sanitario",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Radiología",
    "slug": "tecnicos-radiologia",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Emergencias Sanitarias",
    "slug": "tecnicos-emergencias-sanitarias",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Celadores",
    "slug": "celadores",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Educadores Infantiles",
    "slug": "educadores-infantiles",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Ingenieros Agrónomos",
    "slug": "ingenieros-agronomos",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Ingenieros de Montes",
    "slug": "ingenieros-montes",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Delineantes",
    "slug": "delineantes",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan"
  },
  {
    "nombre": "Técnicos de Mantenimiento",
    "slug": "tecnicos-mantenimiento",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Asesores Fiscales",
    "slug": "asesores-fiscales",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Analistas Financieros",
    "slug": "analistas-financieros",
    "propia": false,
    "categoria": "Administración, Gestión y Asesoría",
    "color": "slate",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Agentes Inmobiliarios",
    "slug": "agentes-inmobiliarios",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Guías Turísticos",
    "slug": "guias-turisticos",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Agentes de Viajes",
    "slug": "agentes-de-viajes",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Reponedores",
    "slug": "reponedores",
    "propia": false,
    "categoria": "Comercio y Venta",
    "color": "violet",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Ayudantes de Cocina",
    "slug": "ayudantes-cocina",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Carniceros",
    "slug": "carniceros",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Mixto"
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
    "color": "zinc"
  },
  {
    "nombre": "Instaladores de Climatización",
    "slug": "instaladores-climatizacion",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
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
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Mozos de Almacén",
    "slug": "mozos-almacen",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
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
    "color": "lime"
  },
  {
    "nombre": "Floristas",
    "slug": "floristas",
    "propia": false,
    "categoria": "Jardinería y Flores",
    "color": "lime"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Recogedores de Residuos",
    "slug": "recogedores-residuos",
    "propia": false,
    "categoria": "Limpieza y Servicios Urbanos",
    "color": "teal",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Biólogos",
    "slug": "biologos",
    "propia": false,
    "categoria": "Ciencia",
    "color": "emerald",
    "cotizacion": "Mixto"
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
    "color": "zinc"
  },
  {
    "nombre": "Técnicos Medioambientales",
    "slug": "tecnicos-medioambientales",
    "propia": false,
    "categoria": "Agrario y Ganadero",
    "color": "green",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Monitores Deportivos",
    "slug": "monitores-deportivos",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Escayolistas",
    "slug": "escayolistas",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Techadores",
    "slug": "techadores",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Andamistas",
    "slug": "andamistas",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Pintores de Coches",
    "slug": "pintores-coches",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Chapistas del Automóvil",
    "slug": "chapistas-automocion",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Tapiceros",
    "slug": "tapiceros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Auxiliares de Clínica",
    "slug": "auxiliares-clinica",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Farmacia",
    "slug": "tecnicos-farmacia",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Dietistas-Nutricionistas",
    "slug": "dietistas-nutricionistas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Ópticos-Optometristas",
    "slug": "opticos-optometristas",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Terapeutas Ocupacionales",
    "slug": "terapeutas-ocupacionales",
    "propia": false,
    "categoria": "Sanidad",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Técnicos de Anatomía Patológica",
    "slug": "tecnicos-anatomia-patologica",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Manicuristas",
    "slug": "manicuristas",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Masajistas",
    "slug": "masajistas",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Tatuadores",
    "slug": "tatuadores",
    "propia": false,
    "categoria": "Belleza y Estética",
    "color": "pink",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Sastres",
    "slug": "sastres",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Modistas",
    "slug": "modistas",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Torneros",
    "slug": "torneros",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc"
  },
  {
    "nombre": "Fresadores",
    "slug": "fresadores",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Montadores Industriales",
    "slug": "montadores-industriales",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Reparadores de Electrodomésticos",
    "slug": "reparadores-electrodomesticos",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc"
  },
  {
    "nombre": "Técnicos Electrónicos",
    "slug": "tecnicos-electronicos",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Recepcionistas de Hotel",
    "slug": "recepcionistas-hotel",
    "propia": false,
    "categoria": "Hostelería y Turismo",
    "color": "rose",
    "cotizacion": "Empleado"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Dependientes de Farmacia",
    "slug": "dependientes-farmacia",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Cuidadores de Mayores",
    "slug": "cuidadores-mayores",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Auxiliares a Domicilio",
    "slug": "auxiliares-domicilio",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado"
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
    "cotizacion": "Autónomo"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Electricistas del Automóvil",
    "slug": "electricistas-automocion",
    "propia": false,
    "categoria": "Transporte y Automoción",
    "color": "sky",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Árbitros Deportivos",
    "slug": "arbitros-deportivos",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Entrenadores Personales",
    "slug": "entrenadores-personales",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Técnicos de Sonido",
    "slug": "tecnicos-sonido",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Iluminadores",
    "slug": "iluminadores",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Escenógrafos",
    "slug": "escenografos",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Soladores",
    "slug": "soladores",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Yeseros",
    "slug": "yeseros",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Instaladores de Pladur",
    "slug": "instaladores-pladur",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
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
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Auxiliares de Odontología",
    "slug": "auxiliares-odontologia",
    "propia": false,
    "categoria": "Técnicos y Auxiliares Sanitarios",
    "color": "red",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Caldereros Industriales",
    "slug": "caldereros-industriales",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Matriceros",
    "slug": "matriceros",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operadores de Máquinas CNC",
    "slug": "operadores-cnc",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Electromecánicos",
    "slug": "electromecanicos",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Limpiacristales",
    "slug": "limpiacristales",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
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
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Cesteros",
    "slug": "cesteros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Autónomo"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Encuadernadores",
    "slug": "encuadernadores",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Profesores de Idiomas",
    "slug": "profesores-idiomas",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Guionistas",
    "slug": "guionistas",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Productores Audiovisuales",
    "slug": "productores-audiovisuales",
    "propia": false,
    "categoria": "Audiovisual, Medios y Creativo",
    "color": "purple",
    "cotizacion": "Mixto"
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
    "color": "zinc"
  },
  {
    "nombre": "Técnicos de Alarmas",
    "slug": "tecnicos-alarmas",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc"
  },
  {
    "nombre": "Instaladores de Paneles Solares",
    "slug": "instaladores-paneles-solares",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Técnicos de Automatización Industrial",
    "slug": "tecnicos-automatizacion",
    "propia": false,
    "categoria": "Industria, Metal y Mantenimiento",
    "color": "zinc"
  },
  {
    "nombre": "Diseñadores de Interiores",
    "slug": "disenadores-interiores",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan"
  },
  {
    "nombre": "Diseñadores Industriales",
    "slug": "disenadores-industriales",
    "propia": false,
    "categoria": "Ingeniería y Arquitectura Técnica",
    "color": "cyan"
  },
  {
    "nombre": "Ilustradores",
    "slug": "ilustradores",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Taxidermistas",
    "slug": "taxidermistas",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Relojeros",
    "slug": "relojeros",
    "propia": false,
    "categoria": "Artesanía y Oficios Tradicionales",
    "color": "amber",
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Encargados de Obra",
    "slug": "encargados-obra",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Operadores de Grúa Torre",
    "slug": "operadores-grua-torre",
    "propia": false,
    "categoria": "Construcción y Reformas",
    "color": "orange",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Traductores Jurados",
    "slug": "traductores-jurados",
    "propia": false,
    "categoria": "Traducción e Interpretación",
    "color": "blue",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Baristas",
    "slug": "baristas",
    "propia": false,
    "categoria": "Alimentación",
    "color": "yellow",
    "cotizacion": "Mixto"
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
    "cotizacion": "Mixto"
  },
  {
    "nombre": "Pilotos de Automovilismo",
    "slug": "pilotos-automovilismo",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Autónomo"
  },
  {
    "nombre": "Pilotos de Motociclismo",
    "slug": "pilotos-motociclismo",
    "propia": false,
    "categoria": "Deporte",
    "color": "red",
    "cotizacion": "Autónomo"
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
    "nombre": "Gericultores",
    "slug": "gericultores",
    "propia": false,
    "categoria": "Cuidados y Servicio Doméstico",
    "color": "fuchsia",
    "cotizacion": "Empleado"
  },
  {
    "nombre": "Educadores Sociales",
    "slug": "educadores-sociales",
    "propia": false,
    "categoria": "Educación y Formación",
    "color": "indigo",
    "cotizacion": "Empleado"
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
  }
];
