function Par_Impar (entrada) {
    if (typeof (entrada) === "string") {
    return ("no es un dato valido");
} else {
    if (entrada % 2 === 0){
        return "Par"
    } else {
        if (entrada % 2 === 1){
            return "Impar"
        }   
    } if (entrada % 2.5 === 1.5){
        return "Impar"
    }
}
}
console.log (Par_Impar(5));
console.log (Par_Impar(6.5));
console.log (Par_Impar("texto"));
console.log (Par_Impar(8));