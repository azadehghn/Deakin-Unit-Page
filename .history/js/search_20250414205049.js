document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const searchTerm = searchInput.value.trim();

      if (searchTerm.length > 0) {
        // In a real implementation, this would redirect to a search results page
        // For this example, we'll just simulate with an alert
        alert(`Searching for: ${searchTerm}`);
        // In production, redirect to: window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
      } else {
        // Highlight the input to indicate it's required
        searchInput.classList.add("error");

        setTimeout(() => {
          searchInput.classList.remove("error");
        }, 1500);
      }
    });
  }

  // Search suggestions functionality
  if (searchInput) {
    const createSuggestionsList = () => {
      // Create suggestions container if it doesn't exist
      let suggestionsContainer = document.querySelector(".search-suggestions");

      if (!suggestionsContainer) {
        suggestionsContainer = document.createElement("div");
        suggestionsContainer.className = "search-suggestions";
        searchForm.appendChild(suggestionsContainer);
      }

      return suggestionsContainer;
    };

    const sampleSuggestions = [
      "Business Degrees",
      "Information Technology",
      "Health Sciences",
      "Admission Requirements",
      "Campus Tours",
      "Scholarships",
      "Student Portal",
      "Library Services",
      "Research Opportunities",
    ];

    searchInput.addEventListener("input", function () {
      const inputValue = this.value.trim().toLowerCase();
      const suggestionsContainer = createSuggestionsList();

      // Clear previous suggestions
      suggestionsContainer.innerHTML = "";

      if (inputValue.length < 2) {
        suggestionsContainer.style.display = "none";
        return;
      }

      // Filter suggestions based on input
      const matchingSuggestions = sampleSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue)
      );

      if (matchingSuggestions.length > 0) {
        matchingSuggestions.forEach((suggestion) => {
          const item = document.createElement("div");
          item.className = "suggestion-item";
          item.textContent = suggestion;

          item.addEventListener("click", () => {
            searchInput.value = suggestion;
            suggestionsContainer.style.display = "none";
            // In a real implementation, you might want to submit the form here
          });

          suggestionsContainer.appendChild(item);
        });

        suggestionsContainer.style.display = "block";
      } else {
        suggestionsContainer.style.display = "none";
      }
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-container")) {
        const suggestionsContainer = document.querySelector(
          ".search-suggestions"
        );
        if (suggestionsContainer) {
          suggestionsContainer.style.display = "none";
        }
      }
    });
  }
});
