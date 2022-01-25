
function getQuote() {
    // Create the arrays
    quotes = new Array(5);
    sources = new Array(5);

    // Initialize the arrays with quotes
    quotes[0] = "When I was a boy of 14, my father was so " +
        "ignorant...but when I got to be 21, I was astonished " +
        "at how much he had learned in 7 years.";
    sources[0] = "Mark Twain";

    quotes[1] = "Everybody is ignorant. Only on different " +
        "subjects.";
    sources[1] = "Will Rogers";

    quotes[2] = "They say such nice things about people at " +
        "their funerals that it makes me sad that I'm going to " +
        "miss mine by just a few days.";
    sources[2] = "Garrison Keillor";

    quotes[3] = "What's another word for thesaurus?";
    sources[3] = "Steven Wright";

    quotes[4] = "What is happening?";
    sources[4] = "David Slade";

    // Get a random index into the arrays
    i = Math.floor(Math.random() * quotes.length);

    qt = document.getElementById("quote");

    // Write out the quote as HTML
    /*document.write("<p style='background-color: #ffb6c1' >\"");
    document.write(quotes[i] + "\"");
    document.write("<em>- " + sources[i] + "</em>");
    document.write("</p>"); */

    quoteStr = "<p style='background-color: #ffb6c1' >\""  + quotes[i] + "\"" + "<em>- " + sources[i] + "</em></p>";

    qt.innerHTML = quoteStr;

}

