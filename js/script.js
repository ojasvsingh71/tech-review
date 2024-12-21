// Add Zoom Effect on Image Hover
const images = document.querySelectorAll("img");

images.forEach(image => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";  // Zoom in effect
    image.style.transition = "transform 0.3s ease";  // Smooth transition
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";  // Reset the image to original size
  });
});
