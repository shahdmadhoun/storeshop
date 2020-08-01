var typed = new Typed (".vide span.type" ,{
    strings:[" "," Welcome all to our website",
    "We deliver to all over the world" , "Be near from us !"],
    loop:true,
    typeSpeed:50,
    backSpeed:50});

function myFunction(num) {

    var avgvalue = document.getElementById("avg").innerHTML;

    if(avgvalue == 0){
        document.getElementById("avg").innerHTML =num;
    }
    else {
    document.getElementById("avg").innerHTML = (avgvalue + num)/2;
}

    
    document.getElementById("thank").innerHTML = "Thank you " + num;


      }
