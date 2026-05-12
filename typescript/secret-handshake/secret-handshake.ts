
const instructionsArray:string[]=['wink','double blink','close your eyes','jump'];

export function commands(num:number):string[] {
  let binary :string[]=num.toString(2).split('');
  let handshake:string[]=[];
  let position:number=0;
for(let i=binary.length-1; i>=0; i--){
  if(binary[i]==='1'){
    if(position<4){
      handshake.push(instructionsArray[position]);
    }else if(position===4){
      handshake.reverse();
    }
  }
  position++;
}
  
console.log('handshake:',handshake)
  return handshake;
}

