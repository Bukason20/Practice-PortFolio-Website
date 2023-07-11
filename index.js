const burger = document.querySelector(".burger")
const navLinks = document.querySelector(".navlinks")
const navBar = document.querySelector(".navbar")
const navLinksHash = document.querySelectorAll(".navlinks a")
const close = document.querySelector("#close")
const activePage = window.location.hash
const sections = document.querySelectorAll("section")


// show navbar
burger.addEventListener("click", () => {    
    navLinks.classList.add("active")
})
close.addEventListener("click", () => {
    navLinks.classList.remove("active")
})

// Select Navigation link when the page is onLoad and When it is  Clicked
navLinksHash.forEach((link) => {
    if(link.href.includes(`${activePage}`) && activePage !== ""){
        link.classList.add("active")

        
    }else if(activePage === ""){
        navLinksHash[0].classList.add("active")
    }
    link.addEventListener("click", function(){
        navLinksHash.forEach(li => li.classList.remove("active"))
        this.classList.add("active")
        navLinks.classList.remove("active")
    })
    
})

// Change Navbar Color when scrolled and select navigation link when scrolled
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navBar.classList.add("active")
    }else if (window.scrollY < 50){
        navBar.classList.remove("active")
    }

    sections.forEach((section) => {
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinksHash.forEach(links => {
                links.classList.remove("active");
                if(links.href.includes(id)){
                    links.classList.add("active")
                }if(id === "hero-section"){
                    navLinksHash[0].classList.add("active")
                }
            })
        }
    })


})