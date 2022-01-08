alert("ça commence");
let body = document.getElementById("Body");
let navbar = document.getElementById("TheSiteNav");
console.log(navbar);

function update() {
    if(!navbar.classList.contains("show")) {
        body.classList.remove("body-shift")
    } else {
        body.classList.add("body-shift")
        console.log("c'est fait");
    }
    setTimeout(update, 500);
}

update();