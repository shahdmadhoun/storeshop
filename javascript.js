var typed = new Typed (".vide span.type" ,{
    strings:[" "," Welcome all to our website",
    "We deliver to all over the world" , "Be near from us !"],
    loop:true,
    typeSpeed:50,
    backSpeed:50});

    var counter = 0;

function myFunction(num) {
    counter++;


    var sum = 0;
    sum = document.getElementById("avg").innerHTML;

    if(sum == 0){
        document.getElementById("avg").innerHTML =num;
    }
    else {
        var todigit = (parseInt( sum) +parseInt( num))/2;
        n = todigit.toFixed(2);
        document.getElementById("avg").innerHTML = n}


    document.getElementById("thank").innerHTML = "Thank you " ;


      }
