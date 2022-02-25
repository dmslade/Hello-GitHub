var count =0; //global voaribale

function incCount(){
    count +=1;  //equivaltent to count = count +1; or count++; or
    var num = 0;
    return count;
}

function countIt(){
    $("#counter").html(incCount());
}