function respmenu() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("first");
    if (x.className === "topnav") {
      x.className += " responsive";
      y.style.display = "none";
    } else {
      x.className = "topnav";
    }
  }