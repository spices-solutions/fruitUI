// const Rippel = (): void => {
//   const buttons = document.querySelectorAll(".btn-ripple")
//   buttons.forEach(btn => {
//     btn.addEventListener("click", (e:any) => {
//       let x = e.clientX - e.target.offsetLeft;
//       let y = e.clientY - e.target.offsetTop;
//       let ripples = document.createElement("span");
//       ripples.classList.add("ripple-container");
//       ripples.style.left = x + "px";
//       ripples.style.top = y + "px";
//       btn.appendChild(ripples);
//       setTimeout(() => {
//         ripples.remove();
//       }, 1000)
//     })
//   })
// };

// export default Rippel;
