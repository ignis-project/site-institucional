
function calculateBudget() {
  const meters2 = document.getElementById('meters2').value

  // PRICES R$
  const priceArduino = 50
  const priceSensor = 20.50
  const priceRepeater = 300.79
  const areaDelimitation = 500


  let preco = (Math.round((meters2 / areaDelimitation) * 4) * (priceSensor + priceArduino)) + ((Math.round((meters2 / areaDelimitation)) * priceRepeater));

  let total = preco + (preco * 0.3);

  // const areas = meters2 / areaDelimitation <= 500 ? 1 : meters2 / areaDelimitation;
  // const numSensors = 4
  // const stonks = 0.3

  // const priceEquipment = areas * (priceArduino + priceSensor) * numSensors + (areas * priceRepeater)
  // let total = priceEquipment + priceEquipment * stonks


  document.getElementById('total').value = `Total: R$ ${total.toFixed(2).replace(".", ",")}`
}