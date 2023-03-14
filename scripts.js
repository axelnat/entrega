// document.write('hola, un saludo con javascript')
/*
var val1 = prompt('ingrese valor uno  ')
var val2 = prompt('ingrese valor dos ')

if(val1 < val2){
    document.write('el mayor es' + ' ' + val2)

}else {
    document.write('el mayor es' + ' ' + val1)
}
*/


//var val1 = prompt('ingrese la nota de cursada  ');
/*
if(val1 == 10 ) {
   document.write('Tu nota es excelente');
} else {
    if (val1 <10 && val1 >= 7){ 
        document.write('Aprobastes muy bien');
    }else{
        if (val1 <7 && val1 >= 4){
            document.write('Aprobastes');
        }else{
            document.write('Desaprobastes');
        }
    }
}

*/

//var i = 1;
//for (i= 0; i <= 10; i++) {
    //alert(i);}

/*
while (i != 0) {
    i = prompt('Ingrese un valor o presione "0" para salir');
    document.write(i + ' - ');
}

function convertir () {
    var pesos = document.getElementById("edadInput").value;
    dolar = 353;
    resultado = dolar * pesos;

    //console.log(document.getElementById("edadInput").value);
   
    document.getElementById("resultado").innerHTML = "Resultado: $" + resultado.toFixed(2);

}
var num = 0
var num2 = 0
  /*const sumar2 = function(num, num2) {
    var total = num + num2;
    return toral;
}
const resta = function (num, num2){
    var = total = num - num2;
    return total;
}
var num = 0
var num2 = 0
var num3 = 0
var total = resta (total , num3);
console.log(total);
total = 


console.log(sumar2(num, num2))
function alerta () {
    alert ('entra')
}

function salario(){
    var salario = document.getElementById("").value;
    var aumento = 0;

    if (salario > 300000) {
        aumento = salario * 0.1;
    } else {
        aumento = salario * 0.2;
    }
}
*/

let operadorA = '';
let operadorB = '';
let signo = '';
let band = false
function boton(numeros){

    let valor = document.getElementById("operadorA") 

    //console.log(valor)
    valor.value = valor.value + numeros
    //!band <<>> band == false
    if (!band){ 
        operadorA = operadorA + numeros
    } else {
        operadorB = operadorB + numeros
     
    }

}
function operacion(oper){
    signo = oper
    let valor = document.getElementById("operadorA")
    valor.value = valor.value.toString() + signo.toString() ;
    //valor.value = ''
    band = true

}
function resultado(){
    //console.log(operadorA)
    //console.log(signo)
    var total = 0
    //let valor = document.getElementById("operadorA")
    //operadorB = valor.value
    
    if (band){
        switch (signo) {
            case '+': total = parseFloat(operadorA) + parseFloat(operadorB)              
                break;
            case '-': total = parseFloat(operadorA) - parseFloat(operadorB)               
                break;
            case '*': total = parseFloat(operadorA) * parseFloat(operadorB)              
                break;
            case '/': total = parseFloat(operadorA) / parseFloat(operadorB)              
                break;
        
    
            } 
            let valor = document.getElementById("operadorB")
            valor.value = total
    } else {
        alert ('seleccione una operacion')
    }

    
}

function borrar (){
    let valor1 = document.getElementById("operadorA")
    let valor2 = document.getElementById("operadorB")
    valor1.value = ''
    valor2.value = ''
    operadorA = ''
    operadorB = ''
    signo = ''
    band = false
}




/*function sumar(operadorA, operadorB)
sumar = operadorA + operadorB


    var sumar = 
    var restar 
    var multiplicar
    var dividir 
    
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    var resultado = document.getElementById("resultado");
    
    
        sumar.onclick = function(e){
            botonDeOperacion("+") 
        }
        restar.onclick = function(e) {
            botonDeOperacion("-");
          };
        multiplicar.onclick = function(e) {
            botonDeOperacion("*");
          };
        dividir.onclick = function(e) {
            botonDeOperacion("/");
          };
        resultado.onclick = function(e) {
            operadorPulsado = false;
            resultado();
          };*/
