let body = document.getElementById("Body");
let navbar = document.getElementById("TheSiteNav")
let toggler = document.getElementById("my-toggler");

function update() {
    if(!navbar.classList.contains("show")) {
        body.classList.remove("body-shift")
    } else {
        body.classList.add("body-shift")
    }
    setTimeout(update, 500);
}

update();