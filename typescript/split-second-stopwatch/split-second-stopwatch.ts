export class SplitSecondStopwatch {
    public  status:'ready'| 'running'| 'stopped' ='ready';
public prevLaps:string[]=[];
  public  totalSeconds:number=0;
public currentLapSeconds:number=0;

  public get state(): string {
    switch(this.status){
      case "ready":
       return 'ready';
        break;
        case 'running':
       return   'running';
          break;
          case 'stopped':
         return   'stopped';
            break
    }

  }

  public get currentLap(): string{
    // console.log('currentLap received this.totalSeconds:',this.currentLapSeconds)

    let hours:string=String(Math.floor(this.currentLapSeconds/3600)).padStart(2,'0');

    let minutes:string=Math.floor((this.currentLapSeconds%3600)/60).toString().padStart(2,'0');
    // console.log('and it converted into minutes:',minutes)

    let seconds:string=String(Math.floor(this.currentLapSeconds%60)).padStart(2,'0');
    // console.log('currentLap:',`${hours}:${minutes}:${seconds}`)
    return `${hours}:${minutes}:${seconds}`

  }

  public get total(): string {
let hours:string=String(Math.floor(this.totalSeconds/3600)).padStart(2,'0');
let minutes:string=Math.floor((this.totalSeconds%3600)/60).toString().padStart(2,'0');

let seconds:string=String(this.totalSeconds%60).padStart(2,'0');
// console.log('total:',`${hours}:${minutes}:${seconds}`)
return `${hours}:${minutes}:${seconds}`

  }

  public get previousLaps(): string[] {
    console.log('previews laps array from previousLaps getter:',this.prevLaps)
return this.prevLaps;
  }

  public start(): string{
    if(this.status==='running'){
      throw new Error('cannot start an already running stopwatch')
    }if(this.status==='stopped'){
      this.status='running'
    }
return this.status='running'
  }

  public stop(): string {
    if(this.status==='ready' || this.status==='stopped'){
      throw new Error( 'cannot stop a stopwatch that is not running')
    }
    return this.status='stopped'
  }

  public lap(): string[] {
    if(this.status==='ready' ||  this.status==='stopped'){
      throw new Error('cannot lap a stopwatch that is not running')
    }
    this.prevLaps.push(this.currentLap);
    this.currentLapSeconds=0;
    console.log('previews laps array: form lap method',this.prevLaps)

return this.prevLaps;
  }

  public reset(): string{
    if(this.status==='ready' || this.status==='running'){
      throw new Error( 'cannot reset a stopwatch that is not stopped')
    }
    this.currentLapSeconds=0;
    this.prevLaps=[];
    return this.status='ready';
  }

  public advanceTime(duration: string):void{
    if(this.state==='ready'|| this.state==='stopped'){
      return 
    }else if(this.state==='running'){
      const multiplyers:number[]=[3600,60,1]
      const secondsTotal:number=duration.split(':').map((el,index)=>{
return Number(el)*multiplyers[index]
      }).reduce((acc,cur)=>acc+cur,0)

      // console.log('secondsTotal:',secondsTotal)
      this.totalSeconds+=secondsTotal;
      this.currentLapSeconds+=secondsTotal;


  

    }

  }
}
