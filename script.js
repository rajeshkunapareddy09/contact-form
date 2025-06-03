document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission
  
    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Get error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");
  
    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
  
    let isValid = true;
  
    // Name validation
    if (name === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }
  
    // Email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email.";
      isValid = false;
    }
  
    // Message validation
    if (message === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    }
  
    // Show success message if valid
    if (isValid) {
      successMessage.textContent = "Your message has been submitted successfully!";
      document.getElementById("contactForm").reset();
    }
  });
  