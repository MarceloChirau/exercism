export function isPangram(str:string):boolean {
const lowercaseStr=str.trim().toLowerCase();
const alphabet='abcdefghijklmnopqrstuvwxyz'.split('');
return alphabet.every(letter=>lowercaseStr.includes(letter));
}
