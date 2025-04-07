
// Cacher tous les calques interactifs sauf la carte
document.addEventListener("DOMContentLoaded", () => {
  // Rendre visibles uniquement le calque 'carte'
  const allGroups = document.querySelectorAll("g");
  allGroups.forEach(g => {
    const id = g.id;
    if (id && id !== "carte" && id !== "mouillages") {
      g.style.display = "none";
    }
  });

  // Activer les survols "clic_xxx" => "xxx"
  allGroups.forEach(g => {
    const id = g.id;
    if (id && id.startsWith("clic_")) {
      const targetId = id.replace("clic_", "");
      const target = document.getElementById(targetId);
      if (target) {
        g.addEventListener("mouseenter", () => {
          target.style.display = "inline";
        });
        g.addEventListener("mouseleave", () => {
          target.style.display = "none";
        });
      }
    }
  });

  // Bouton d'affichage du calque "mouillages"
  const boutonMouillages = document.getElementById("toggle-mouillages");
  boutonMouillages.addEventListener("click", () => {
    const mouillages = document.getElementById("mouillages");
    if (mouillages) {
      const isHidden = mouillages.style.display === "none";
      mouillages.style.display = isHidden ? "inline" : "none";
    }
  });

  // Bouton de recentrage (rafraîchit la page)
  const boutonReset = document.getElementById("reset-view");
  boutonReset.addEventListener("click", () => {
    window.location.reload();
  });
});
