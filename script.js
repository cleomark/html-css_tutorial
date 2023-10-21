document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector("body");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    const maxWidth = 1000;
    const defaultWidth = "163px";
    const defaultPaddingLeft = "182px";
    const smallWidth = "72px";
    const smallPaddingLeft = "87px";

    function updateSidebarStyles() {
        if (window.innerWidth <= maxWidth) {
            sidebar.style.width = smallWidth;
            body.style.paddingLeft = smallPaddingLeft;
        } else {
            sidebar.style.width = defaultWidth;
            body.style.paddingLeft = defaultPaddingLeft;
        }
    }

    // Initial update based on the window width
    updateSidebarStyles();

    // Update the styles when the window is resized
    window.addEventListener("resize", updateSidebarStyles);

    hamburgerMenu.addEventListener("click", function() {
        if (window.innerWidth <= maxWidth) {
            sidebar.style.width = sidebar.style.width === smallWidth ? "0" : smallWidth;
            body.style.paddingLeft = body.style.paddingLeft === smallPaddingLeft ? "13px" : smallPaddingLeft;
        } else {
            sidebar.style.width = sidebar.style.width === defaultWidth ? "0" : defaultWidth;
            body.style.paddingLeft = body.style.paddingLeft === defaultPaddingLeft ? "13px" : defaultPaddingLeft;
        }
    });
});
