function formatString(salaryString) {
  const salariesArray = salaryString.split("-");
  return salariesArray;
}

function getSalaries() {
  const salaryString = document.getElementById("Salaries").value;
  return salaryString;
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
  return number % 2 === 0;
}

function medianaSalarios(salarios) {
  const mitad = parseInt(salarios.length / 2);
  if (isOdd(mitad)) {
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

function obtainAndShow() {
  const arraySalarios = formatString(getSalaries());

  const sortedSalaries = sortArray(arraySalarios);

  const mediana = medianaSalarios(sortedSalaries);

  return mediana;
}

/**
 * *Mediana del top 10%
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

function writeMediana(numbers) {
  const priceBefore = numbers.priceBefore;
  const priceDiscount = numbers.priceDiscount;

  if (!Number.isNaN(priceBefore) && !Number.isNaN(priceDiscount)) {
    document.getElementById("product-card").style.visibility = "visible";

    writeInParagraph(formatPrices(priceBefore), "price-before");
    writeInParagraph(formatPrices(priceDiscount), "price-discount");
    showTotalDiscount(numbers.discountValue);
    showTotalSaved(numbers.priceDiscount, numbers.priceBefore);
    setVisibleImg();
  } else {
    window.alert("Ups, debes llenar los campos");
  }
}


function execute() {
  writePrices(obtainAndShow());
}
