function rotate (event)
{
    var x = event.clientX;
    var y = event.clientY;

    var w = window.innerWidth;
    var h = window.innerHeight;

    var midpointW = w / 2;
    var midpointH = h / 2;

    var posX = x - midpointW;
    var posY = y - midpointH;

	  var valX1 = (posX / midpointW) * 20;
    var valX2 = (posX / midpointW) * 8;

    var valY1 = (posY / midpointH) * 20;
    var valY2 = (posY / midpointH) * 12;



	document.getElementById("logoContainer").style.transform = "perspective(550px) rotateY(" + valX1 + "deg) rotateX(" + valY1 + "deg)";
}

document.addEventListener("mousemove", rotate);
