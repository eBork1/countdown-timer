var newYear = new Date('Jan 1, 2020 00:00:00').getTime();

var countdown = setInterval(function() {
		var currentTime = new Date().getTime();
    var timeLeft = newYear - currentTime;
    
    //conversions
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 )) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('time').innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    
}, 1000);

if (timeLeft < 0) {
clearInterval(x);
document.getElementById("time").innerHTML = "HAPPY NEW YEAR!";
}
