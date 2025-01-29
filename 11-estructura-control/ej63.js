const year = 2000;

let championName = null;

switch (year) {
    case 2000:
        championName = "(Clausura) River Plate, (Apertura) Boca Juniors";
        break;
    case 2001:
        championName = "(Clausura) San Lorenzo de Almagro, (Apertura) Racing Club";
        break;
    case 2002:
        championName = "(Clausura) River Plate, (Apertura) Independiente";
        break;
    case 2003:
        championName = "(Clausura) River Plate, (Apertura) Boca Juniors";
        break;
    case 2004:
        championName = "(Clausura) River Plate, (Apertura) Newell´s Old Boys";
        break;
    case 2005:
        championName = "(Clausura) Vélez Sarsfield, (Apertura) Boca Juniors";
        break;
    case 2006:
        championName = "(Clausura) Boca Juniors, (Apertura) Estudiantes de La Plata";
        break;
    case 2007:
        championName = "(Clausura) San Lorenzo de Almagro, (Apertura) Lanús";
        break;
    case 2008:
        championName = "(Clausura) River Plate, (Apertura) Boca Juniors";
        break;
    case 2009:
        championName = "(Clausura) Vélez Sársfield, (Apertura) Banfield";
        break;
    case 2010:
        championName = "(Clausura) Argentinos Juniors, (Apertura) Estudiantes de La Plata";
        break;
    case 2011:
        championName = "(Clausura) Vélez Sársfield, (Apertura) Boca Juniors";
        break;
    case 2012:
        championName = "(Clausura) Arsenal F.C., (Torneo Inicial) Vélez Sarsfield";
        break;
    case 2013:
        championName = "(Torneo Final) Newells Old Boys, (Campeón del championNameato de Primera División 2012/13) Vélez Sarsfield, (Torneo Inicial) San Lorenzo de Almagro";
        break;
    case 2014:
        championName = "(Torneo Final) River Plate, (Torneo Inicial) Racing Club";
        break;
    case 2015:
        championName = "(championNameato de Primera División) Boca Juniors";
        break;
    case 2016:
        championName = "(championNameato de Primera División) Lanús";
        break;
    case 2017:
        championName = "(Campeón del championNameato de Primera División 2016/17) Boca Juniors";
        break;
    default:
        championName = null;
}

if(championName != null) {
    console.log(`En el año ${year} salió campeón: ${championName}`);
} else {
    console.log("Por favor ingrese un año entre 2000 y 2017");
    
}