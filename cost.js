const products = [
  { company: "sampu", price: 1 },
  { company: "mensampu", price: 2 },
  { company: "hairconditionar", price: 4 },
  { company: "mashine", price: 6 },
];
function totalsCost(items) {
  let total = 0;
  for (const item of items) {
    total = item.price + total;
  }
  return total;
}
const totalTaka =totalsCost(products)
console.log(totalTaka);

const productt = [
  { company: "sampu", price: 5, quantity: 1 },
  { company: "mensampu", price: 1200, quantity: 5 },
  { company: "hairconditionar", price: 4500, quantity: 0 },
  { company: "mashine", price: 1600, quantity: 10 },
];

function totalsCost2(products) {
  let total = 0;
  for (const productt of products) {
    const totalprice = productt.quantity * productt.price;
    total = totalprice + total;
  }
  return total;
}
const mutTaka = totalsCost2(productt);
console.log(mutTaka);
