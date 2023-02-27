const menuButton = document.querySelector(".menuButton");

menuButton.onclick = function menuAppear() {
    const navbarLeft = document.querySelector(".navbarLeft");
    const navbarRight = document.querySelector(".navbarRight");

    if(navbarLeft.style.display === "none" && navbarRight.style.display === "none"){
        navbarLeft.style.display = "flex";
        navbarRight.style.display = "flex";
        menuButton.src = "/assets/icons/close.png";
    } else {
        navbarLeft.style.display = "none";
        navbarRight.style.display = "none";
        menuButton.src = "/assets/icons/menu.png";
    }
}