window.addEventListener("scroll", function(){

let navbar = document.getElementById("navbar");

if(window.scrollY > 50)
{
navbar.classList.add("navbar-active");
}
else
{
navbar.classList.remove("navbar-active");
}

});