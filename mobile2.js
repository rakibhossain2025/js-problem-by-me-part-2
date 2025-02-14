const phon =[
  {company: 'samsung', price: 10000, camera: '12mp', VideoColorSpace:'black'},
  {company: 'oppu', price: 20000, camera: '12mp', VideoColorSpace:'black'},
  {company: 'koliga', price: 100000, camera: '12mp', VideoColorSpace:'black'},
  {company: 'gamaibou', price: 35000, camera: '12mp', VideoColorSpace:'black'},
  {company: 'samsu', price: 45000, camera: '12mp', VideoColorSpace:'black'},
]

function komdame2(phon){
  let low =phon[0]
  for(const phone of phon){
    if(phone.price<low.price){
      low=phone
    }
  }
  return low
}
const kom = komdame2(phon)
console.log(kom)