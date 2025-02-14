const number =[212,21,21,5,646,85,131,235]
function teleost(numbers){
  let max = number[0]
  for(const num of numbers){
    if(num>max){
      max=num
    }
  }
  return max
}
const max = teleost(number)
console.log('max number',max)