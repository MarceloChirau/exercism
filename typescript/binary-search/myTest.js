const numbers=[9,2,5,19,1];
const sorted=numbers.sort((a,b)=>a-b)
let num=5;
const found=sorted.findIndex((el)=>el===num);
console.log(found)