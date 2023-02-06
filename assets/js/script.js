setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]') 
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsTime = currentDate.getSeconds() / 60
    const minutesTime = (secondsTime + currentDate.getMinutes()) / 60
    const hoursTime = (minutesTime + currentDate.getHours()) / 12

    setRotation(secondHand, secondsTime)
    setRotation(minuteHand, minutesTime)
    setRotation(hourHand, hoursTime)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()