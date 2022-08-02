let programa1 = 0;
let edad1 = 20;
let ayudas1 = 0;
let promedio1 = 5.0;
let salario1 = 1000000

function auxilio (programa1,edad1,ayudas1,promedio1){

    if (programa1 !== 1) {
        if (edad1 >= 18) {
            if (ayudas1 === 0) {
                if (promedio1 >= 3.0  && promedio1 <= 4.5) {
                    return "Su apoyo es de:" + salario1 * 0.50
                } else if (promedio1 >4.5){
                    return "Su apoyo es de:" + salario1 * 0.75
            }
        } else {
            return "no aplica"
        }
    } else {
        return "no aplica"
        }
    } else {
        return "no aplica"
    }
}
console. log (auxilio(programa1,edad1,ayudas1,promedio1));
