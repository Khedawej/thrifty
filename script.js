
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var email = document.getElementById("email-input").value;
  
    // Perform email validation (you can add your own validation logic here)
  
    // Simulate successful subscription
    document.getElementById("newsletter-message").textContent = "Thank you for subscribing!";
    document.getElementById("newsletter-message").style.color = "#4caf50";
    document.getElementById("email-input").value = "";
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform form validation
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    var errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';

    if (!name || !email || !subject || !message) {
        errorMessage.innerHTML = 'Please fill in all fields.';
        return;
    }

    // Send the form data to the server (you can customize this part according to your requirements)
    // For demonstration purposes, we'll just display an alert with the form data
    var formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }