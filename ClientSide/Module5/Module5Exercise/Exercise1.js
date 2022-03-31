function displayKey(e) {
  var keycode = e.which;

  character = String.fromCharCode(keycode);

  var keys_paragraph = document.getElementById('keys');
  var kType = document.getElementById("kType")
  message = e.type + "<br>";
       if(e.type == "keyup")
       {
         message += "</br></br>";
       }
       kType.innerHTML +=message;

  keys_paragraph.innerHTML += character;
}
document.addEventListener("keypress", displayKey);
document.addEventListener("keydown", displayKey);
document.addEventListener("keyup", displayKey);