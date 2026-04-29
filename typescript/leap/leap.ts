


export function isLeap(number:number):Boolean {
if(number%4===0 && number%100!==0){
  return true
}else if(number%4===0 && number%100===0 && number%400===0){
  return true
}else{
  return false
}

}
