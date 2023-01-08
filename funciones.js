function miFuncion() {
    var x = document.getElementById("mi_nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }


