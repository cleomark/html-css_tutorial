document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector("body");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    hamburgerMenu.addEventListener("click", function() {
        if (sidebar.style.width === "72px") {
            sidebar.style.width = "0";
            body.style.paddingLeft = "13px";
        } else {
            sidebar.style.width = "72px";
            body.style.paddingLeft = "87px";
        }
    });
});
