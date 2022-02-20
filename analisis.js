function formatString(salaryString) {

  const salariesArray = salaryString.split("-");
  
  const condicion = (number)=> number!== "" && !Number.isNaN(number);

  const arrayCleaned = salariesArray.filter(condicion);
  

  return arrayCleaned;
}

function getSalaries() {
  const salaryString = document.getElementById("Salaries").value;
  
}

function evaluateString(string){
  if(string!== "" && string!== " "){
    console.log(string);
    return true;

  }else{
    
    return false;
  }
}

function formatArray() {
  const formatedInArray = formatString(getSalaries());
  return formatedInArray;
}

function sortArray(array) {
  return array.sort((salaryA, salaryB) => salaryA - salaryB);
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
function isOdd(number) {
  return number % 2 == 0;
}

function medianaSalarios(salarios) {
  const mitad = parseInt(salarios.length / 2);
  if (salarios.length == 1) {
    return salarios[0];
  } else 
  if (isOdd(salarios.length)) {
    const mediana = calcularMediaAritmetica([
      parseInt(salarios[mitad]),
      parseInt(salarios[mitad - 1]),
    ]);
    return mediana;
  } else {
    const medianaImpar = salarios[mitad];
    return medianaImpar;
  }
}


function tenMedian() {
  const arraySalarios = formatString(getSalaries());

  const sortedSalaries = sortArray(arraySalarios);

  const spliceStart = (sortedSalaries.length * 90) / 100;
  
  const spliceCount = Math.ceil(sortedSalaries.length - spliceStart);
  
  const salaryTop10 = sortedSalaries.splice(spliceStart, spliceCount);
  
  const median10 = medianaSalarios(salaryTop10);
  
  
  writeStringArray(median10, "median-top");
}

function writeStringArray(textToWrite, id) {
  writeInParagraph(textToWrite, id);
}

function obtainAndShow() {

  const arraySalarios = formatString(getSalaries());

  const sortedSalaries = sortArray(arraySalarios);

  const mediana = medianaSalarios(sortedSalaries);

  writeStringArray(mediana, "median-normal");
}

function executeShow() {
  const arraySalarios = formatString(getSalaries());

  const sortedSalaries = sortArray(arraySalarios);

  const stringSalaries = sortedSalaries.toString();

  const formattedString = stringSalaries.replace(/,/g, " , ");

  writeStringArray(formattedString, "array-string");

  tenMedian(sortedSalaries);

  document.getElementById("product-card").style.visibility = "visible";
}

/**
 * *Mediana del top 10%
 * !Deprecated without parameters.
 */

function top10Mediana() {
  const salariosCol = colombia.map(function (person) {
    return person.salary;
  });
  const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
    return salaryA - salaryB;
  });
  const spliceStart = (salariosColSorted.length * 90) / 100;

  const spliceCount = salariosColSorted.length - spliceStart;

  const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

  const mediana10Col = medianaSalarios(salariosColTop10);

  console.log(medianaSalariosCol, mediana10Col);
}


function evaluateAndExecute(){
  if(evaluateString(getSalaries())){
    executeShow();
    obtainAndShow();
  }else{
    window.alert("Escribe tus datos!");
  }
}