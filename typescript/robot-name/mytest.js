const testStr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const min=100;
const max=999;
let randomone=Math.floor((Math.random()*26));
let randomtwo=Math.floor((Math.random()*26));
let randomNumber=Math.floor(Math.random()*(max-min+1))+min;


const firstletter=testStr.substring(randomone,randomone+1);
const secondletter=testStr.substring(randomtwo,randomtwo+1);
const robotName=firstletter.concat(secondletter,randomNumber);



// console.log("firstletter:",firstletter)
// console.log("secondletter:",secondletter)
// console.log("randmonNumber:",randomNumber)
// console.log("robotname:",robotName)
// console.log("robotname type:", typeof robotName)

const arr=['2','2','3',true,2,3,'marcelo'];
const clearArr=new Set(arr);
console.log(clearArr.add('5'));
console.log(clearArr);
