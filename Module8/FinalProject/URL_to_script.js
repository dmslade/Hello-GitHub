function validate()
{
document.getElementById("standardValues").addEventListener("click", function() {
  document.getElementById("the_name").value = "Your Name";
  document.getElementById("the_email").value= "you@yourdomain.com";
  document.gbForm.like_it.checked = true; 
  document.gbForm.choose_scale.value = "10"; 
  document.gbForm.the_best.checked = true;
  document.gbForm.best_thing[2].checked = true;
  document.getElementById("the_worst").value = "Nothing";
  document.gbForm.how_improve.value = "More about the dandelions."
  document.getElementById("errors").innerHTML = 
           "<p>Don't forget to give your feedback and submit the form.</p>";
  document.gbForm.message.focus();
  console.log("Validate function is finished!");
}); 
}

function procForm()
{
  var data = new FormData();

  data.append("First Name", document.getElementById("fname").value);
  data.append("Last Name", document.getElementById("lname").value);
  data.append("Email", document.getElementById("email").value);
  data.append("Comments", document.getElementById("comments").value);

  var str = "";

  for(let [f, v] of data.entries())
  {
    str += f + ": " + v;
    str += "<br>";
  }  
  localStorage.setItem("dataValues", str);
}