function costOfGest(quantityOfTable, quantityOfChair, quantityOfBed){
  const chairWood =5;
  const tableWood =7;
  const bedWood =52;
  const chairTotalWood = chairWood* quantityOfChair;
  const tableTotalWood = tableWood* quantityOfTable;
  const bedTotalWood = bedWood* quantityOfBed;
  const totalCost = chairTotalWood+tableTotalWood+bedTotalWood;
  return totalCost
}
const quantity =costOfGest(4,7,4)
console.log(quantity)