let bttn = document.querySelectorAll("input");
let rar = document.querySelector("rad");
let btn = document.getElementById("btn");
let evaluation = document.querySelector(".evaluation");
let thankyou = document.querySelector(".thankyou");
let span = document.getElementById("rated");

for (let i = 0; i < bttn.length; i++) {
    bttn[i].addEventListener("click", () => {
        bttn[i].classList.add("newColor");
        bttn[i].style.color = "white";
        span.innerHTML = bttn[i].value;
    });
}

btn.addEventListener("click", () => {
    evaluation.style.display = "none";
    thankyou.style.display = "block";
});
