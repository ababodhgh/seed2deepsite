document.getElementById("seasonFilter").addEventListener("change", function() {
  const selectedSeason = this.value;
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const seasons = card.getAttribute("data-season").split(" ");
    
    // Show/hide based on selection
    if (selectedSeason === "all" || seasons.includes(selectedSeason)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  // Reorder cards: matching seasons first
  if (selectedSeason !== "all") {
    const container = document.querySelector(".vegetables");
    const sortedCards = Array.from(cards).sort((a, b) => {
      const aHasSeason = a.getAttribute("data-season").includes(selectedSeason);
      const bHasSeason = b.getAttribute("data-season").includes(selectedSeason);
      return bHasSeason - aHasSeason; // 1 for match (b comes first), 0/-1 otherwise
    });

    // Re-append sorted cards
    sortedCards.forEach(card => container.appendChild(card));
  }
});