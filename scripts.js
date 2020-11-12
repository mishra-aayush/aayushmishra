function onClick(element) 
{
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
         
window.onscroll = function() {myFunction()};

function myFunction() 
{
    var navbar = document.getElementById("myNavbar");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
    {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    }
    else 
    {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", " w3-hide");
    }
}
         
function toggleFunction() 
{
    var x = document.getElementById("navDemo");
    
    if (x.className.indexOf("w3-show") == -1) 
    {
        x.className += " w3-show";
    } 
    else 
    {
        x.className = x.className.replace(" w3-show", "");
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) 
{
  showDivs(slideIndex += n);
}

function currentDiv(n) 
{
  showDivs(slideIndex = n);
}

function showDivs(n) 
{
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" w3-black", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-black";
}
