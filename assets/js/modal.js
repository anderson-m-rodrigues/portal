const thumbnail = document.getElementById("thumbnail");
const modal = document.getElementById("imageModal");

// Mostrar o modal ao clicar na imagem reduzida
thumbnail.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fechar o modal ao clicar fora da imagem ampliada
modal.addEventListener("click", () => {
  modal.style.display = "none";
});
