let n1 = 3;
let n2 = 39;
let n3 = 8;
function calcularmayor (n1, n2, n3) {
    if (n1 > n2  && n1 > n3){
        return n1 + " es mayor " 
    }else if (n2 > n1 && n2 > n3){
        return n2 + " es mayor "
    }else if (n3 > n1 && n3 > n2){
        return n3 + " es mayor " 
    }
}
function calcularmenor (n1, n2, n3) {
    if ( n1 < n2 && n1 < n3 ){
        return n1 + " es menor " 
    } else if (n2 < n1 && n2 < n3) {
        return n2 +" es menor " 
    }else if (n3 < n2 && n3 < n1){
        return n3 + " es menor " 
    } 
}
function calcularintermedio (n1, n2, n3) {
if (n1 < n2 && n1 > n3){
    return n1 + " es menor: " + n2 + " pero es mayor que: " + n3;
}else if (n1 > n2 && n1 < n3){
    return n1 + " es mayor: " + n2 + " pero es menor que: " + n3;
}else if (n2 < n1 && n2 > n3){
    return n2 + " es menor: " + n1 + " pero es mayor que: " + n3;
}else if (n2 > n1 && n2 < n3 ){
    return n2 + " es mayor: " + n1 + " pero es menor que: " + n3;
} else if (n3 < n1 && n3 > n2){
    return n3 + " es menor: " + n1 + " pero es mayor que: " + n2;
}else if (n3 > n1 && n3 < n2){
    return n3 + " es mayor: " + n1 + " pero es menor que: " + n2;
}
}
console.log(calcularintermedio(n1,n2,n3));
console.log(calcularmenor(n1,n2,n3));
console.log(calcularmayor(n1,n2,n3));