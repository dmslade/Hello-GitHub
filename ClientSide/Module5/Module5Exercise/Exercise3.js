var textField = document.getElementById("showText");
    
    timeoutID = window.setTimeout("getTime();", 2000);
    function getTime() {
      CurrentDt = new Date();

      localTime = CurrentDt.toString();
      uniTime = CurrentDt.toGMTString();

      hours = CurrentDt.getHours(); //get the hours from the current time
      minutes = CurrentDt.getMinutes(); //get the minutes from the current time
      seconds = CurrentDt.getSeconds(); //get the seconds from the current time
      milliseconds = CurrentDt.getMilliseconds();

      //document.write("<p><strong>" + hours + ":" + minutes + ":" + seconds + ":" + millisceonds + "</strong></p>");
      textField.innerHTML = localTime + " <br> " + hours + ":" + minutes + ":" + seconds +  ":" + milliseconds;

      //variable to hold the string representation of the current date.
      timeoutID = window.setTimeout("getTime();", 2000);
    }
