// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get the form data
  const formData = new FormData(this);

  // Send form data to Getform using fetch API
  fetch(this.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Show success message and hide form
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('contactForm').reset(); // Reset the form
    } else {
      alert("There was a problem with your submission. Please try again.");
    }
  })
  .catch(error => {
    alert("There was a problem with your submission. Please try again.");
  });
});
