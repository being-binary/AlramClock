let timediv = document.getElementsByClassName("time")[0]

// console.log(`${time.getHours}:${time.getMinutes}:${time.getSeconds}`)

let time
let alarmTime
let audio = new Audio() 
audio.src = "" //audio.play(),audio.pause()
let alarm
setInterval(()=>{
    time = new Date()
    timediv.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
},1000)

function setAlarm(value){
    alarmTime = new Date(value)
    console.log(alarmTime)
}

function start(){
    let setAlarm = alarmTime - time
    if(!setAlarm){
        return alert("Please Select a time")
    }
    console.log(setAlarm)
    alarm = setTimeout(()=>{
        console.log("hello there")
    },setAlarm)
    alert("Alarm started")
}

function stop(){
    clearTimeout(alarm)
    alert("Alarm stopped")
}

