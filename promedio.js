function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularMediaGeométrica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 1, nuevoElemento) {
    return valorAcumulado * nuevoElemento;
  });
  console.log(sumaLista);

  return Math.pow(sumaLista, 1 / lista.length);
}
