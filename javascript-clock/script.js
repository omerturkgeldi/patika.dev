var myClock = document.getElementById("myClock");
var myName = document.getElementById("myName");
let askName = prompt("Adınız: ");
myName.innerHTML = askName;


function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    var options = { weekday: 'long'};
    var dayOftheWeek = new Intl.DateTimeFormat('tr', options).format(date);
    let time = `${hours}:${minutes}:${seconds} ${dayOftheWeek}`;
    myClock.innerHTML = time;

}

setInterval(function()
{ 
    showTime();
}, 1000);

showTime(); 


