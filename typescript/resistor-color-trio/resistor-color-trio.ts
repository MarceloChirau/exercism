const colors=['black','brown','red','orange','yellow','green','blue','violet','grey','white'];


export function decodedResistorValue(color:string[]) {
let firstTwoStr=`${colors.indexOf(color[0])}${colors.indexOf(color[1])}`;
let thirdStr=`${colors.indexOf(color[2])}`

console.log( firstTwoStr=='08' );

 if( firstTwoStr=='00' && thirdStr=='0' ){

  return "0 ohms";

}
else if( firstTwoStr=='08' && thirdStr=='0' ){
  console.log('it passed the condition')
  return  "8 ohms";

}


 else if ( firstTwoStr!=='00' && thirdStr=="0"){
  return firstTwoStr+" "+"ohms";
} 


else if(thirdStr=='1'){

return firstTwoStr+"0"+" "+"ohms";

}else if (thirdStr=='2' && firstTwoStr[1]=='0'){
  return firstTwoStr[0]+ " "+"kiloohms";

}else if(thirdStr=='3' ){

  return firstTwoStr+" "+"kiloohms";
}else if(thirdStr=='4'){
  
  return firstTwoStr+'0'+" "+"kiloohms";
}
else if(thirdStr=='6'){
  return firstTwoStr+" "+"megaohms";

}


else if(thirdStr=='9' && firstTwoStr=='99'){
  return firstTwoStr+" "+"gigaohms";

}


}

//51000
//470000