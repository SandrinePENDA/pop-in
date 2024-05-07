// This checks wether the screen's size is a mobile or not
/*
function displayPopIn() {
    if (window.innerWidth < 631) {
         mobileImg.style.display = "block";
    } else {
        desktopImg.style.display = "block";
    }
}
displayPopIn();
*/
//console.log(openPopin);
openPopin.addEventListener("click", () => {
    main.style.display = "block";
    body.classList.add("popin__overlay");
})
