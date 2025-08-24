function performSearch() {
  const query = document.getElementById('searchInput').value;
  const searchModal = document.getElementById('search-modal');
  const errorMessage = document.getElementById('error-message');


  if (query) {
    // Show the modal
    searchModal.style.display = 'flex';

    // Clear any previous error message
    errorMessage.textContent = '';

    // Simulate API delay (e.g., 2 seconds)
    setTimeout(() => {
      console.log(`User searched for: ${query}`);
      // Hide the modal
      searchModal.style.display = 'none';
    }, 2000); // 2-second delay
  } else {
    // Display error message
    errorMessage.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="margin-right: 5px;"></i> Search box cannot be blank!';
  }
}

// US2: Easy Navigation Menu - Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('active'); // Toggle 'active' class to show/hide menu
    });
  }
});
