const sec = document.querySelector('.seconds'),
      min = document.querySelector('.minutes'),
      hour = document.querySelector('.hours'),
      day = document.querySelector('.days');

const addZero = (number) =>(number>=10? number: '0' + number)
const showTime = () =>{
    let now = new Date(),
        newYear = new Date(now.getFullYear()+1, 0, 1),
        deysNumber = (newYear - now)/(1000*60*60*24),
        days = Math.floor(deysNumber),
        hours =Math.floor ((newYear - now)/(1000*60*60)-Math.floor(deysNumber)*24),
        minutes = Math.floor ((newYear - now)/(1000*60)-Math.floor(deysNumber)*24*60 - hours*60),
        seconds = Math.floor ((newYear - now)/(1000)-Math.floor(deysNumber)*24*60*60 - hours*60*60 -minutes*60 )
sec.innerHTML = addZero(seconds)
min.innerHTML = addZero(minutes)
hour.innerHTML = addZero(hours)
day.innerHTML = addZero(days)
setTimeout(showTime,1000)
}
showTime()