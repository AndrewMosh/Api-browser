let svg = document.getElementById("svg");
let svgPressed = document.getElementById("svg-pressed");
svgPressed.style.display = "none";
svg.addEventListener("click", () => {
  svg.style.display = "none";
  svgPressed.style.display = "block";
});

svgPressed.addEventListener("click", () => {
  svgPressed.style.display = "none";
  svg.style.display = "block";
});
