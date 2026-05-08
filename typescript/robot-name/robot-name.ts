export class Robot {
private  static alphabet:string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 private static usedNames= new Set<string>();
 private _name: string | null=null;



  public get name(): string {
    if(this._name){
     return this._name; }
    let newName:string;
    do{
    newName=this.generateRandomName(); }
    while(Robot.usedNames.has(newName));
    // save it to the robot and the Master List
    this._name=newName;
    Robot.usedNames.add(this._name);
    return this._name;


  } 

  public resetName(): void {
this._name=null;
  }

  public static releaseNames(): void {
Robot.usedNames.clear();
  }
private generateRandomName(): string{
  const randomOne = Math.floor(Math.random() * 26);
   const randomTwo = Math.floor(Math.random() * 26);
    const randomNumber = Math.floor(Math.random() * 900) + 100;

    const firstLetter = Robot.alphabet[randomOne];
    const secondLetter = Robot.alphabet[randomTwo];
    
    return `${firstLetter}${secondLetter}${randomNumber}`;    }

}
 

