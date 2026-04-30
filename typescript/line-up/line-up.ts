




export function format(name: string, number: number): string {
let stringNum=number.toString();
let lastDigitStr=stringNum.slice(-1);
let lastTwoDigitsStr=stringNum.slice(-2);

switch(true){
  case (lastDigitStr==="1" && lastTwoDigitsStr!=="11"):
    return `${name}, you are the ${number}st customer we serve today. Thank you!`
    
    case (lastDigitStr==='2' && lastTwoDigitsStr!=='12'):
      return `${name}, you are the ${number}nd customer we serve today. Thank you!`
      
      case (lastDigitStr==='3' && lastTwoDigitsStr!=='13'):
        return `${name}, you are the ${number}rd customer we serve today. Thank you!`

        default:
          return `${name}, you are the ${number}th customer we serve today. Thank you!`
}

}
