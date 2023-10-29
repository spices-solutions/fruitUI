// interface SliderOptions {
//   sliderSelector: string;
//   slideSelector: string;
//   prevSelector: string;
//   nextSelector: string;
// }

// function createSlider(options: SliderOptions): void {
//   const slides = Array.from(document.querySelectorAll<HTMLElement>(options.slideSelector));
//   let currentIndex = 0;
//   const slideWidth = slides[0].offsetWidth;
//   const sliderElement = document.querySelector<HTMLElement>(options.sliderSelector);
//   const prevButton = document.querySelector<HTMLElement>(options.prevSelector);
//   const nextButton = document.querySelector<HTMLElement>(options.nextSelector);

//   function updateSliderPosition(): void {
//     sliderElement.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//   }

//   function goToNextSlide(): void {
//     if (currentIndex < slides.length - 1) {
//       currentIndex++;
//       updateSliderPosition();
//     }
//   }

//   function goToPrevSlide(): void {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateSliderPosition();
//     }
//   }

//   function handleSwipeStart(event: TouchEvent): void {
//     const touch = event.touches[0];
//     startX = touch.clientX;
//   }

//   function handleSwipeEnd(event: TouchEvent): void {
//     const touch = event.changedTouches[0];
//     const endX = touch.clientX;
//     const deltaX = endX - startX;

//     if (deltaX > 0) {
//       goToPrevSlide();
//     } else if (deltaX < 0) {
//       goToNextSlide();
//     }
//   }

//   prevButton.addEventListener("click", goToPrevSlide);
//   nextButton.addEventListener("click", goToNextSlide);
//   sliderElement.addEventListener("touchstart", handleSwipeStart);
//   sliderElement.addEventListener("touchend", handleSwipeEnd);
// }

// createSlider({
//   sliderSelector: ".slider",
//   slideSelector: ".slide",
//   prevSelector: ".prev",
//   nextSelector: ".next",
// });
