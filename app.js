// Triggering pop-in and its overlay
openPopin.addEventListener("click", () => {
    main.style.display = "block";
    body.classList.add("popin__overlay");
});

//Closing the pop-in
closePopin.addEventListener("click", () => {
    main.style.display = "none";
    body.classList.remove("popin__overlay");
})
