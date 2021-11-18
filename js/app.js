const bodyElement = document.querySelector("body")

const clockElement = document.getElementById("clock")

const hourArrow = document.getElementById("hour")
const minuteArrow = document.getElementById("minute")
const secondArrow = document.getElementById("second")

const digitalClock = document.getElementById("digital-clock")
const digitalHours = document.getElementById("digital-hours")
const digitalMinutes = document.getElementById("digital-minutes")
const digitalSeconds = document.getElementById("digital-seconds")

const hourParts = 360 / 12
const minuteSecondsParts = 360 / 60

const calculateDegrees = (date) => {
    const timeValues = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }

    return {
        hour: hourParts * timeValues.hours,
        minute: minuteSecondsParts * timeValues.minutes,
        second: minuteSecondsParts * timeValues.seconds
    }
}

let isDigitalClockDisplayed = false;

const hasLeadingZero = (value) => {
    if (value < 10) {
        return `0${value}`
    }

    return value
}

const setDigitalClockDisplayStyle = (value) => {
    digitalClock.style.display = value
}

const setDigitalClockValues = (date) => {
    digitalHours.innerHTML = hasLeadingZero(date.getHours())
    digitalMinutes.innerHTML = hasLeadingZero(date.getMinutes())
    digitalSeconds.innerHTML = hasLeadingZero(date.getSeconds())

    setDigitalClockDisplayStyle("flex")
}

const setTime = () => {
    const date = new Date()
    const degrees = calculateDegrees(date)

    if (isDigitalClockDisplayed) {
        setDigitalClockValues(date)
    }

    hourArrow.style.transform = `rotate(${degrees.hour}deg)`
    minuteArrow.style.transform = `rotate(${degrees.minute}deg)`
    secondArrow.style.transform = `rotate(${degrees.second}deg)`
}

const displayDigitalClock = () => {
    isDigitalClockDisplayed = true
}

const hideDigitalClock = () => {
    isDigitalClockDisplayed = false
    setDigitalClockDisplayStyle("none")
}

clockElement.addEventListener("mouseenter", displayDigitalClock)
clockElement.addEventListener("mouseleave", hideDigitalClock)

setInterval(setTime, 100)