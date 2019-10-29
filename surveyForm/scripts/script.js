// When user scrolls 10px down from the top of the document, 
//  reduce the size of the header + h1

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("heading").style.fontSize = "1.5rem";
    document.getElementById("header").style.height = "3rem";
    /*slightly larger container height to avoid annoying jumps in 
        the position of the survey form*/
    document.getElementById("headContainer").style.height = "5rem"; 
  } else {
    document.getElementById("heading").style.fontSize = "3rem";
    document.getElementById("header").style.height = "10rem";
    document.getElementById("headContainer").style.height = "10rem";
  }
}