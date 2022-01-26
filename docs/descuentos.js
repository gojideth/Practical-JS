// const precioOriginal = 140;
// const descuento = 50;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioDescuento,
//   precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice").value;
  const discountValue = document.getElementById("InputDiscount").value;
  const precioConDescuento = calcularPrecioConDescuento(
    inputPrice,
    discountValue
  );

  const resultP = document.getElementById("ResultP");

  resultP.innerText = "El precio con descuento es: " + precioConDescuento;
}
