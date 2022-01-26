function getTime() {
    CurrentDt = new Date();

    localTime = CurrentDt.toString();
    uniTime = CurrentDt.toGMTString();


    document.write("<p><strong>Local time:</strong> " + localTime + "</p>");
    document.write("<p><strong>Univensal time:</strong> " + uniTime + "</p>");

    hours = CurrentDt.getHours(); //get the hours from the current time
    minutes = CurrentDt.getMinutes(); //get the minutes from the current time
    seconds = CurrentDt.getSeconds(); //get the seconds from the current time
    millisceonds = CurrentDt.getMilliseconds();

    document.write("<p><strong>" + hours + ":" + minutes + ":" + seconds + ":" + millisceonds + "</strong></p>");

    //variable to hold the string representation of the current date.
    return CurrentDt.toString();
}