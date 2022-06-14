// const bttn = document.querySelectorAll(".btn");

// const changeColor = () => {
//     for (let i = 0; i < bttn.length; i++) {
//         bttn[i].style.color = "red";
//         break;
//     }
// };

// let bttn = document.getElementsByClassName(".btn");

// for (let i = 0; i < bttn.length; i++) {
//     bttn[i].addEventListener("click", () => {
//         console.log("entra en la funcion");
//         bttn.style.color = "red";
//     });
// }

let butn = document.getElementsByClassName(".btn");

butn.addEventListener("click", changeColor);

const changeColor = () => {
    butn.style.color = "red";
};
