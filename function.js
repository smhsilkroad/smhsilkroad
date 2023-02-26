function sendEmail() {
    // Get form input values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
  
    // Validate form inputs
    if (firstName === '' || lastName === '' || phoneNumber === '' || email === '') {
      alert('Please fill in all fields.');
      return false;
    }
  
    // Create email body
    const emailBody = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail: ${email}`;
  
    // Send email (using server-side code)
    // ...
  
    // Show success message
    document.getElementById('contact-form').innerHTML = '<p>Thank you for contacting us!</p>';
  
    return true;
  }
  
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', sendEmail);
  