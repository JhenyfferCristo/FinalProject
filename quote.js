const servicePrice=
{
land:10,
treat:0.003,
lawn:0.004,
grass:0.004,
mulching:0.001,
seeding:0.007,
aeration:0.003,
health:5,
trimming:40,
shrub:10,
weed:10,
removal:80,
}

const serviceTotals=
{
land:0,
treat:0,
lawn:0,
grass:0,
mulching:0,
seeding:0,
aeration:0,
health:0,
trimming:0,
shrub:0,
weed:0,
removal:0,
}

function onQuantityChange(value, id, decimals=2){
  const total=value*servicePrice[id]
  document.getElementById(`total-${id}`).innerHTML = `$${total.toFixed(decimals)}`
  serviceTotals[id]=total;

  calculateFinalPrice();
}

function calculateFinalPrice(){
  let finalPrice= 0;
  Object.keys(serviceTotals).forEach(function(key){
    finalPrice+=serviceTotals[key];
  })
  document.getElementById("total-final").innerHTML = `$${finalPrice.toFixed(3)}`
}
