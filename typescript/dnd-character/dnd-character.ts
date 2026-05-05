export class DnDCharacter {
  readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly intelligence: number;
  readonly wisdom: number;
  readonly charisma: number;
  readonly hitpoints: number;
constructor(){
  this.strength=DnDCharacter.generateAbilityScore();
  this.dexterity=DnDCharacter.generateAbilityScore();
  this.constitution=DnDCharacter.generateAbilityScore();
  this.intelligence=DnDCharacter.generateAbilityScore();
  this.wisdom=DnDCharacter.generateAbilityScore();
  this.charisma=DnDCharacter.generateAbilityScore();
  this.hitpoints=10+DnDCharacter.getModifierFor(this.constitution);
}

  public static generateAbilityScore():number {
    let sum:number=0;
    // for(let i=0; i<=5; i++){
      const dice_one=Math.floor((Math.random()*6)+1);
      const dice_two=Math.floor((Math.random()*6)+1);
      const dice_three=Math.floor((Math.random()*6)+1);
      const dice_four=Math.floor((Math.random()*6)+1);
let arr=[dice_one,dice_two,dice_three,dice_four];
let min=Math.min(...arr);
let filtered=arr.filter(num=>num!==min);
 sum=filtered.reduce((acc,cur)=>{return acc+cur},0)

//  return sum
// }
return sum;

  }

  public static getModifierFor(abilityValue: number): number {

return Math.floor((abilityValue-10)/2);



  }
}
  