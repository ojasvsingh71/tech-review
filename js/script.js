const images = document.querySelectorAll("img");

images.forEach(image => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";  
    image.style.transition = "transform 0.3s ease";  
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";  
  });
});
