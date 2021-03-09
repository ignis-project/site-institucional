
function calculateBudget() {
  const meters2 = document.getElementById('meters2').value

  // PRICES R$
  const priceArduino = 50
  const priceSensor = 20
  const priceRepeater = 300

  const areaDelimitation = 500
  const areas = Math.trunc(meters2 / areaDelimitation)
  const numSensors = 4
  const stonks = 0.3

  const priceEquipment = areas * (priceArduino + priceSensor) * numSensors + (areas * priceRepeater)
  const total = priceEquipment + priceEquipment * stonks

  document.getElementById('total').value = total
}