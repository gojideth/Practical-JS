console.log("Hello world!");
console.group("Cuadrado");
// //Código del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();
//Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triángulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm."
);

const alturaTriangulo = 5.5;
console.log("Altura triángulo es: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Circulo

console.group("Círculo");

const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return PI * (radio * radio);
}

console.groupEnd();

//Aqui interactucamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = areaCuadrado(value);
  alert(perimetro);
}

function calcularAlturaIsoceles() {
  const ladoTrian1 = document.getElementById("InputTriangulo1").value;
  const ladoTrian2 = document.getElementById("InputTriangulo2").value;
  const ladoTrianBase = document.getElementById("InputTrianguloBase").value;
  if (revisarIsoceles(ladoTrian1, ladoTrian2, ladoTrianBase)) {
    var altura = Math.sqrt(
      ladoTrian1 * ladoTrian1 - (ladoTrianBase * ladoTrianBase) / 4
    );
    alert(altura);
  } else {
    alert("Ups, deben haber solo dos lados iguales");
  }
}
function obtenerAreaTriangulo() {
  const base = document.getElementById("InputTrianguloBase").value;
  const altura = calcularAlturaIsoceles();

  const area = areaTriangulo(base, altura);
  return area;
}

function revisarIsoceles(lado1, lado2, base) {
  if (lado1 == lado2 && lado1 != base && lado2 != base) {
    return true;
  } else {
    return false;
  }
}
