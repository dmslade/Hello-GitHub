// create the array
names = new Array();
var i = 0;
var numbernames=0;

// loop and prompt for names
do {
  numbernames++;
  next = window.prompt("Enter 10 names \n Enter name #"+ (i+1), ""); 
  if(next > " ") names[i] = next;
  i = i + 1;
} while (next > " " && numbernames <10);

document.write("<h2>" + (names.length) + " names entered.</h2>");
// display all of the names
document.write("<ol>");
names.sort();
for (i in names) { 
  document.write("<li>" + names[i] + "</li>");
}
// close the list
document.write("</ol>");
