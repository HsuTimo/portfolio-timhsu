function hideUnHide() {
    var x = document.getElementById("dropdown");
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
}
function hide() {
    var x = document.getElementById("dropdown");
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
    }
}
document.getElementById("hamburger").addEventListener("click", function () {
    hideUnHide();
});
let dropdownLinks = document.getElementsByClassName("dropdown-link");
for (let i = 0; i < dropdownLinks.length; i++) {
    dropdownLinks[i].addEventListener("click", function () {
        hide();
    });
}