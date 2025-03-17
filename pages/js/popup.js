let popup = document.getElementById("popup");

document.getElementById("on-click").addEventListener("click", () =>
    popup.style.display = "flex"
);

document.getElementById("close-popup").addEventListener("click", () =>
    popup.style.display = "none"
);

document.getElementById("popup").addEventListener("click", function (e) {
    if (e.target === this) {
        popup.style.display = "none";
    }
});