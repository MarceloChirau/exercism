export function toRna(dna:string):string {
if(dna.includes('X')|| dna.includes('U')){
  throw new Error( 'Invalid input DNA.');
}
const arr=dna.split('');
const replaced=arr.map(char=>{
  if(char==="G"){
    console.log('array has G')
    // char.replace(char,'C')
    return 'C';
  }else if(char==="C"){
    console.log('array has C')
    // char.replace(char,"G")
    return 'G';
  }else if(char==="T"){
    console.log('array has T')
    // char.replace(char,"A");
    return 'A';
  }else if(char==="A"){
    console.log('array has A')
    // char.replace(char,"U")
    return 'U';
  }else{
throw new Error( 'Invalid input DNA.');
  }
})
let final=replaced.join('');
console.log('final:',final)
console.log('replaced:',replaced)
return final;
  

}
 
