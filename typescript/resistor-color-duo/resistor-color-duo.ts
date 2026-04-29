export function decodedValue(color:string[]) {
  if(!color)return;
  let string=`${colors.indexOf(color[0])}${colors.indexOf(color[1])}`
  let number=Number(string);

  return number;

}

const colors=['black','brown','red','orange','yellow','green','blue','violet','grey','white']