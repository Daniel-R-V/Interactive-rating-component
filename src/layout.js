let bttn = document.querySelectorAll(".btn");

for (let i = 0; i < bttn.length; i++) {
    bttn[i].addEventListener("click", () => {
        bttn[i].classList.add("newColor");
    });
}
