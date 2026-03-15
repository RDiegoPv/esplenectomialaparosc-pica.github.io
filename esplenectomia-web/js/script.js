const links = document.querySelectorAll("nav a");

links.forEach(link => {
link.addEventListener("click", e=>{
e.preventDefault();
const section = document.querySelector(link.getAttribute("href"));

window.scrollTo({
top: section.offsetTop - 60,
behavior:"smooth"
});
});
});
