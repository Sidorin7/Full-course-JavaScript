const btns = document.querySelector("button"),
  overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//   alert("click");
// };

// btn.onclick = function () {
//   alert("second click");
// };
let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
  //   i++;
  //   if (i == 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
};
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement);
});
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});
