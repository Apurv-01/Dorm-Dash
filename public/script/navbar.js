const homeNavlink = document.querySelector('.home');
const menuNavlink = document.querySelector('.menu');

if(window.location.pathname =='/'){
    homeNavlink.classList.add('active');
}
else if(window.location.pathname == '/mess-menu'||'/tomorrow-mess-menu'){
    menuNavlink.classList.add('active');

}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 