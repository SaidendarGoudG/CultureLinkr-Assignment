// Get references to form fields and error messages
const fields = [
    { field: document.getElementById("name"), error: document.getElementById("nameError") },
    { field: document.getElementById("email"), error: document.getElementById("emailError") },
    { field: document.getElementById("message"), error: document.getElementById("messageError") }
  ];

  // Add blur event listeners to each field
  fields.forEach(({ field, error }) => {
    field.addEventListener("blur", () => {
      if (!field.value.trim()) {
        error.style.display = "block";
      } else {
        error.style.display = "none";
      }
    });
  });

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;
    fields.forEach(({ field, error }) => {
      if (!field.value.trim()) {
        error.style.display = "block";
        isValid = false;
      } else {
        error.style.display = "none";
      }
    });

    // If all fields are valid, show success message and clear the form
    if (isValid) {
      document.getElementById("successMessage").style.display = "block";
      document.getElementById("contactForm").reset();
      setTimeout(function() {
        document.getElementById("successMessage").style.display = 'none';
    }, 3000);
    }
  });