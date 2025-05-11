const images = ["./img/img1.jpg", "./img/img2.jpg","./img/img3.jpg","./img/img4.jpg","./img/img5.jpg", "./img/img6.jpg" , "./img/img7.jpg" , "./img/img8.jpg" , "./img/img9.jpg" , "./img/img10.jpg"]; 
  let current = 0;
  const imgElement = document.getElementById("slideshow");

  setInterval(() => {
    current = (current + 1) % images.length;
    imgElement.src = images[current];
  }, 3000); 

// Eventos de toque para celular
sliderContainer.addEventListener("touchstart", (e) => {
  dragging = true;
  updateSliderTouch(e.touches[0]);
});

window.addEventListener("touchmove", (e) => {
  if (dragging) {
    updateSliderTouch(e.touches[0]);
  }
});

window.addEventListener("touchend", () => {
  dragging = false;
});

function updateSliderTouch(touch) {
  const rect = sliderContainer.getBoundingClientRect();
  let width = touch.clientX - rect.left;

  if (width < 0) width = 0;
  if (width > rect.width) width = rect.width;

  slider.style.width = `${width}px`;

  const percentage = Math.round((width / rect.width) * 100);
  sliderText.textContent = `Avaliação: ${percentage}% de amor!`;
}

