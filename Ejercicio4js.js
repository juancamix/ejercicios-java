let cuposasignados = 5;
let edad = 19;
let kilometro =1;
let cuposdisponibles = 15;

function jornada (edad,kilometro,cuposdisponibles){
    if (cuposdisponibles <= cuposasignados) {
        return "No hay cupos"
    }
                if (edad < 18  && kilometro > 10) {
                    return "Su jornada es diurna"
                } if (edad < 18  && kilometro < 10) {
                        return "Su jornada es diurna"
                }else if (edad >= 18 && kilometro > 10){
                    return "Su jornada es en la tarde"}
    else { (edad >= 18 && kilometro < 10)}
    return "Su jornada es nocturna"
    }
console.log(jornada(edad,kilometro,cuposdisponibles,cuposasignados));