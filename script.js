const images = ["./img/img1.jpg", "./img/img2.jpg","./img/img3.jpg","./img/img4.jpg","./img/img5.jpg", "./img/img6.jpg" , "./img/img7.jpg" , "./img/img8.jpg" , "./img/img9.jpg" , "./img/img10.jpg"]; 
  let current = 0;
  const imgElement = document.getElementById("slideshow");

  setInterval(() => {
    current = (current + 1) % images.length;
    imgElement.src = images[current];
  }, 3000); 
