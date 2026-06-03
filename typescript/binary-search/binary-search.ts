export function find(haystack: number[], needle: number): number | never {
let sorted:number[]=haystack.sort((a,b)=>a-b);
let found:number=sorted.findIndex((el)=>el===needle)
if(found===-1){
  throw new Error('Value not in array')
  
}

return found
}
