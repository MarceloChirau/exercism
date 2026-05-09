let hour='11';
hour=hour.length===1 ? hour.padStart(2,'0') : hour;
let minute='11';
minute=minute.length===1 ? minute.padStart(2,'0') : minute

let time;
time=`${hour}:${minute}`;

// console.log('time:',time)
console.log('hour and minute equal ?:',hour===minute)

