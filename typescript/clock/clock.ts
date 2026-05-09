export class Clock {
  private minutes_per_day:number
  private total_minutes_raw:number
  private total_minutes_normalized:number

  constructor( public hour: number, public minute:number=0) {
    this.minutes_per_day=24*60;
    this.total_minutes_raw=(this.hour*60)+this.minute;
    // to keep it allways positive number
    this.total_minutes_normalized=((this.total_minutes_raw % this.minutes_per_day)+this.minutes_per_day)%this.minutes_per_day;
    this.hour=Math.floor(this.total_minutes_normalized/60);
    this.minute=this.total_minutes_normalized%60;
  }

  public toString(): string {
    let time:string;
    let hourStr:string=this.hour.toString();
    hourStr=hourStr.length===1 ? hourStr.padStart(2,'0') : hourStr;
    let minuteStr:string=this.minute.toString();
    minuteStr=minuteStr.length===1 ? minuteStr.padStart(2,"0") : minuteStr;

    time=`${hourStr}:${minuteStr}`;
    return time;

  }

  public plus(minutes: number): string {
    let new_total_minutes_raw:number=(this.hour*60)+this.minute+minutes;

    this.total_minutes_normalized=((new_total_minutes_raw % this.minutes_per_day)+this.minutes_per_day)%this.minutes_per_day;
    this.hour=Math.floor(this.total_minutes_normalized/60);
    this.minute=this.total_minutes_normalized%60;
     let time:string;
     let  hourStr:string=this.hour.toString().padStart(2,'0')
     let  minuteStr:string=this.minute.toString().padStart(2,'0')
     time=`${hourStr}:${minuteStr}`;
return time;
  }

  public minus(minutes: number): string {
    let new_total_minutes_raw:number=(this.hour*60)+this.minute-minutes;

    this.total_minutes_normalized=((new_total_minutes_raw % this.minutes_per_day)+this.minutes_per_day)%this.minutes_per_day;
    this.hour=Math.floor(this.total_minutes_normalized/60);
    this.minute=this.total_minutes_normalized%60;
     let time:string;
     let  hourStr:string=this.hour.toString().padStart(2,'0')
     let  minuteStr:string=this.minute.toString().padStart(2,'0')
     time=`${hourStr}:${minuteStr}`;
return time;
  }

  public equals(other: Clock): boolean {
return this.hour===other.hour && this.minute===other.minute;
  }
}
