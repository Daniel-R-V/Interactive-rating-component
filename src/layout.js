let bttn = document.querySelectorAll("label");
let btn = document.getElementById("btn");
let evaluation = document.querySelector(".evaluation");
let thankyou = document.querySelector(".thankyou");
let span = document.getElementById("rated");

for (let i = 0; i < bttn.length; i++) {
    bttn[i].addEventListener("click", () => {
        bttn[i].classList.add("newColor");
        bttn[i].style.color = "white";
    });
}

btn.addEventListener("click", () => {
    evaluation.style.display = "none";
    thankyou.style.display = "block";
    bttn.value = span;
});
