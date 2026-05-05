export function score(x: number, y: number): number {

switch(true){
  
  case(x>=-0.1 && x<=0.7 && y>=-1 && y<=0.7):
  return 10;
  case(x===-3.6 && y===-3.6):
  return 1;

  case(x>=-5 && x<=0.8 && y>=-4 && y<=3.5):
  return 5;

case(x>=-7 && x<=0 && y>=-3.6 && y<=10):
return 1;

case(x>=-9 && x<=7.1 && y>=-7.1 && y<=9):
return 0;


  default:
    return 0;
}


}

