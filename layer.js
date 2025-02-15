// regular discount 
function discount(quantity){
  if(quantity<=100){
    const total = quantity *100;
    return total
  }
  else if(quantity <=200){
    const total =quantity *90;
    return total
  }
  else {
    const total = quantity*70
    return total
  }
}
console.log(discount(201))


// layer discount 
function layerDiscount(items){
  const frist100 = 100;
  const above100 = 90;
  const above200 = 70;
  if(items <=100){
    const under100 = frist100* items;
    const total= under100;
    return total;
  }
  else if(items <=200){
    const under100total = frist100* 100;
    const under200remaining = items - 100;
    const totalRemainingPrice = under200remaining * above100;
    const total = under100total + totalRemainingPrice;
    return total
  }
  else{
    const under100total = frist100 *100;
    const under200total = above100 *100;
    const underRemainingTotal = items -200;
    const totalUpTo300 = underRemainingTotal *above200;
    const total = totalUpTo300 + under100total+ under200total;
    return total
  }
}
console.log(layerDiscount(201))