"use strict"

//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
  //variables

  /**
   * VARIABLES DE TODOS LOS BOTONES QUE HAY EN LA CALCULADORAS Y TODOS ESTAN SIENDO LLAMADOS POR SU ID
   */
  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
}

//Eventos de click
/**
 * le estan dando los valores correspondiente a cada boton de la calculadora en este cado son los nummeron que contine cada boton
 */
uno.onclick = function(e){
  resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
  resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
  resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
  resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
  resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
  resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
  resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
  resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
  resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
  resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
  resetear();
}

/**
 * le estan dando el valor de operador a los botones que contienen los simbolos aricmeticos  
 */
suma.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
}
resta.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
}
multiplicacion.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "*";
  limpiar();
}
division.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
}
igual.onclick = function(e){
  operandob = resultado.textContent;
  resolver();
}

function limpiar(){
  resultado.textContent = "";
}

function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
/**
 * Desarrollo logico de las funciones que va a tener la calculadora que sera sumar, restar, multiplicar y dividir
 */

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}

/**
 * declaro dos constantes para referirme al icono y al body y asi hacer un evento click que cuando le den click al icono quita la clase que tiene y la cambie por otra para que llame a otro icono referenciando al dark mode, despues utilizo un condicional que pregundar que si esta en modo por defecto ponga el body de color blanco y las letras negras y que la transicion sea de dos segundos y si no que ponga el body de color negro y las letras blanca 
 */

//DARK MODE

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const contenedor = document.querySelector('table')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    console.log(toggle)
    if(this.classList.toggle('bi-brightness-high-fill')){
        contenedor.style.background = '#007fd3';
        contenedor.style.color = 'black';
        contenedor.style.transition = '2s';
    }else{
        contenedor.style.background = 'black';
        contenedor.style.color = 'white';
        contenedor.style.transition = '2s';
    }
});
