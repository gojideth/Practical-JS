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

function evaluateDiscountCoupon() {
  const valueSelected = parseInt(document.getElementById("cupons").value);
  var returnDiscount;
  switch (valueSelected) {
    case 0:
      returnDiscount = 0;
      break;
    case 10:
      returnDiscount = 10;
      break;
    case 20:
      returnDiscount = 20;
      break;
    case 30:
      returnDiscount = 30;
      break;
    case 40:
      returnDiscount = 40;
      break;
    default:
      returnDiscount = -11111111;
  }
  return returnDiscount;
}
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice").value;
  var discountValue = parseInt(document.getElementById("InputDiscount").value);

  const coupon = evaluateDiscountCoupon();
  if (coupon != 0) {
    discountValue += coupon;
  }

  const precioConDescuento = calcularPrecioConDescuento(
    inputPrice,
    discountValue
  );

  let prices = {
    priceBefore: parseInt(inputPrice),
    priceDiscount: precioConDescuento,
    discountValue: discountValue,
  };

  return prices;
}

function writePrices(prices) {
  const priceBefore = prices.priceBefore;
  const priceDiscount = prices.priceDiscount;

  if (!Number.isNaN(priceBefore) && !Number.isNaN(priceDiscount)) {
    document.getElementById("product-card").style.visibility = "visible";

    writeInParagraph(formatPrices(priceBefore), "price-before");
    writeInParagraph(formatPrices(priceDiscount), "price-discount");
    showTotalDiscount(prices.discountValue);
    showTotalSaved(prices.priceDiscount, prices.priceBefore);
    setVisibleImg();
  } else {
    window.alert("Ups, debes llenar los campos");
  }
}

function writeInParagraph(text, paragraphId) {
  const auxP = document.getElementById(paragraphId);
  auxP.innerText = " " + text;
}

function setVisibleImg() {
  document.getElementById("product-image").style.visibility = "visible";
}

function showTotalDiscount(totalDiscount) {
  const totalDiscountSum = parseInt(totalDiscount);
  writeInParagraph(
    "Descuento total\n" + totalDiscountSum + "%",
    "total-discount"
  );
}

function showTotalSaved(saved, initialPrice) {
  const savedMoney = parseInt(saved);
  const originalPrice = parseInt(initialPrice);
  const finalPrice = formatPrices(originalPrice - savedMoney);
  writeInParagraph("Total ahorrado: " + finalPrice, "total-saved");
}

function formatPrices(priceToFormat) {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return dollarUSLocale.format(priceToFormat) + "$";
}
