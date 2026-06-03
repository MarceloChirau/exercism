class Stopwatch{
    intervalId;
  startingTime;
  timePassed;
  seconds;
  miliseconds;
  minutes;
  hours;
  state='ready';
  laps=[];
  currentLapArray=[];

get state(){
    return this.state;
}


   start(){
    if(this.state==='ready'){
        this.state='running';

        return   this.startingTime=new Date().getTime();    

    }

  }

  get   currentLap(){
    if(this.state==='ready'){
        return '00:00:00'
    }else{
        console.log('this is from currentLapArray:',this.currentLapArray)
       return  this.currentLapArray;

    }
}

get total(){
    if(this.state==='ready'){
        return '00:00:00'
    }else if(this.state==='stoped'){

    }
}
get previousLaps(){
if(this.state==='ready'|| this.state==='running' ){
    return this.laps=[];
}
}

stop(){
    this.state='stoped';
    this.timePassed=new Date().getTime()-this.startingTime;
    this.miliseconds=Math.floor(this.timePassed%1000/10);
    this.seconds=Math.floor((this.timePassed%60000)/1000);
    this.minutes=Math.floor(this.timePassed/60000);
    this.hours=Math.floor(this.timePassed/1440000);

    const displayMinutes=String(this.minutes).padStart(2,'0')
    const displaySeconds=String(this.seconds).padStart(2,'0')
    const displayMilliseconds=String(this.miliseconds).padStart(2,'0')
    const displayHours=String(this.hours).padStart(2,'0');
    
   
    console.log('this comes from the stop method:',`${displayHours}:${displayMinutes}:${displaySeconds}`)
    
return `${displayHours}:${displayMinutes}:${displaySeconds}`
   
    


}

advancedTime(time){
    const multipliers=[1440000,60000,1000]
const timeArray=time.split(':').map((el,index)=>{
    return el*multipliers[index];
})

const total=timeArray.reduce((acc,cur)=>acc+cur,0);
console.log('total:',total)
console.log('timeArray:',timeArray);

return new Promise((resolve)=>{
    setTimeout(()=>{
    const result= this.stop();
    console.log('result inside advancedTime:',result)
    this.currentLapArray.push(result);
    resolve(result);
   },total)

})



}



}

const myStopWatch=new Stopwatch();
myStopWatch.start()
myStopWatch.advancedTime('00:00:05')
myStopWatch.currentLap;

// console.log('currentLap:',myStopWatch.currentLap);
// console.log(myStopWatch.currentLap)
