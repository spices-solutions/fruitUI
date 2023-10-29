
// function Alert() {
//   const alert: NodeListOf<Element> = document.querySelectorAll(".alert");
//   alert.forEach(everyAlert => {
//     const x = `<svg width="24" height="24" class="close-alert" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
//     let alertContent = everyAlert.innerHTML;
//     let alertSuccessIcon = document.querySelectorAll(".alert .icon-success")
//     let alertSecondaryIcon = document.querySelectorAll(".alert .icon-secondary")
//     let alertInfoIcon = document.querySelectorAll(".alert .icon-info")
//     let alertErrorIcon = document.querySelectorAll(".alert .icon-error")
//     let succsessSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
//     let secondarySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
//     let infoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
//     let errorSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
//     alertSuccessIcon.forEach(el => {
//       el.innerHTML = succsessSvg;
//     })
//     alertSecondaryIcon.forEach(el => {
//       el.innerHTML = secondarySvg;
//     })
//     alertInfoIcon.forEach(el => {
//       el.innerHTML = infoSvg;
//     })
//     alertErrorIcon.forEach(el => {
//       el.innerHTML = errorSvg;
//     })
//     everyAlert.innerHTML = alertContent + x;
//     let closeAlert = document.querySelectorAll(".alert .close-alert");
//     closeAlert.forEach(everyCloseAlert => {
//       everyCloseAlert.addEventListener("click", () => {
//         everyCloseAlert.parentElement?.classList.add("gost")
//         setTimeout(() => everyCloseAlert.parentElement?.remove(), 300);
//       })
//     })
//   }) 
// }

// export default Alert;