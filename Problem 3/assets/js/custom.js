var seconds = 00;
var milliseconds = 00;

var getMilliseconds = document.getElementById("milliseconds")
var getSeconds = document.getElementById("seconds")
var getStartButton = document.getElementById("button-start")
var getStopButton = document.getElementById("button-stop")
var getResetButton = document.getElementById("button-reset")
var Interval;
getStartButton.onclick = function(){
  Interval = setInterval(startTimer, 10)
}

getStopButton.onclick = function(){
    clearInterval(Interval)
    console.log("Stop")
}

getResetButton.onclick = function(){
    seconds = 00;
    milliseconds = 00;
    getMilliseconds.innerHTML = "0" + milliseconds;
    getSeconds.innerHTML = "0" + seconds;
    clearInterval(Interval)
}

function startTimer(){
    milliseconds++
  
   if(milliseconds <= 9){
       getMilliseconds.innerHTML = "0" + milliseconds;
   } 
   if(milliseconds > 9){
    getMilliseconds.innerHTML =  milliseconds;
} 
   if(milliseconds >= 99){
    
       seconds++;
       getSeconds.innerHTML = seconds;
       milliseconds = 00;
       getMilliseconds.innerHTML = "0" + 0;
   }
   if(seconds <= 9){
    getSeconds.innerHTML = "0" + seconds;
}
   if(seconds > 9){
    getSeconds.innerHTML = seconds;
}
}