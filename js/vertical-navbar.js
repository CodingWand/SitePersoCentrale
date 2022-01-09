let body = document.getElementById("Body");
let navbar = document.getElementById("TheSiteNav")
let toggler = document.getElementById("my-toggler");

function update() {
    if(!navbar.classList.contains("show")) {
        body.classList.remove("body-shift");
        toggler.hidden = false;
    } else {
        body.classList.add("body-shift");
        toggler.hidden = true;
    }
    setTimeout(update, 10);
}