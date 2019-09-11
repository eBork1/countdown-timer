var newYear = new Date('Jan 1, 2020 00:00:00').getTime();

var countdown = setInterval(function() {
		var currentTime = new Date().getTime();
    var timeLeft = newYear - currentTime;
    
    //conversions
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }
    
    if (days < 10) {
      days = "0" + days;
    }
  
    document.getElementById("time").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    


    if (timeLeft < 0) {
      clearInterval(countdown);
      document.getElementById("time").innerHTML = "HAPPY NEW YEAR!";
    }

}, 1000);
