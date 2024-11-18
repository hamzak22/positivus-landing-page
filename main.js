let menuBtn = document.getElementById("hamburger") ;
let navLinks = document.getElementById("navlinks")

menuBtn.addEventListener("click",() => {
    navLinks.classList.toggle("open")
})