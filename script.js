let currentTime = new Date()
let monthNum = currentTime.getMonth()
let day = currentTime.getDay()+3
let year = currentTime.getFullYear()
let hour = currentTime.getHours()
let min = currentTime.getMinutes()

let am = "AM"

var monthWord = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


if (hour >= 12) {
  am = "PM"
} else {
  am = "AM"
}

if (hour > 12) {
  hour = hour - 12
}

if (min < 10) {
  min = "0" + min
}

document.getElementById("Date").innerHTML = monthWord[monthNum] + " " + day + ", " + year + " " + hour + ":" + min + am
