function rotate (event)  {
    var x = event.clientX;
    var y = event.clientY;

    var w = window.innerWidth;
    var h = window.innerHeight;

    var midpointW = w / 2;
    var midpointH = h / 2;

    var posX = x - midpointW;
    var posY = y - midpointH;


    var strengthX = 9
    var strengthY = 3

    var valX1 = (posX / midpointW) * strengthX;
    var valY1 = (posY / -midpointH) * strengthY;



	document.getElementById("container").style.transform = "perspective(550px) rotateY(" + valX1 + "deg) rotateX(" + valY1 + "deg)";

}


document.addEventListener("mousemove", rotate);



document.getElementById("0").onclick = function () {
  document.getElementById("projectTab").style.display = "none";
  document.getElementById("aboutTab").style.display = "none";
  document.getElementById("welcomeTab").style.display = "block";
}

document.getElementById("1").onclick = function () {
  document.getElementById("welcomeTab").style.display = "none";
  document.getElementById("aboutTab").style.display = "none";
  document.getElementById("projectTab").style.display = "block";
}

document.getElementById("2").onclick = function () {
  document.getElementById("projectTab").style.display = "none";
  document.getElementById("welcomeTab").style.display = "none";
  document.getElementById("aboutTab").style.display = "block";
}
