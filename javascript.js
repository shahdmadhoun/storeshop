var typed = new Typed (".vide span.type" ,{
    strings:[" "," Welcome all to our website",
    "We deliver to all over the world" , "Be near from us !"],
    loop:true,
    typeSpeed:50,
    backSpeed:50});


function myFunction(num) {
    var sum = document.getElementById("avg").innerHTML;

    if(parseFloat(sum)  == 0){
        document.getElementById("avg").innerHTML =parseFloat(num);
    }
    else {
        var todigit = (parseFloat(sum) +parseFloat(num))/2;
        n = todigit.toFixed(2);
        document.getElementById("avg").innerHTML = n;
    }


    document.getElementById("thank").innerHTML = "Thank you " ;



      }
