document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on a login page
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const userType = document.querySelector(
        'input[name="user-type"]:checked'
      ).value;

      // Check for empty fields
      if (!username || !password) {
        showError("Please fill in all fields");
        return;
      }

      // In a real implementation, this would send a request to a server for authentication
      // For this example, we'll simulate login with sample credentials

      if (simulateAuth(username, password, userType)) {
        showSuccess("Login successful! Redirecting...");

        // Store login state in session storage
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("userType", userType);
        sessionStorage.setItem("username", username);

        // Redirect after a delay
        setTimeout(() => {
          if (userType === "student") {
            window.location.href = "student-dashboard.html";
          } else {
            window.location.href = "staff-dashboard.html";
          }
        }, 1500);
      } else {
        showError("Invalid username or password");
      }
    });
  }

  // Check if user is logged in on protected pages
  const protectedPage = document.querySelector(".protected-page");

  if (protectedPage) {
    const loggedIn = sessionStorage.getItem("loggedIn");
    const userType = sessionStorage.getItem("userType");
    const pageType = protectedPage.dataset.pageType;

    if (!loggedIn || (pageType !== "both" && pageType !== userType)) {
      // Redirect to login page if not logged in or wrong user type
      window.location.href = "login.html";
    } else {
      // Display user information
      const usernameElement = document.getElementById("username-display");
      if (usernameElement) {
        usernameElement.textContent = sessionStorage.getItem("username");
      }

      // Setup logout button
      const logoutButton = document.getElementById("logout-button");
      if (logoutButton) {
        logoutButton.addEventListener("click", function () {
          // Clear session storage
          sessionStorage.removeItem("loggedIn");
          sessionStorage.removeItem("userType");
          sessionStorage.removeItem("username");

          // Redirect to home page
          window.location.href = "index.html";
        });
      }
    }
  }

  // Helper functions
  function showError(message) {
    const errorElement = document.querySelector(".error-message");

    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = "block";

      setTimeout(() => {
        errorElement.style.display = "none";
      }, 3000);
    }
  }

  function showSuccess(message) {
    const successElement = document.querySelector(".success-message");

    if (successElement) {
      successElement.textContent = message;
      successElement.style.display = "block";

      setTimeout(() => {
        successElement.style.display = "none";
      }, 3000);
    }
  }

  function simulateAuth(username, password, userType) {
    // Sample credentials for demo purposes only
    // In a real implementation, this would be server-side validation
    const validCredentials = {
      student: [
        { username: "student1", password: "password123" },
        { username: "student2", password: "password123" },
      ],
      staff: [
        { username: "staff1", password: "password123" },
        { username: "staff2", password: "password123" },
      ],
    };

    return validCredentials[userType].some(
      (cred) => cred.username === username && cred.password === password
    );
  }
});
