document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const p = container.querySelector("p");

  function generateRandomColor() {
    // Générer trois valeurs aléatoires entre 0 et 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Créer la chaîne de couleur RGB
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    // Appliquer la couleur en arrière-plan du body
    document.body.style.backgroundColor = rgbColor;

    // Injecter la couleur RGB dans le paragraphe
    p.textContent = rgbColor;
  }

  // Générer une couleur aléatoire au chargement de la page
  generateRandomColor();

  // Générer une nouvelle couleur aléatoire à chaque clic
  document.body.addEventListener("click", generateRandomColor);
});
