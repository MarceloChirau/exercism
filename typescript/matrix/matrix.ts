export class Matrix {
  public str:string
  constructor(str:string) {
    this.str=str;
  }

  get rows(): number[][]  {

switch(true){
  case(this.str.length===1):
 const split=this.str.split('');
 const number=split.map(num=>Number(num));
 return Array(number);


  case(this.str.length>1):
  const splitted=this.str.split('\n');
  const gaps=splitted.map(split=>split.split(' '))
  const result=gaps.map(arr=>arr.map(num=>Number(num)))
  return result;

default:
  return Array(Array(Number(this.str)));

}

  }

  get columns():number[] | number[][] {
    let number;
if(this.str.length===1){
   const split=this.str.split('');
  number=split.map(num=>Number(num));
 return Array(number);
}else{
  const splittedAtSpace=this.str.split('\n').map(num=>num.split(' '));
number=splittedAtSpace[0].map((_,i)=>{
  return splittedAtSpace.map(ar=>Number(ar[i]))
})
}

return number
  
}

}

