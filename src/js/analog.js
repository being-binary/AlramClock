let secHand = document.getElementsByClassName("second")[0]
let minHand = document.getElementsByClassName("minute")[0]
let hourHand = document.getElementsByClassName("hour")[0]

setInterval(()=>{
    let time = new Date()
    let secIndeg = time.getSeconds()*6
    secHand.style.transform = `rotate(${secIndeg}deg)`
    let minIndeg = time.getMinutes()*6
    minHand.style.transform = `rotate(${minIndeg}deg)`
    let hourIndeg = time.getHours()*30 + minIndeg/12
    hourHand.style.transform = `rotate(${hourIndeg}deg)`
    console.log(`rotate(${secIndeg}deg)`)
},1000)