document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const firstNameInput = form.querySelector('input[type="text"]:nth-of-type(1)');
    const middleInitialInput = form.querySelector('input[type="text"]:nth-of-type(2)');
    const lastNameInput = form.querySelector('input[type="text"]:nth-of-type(3)');
    const cityInput = form.querySelector('input[type="text"]:nth-of-type(4)');
    const stateInput = form.querySelector('input[type="text"]:nth-of-type(5)');
    const zipCodeInput = form.querySelector('input[type="text"]:nth-of-type(6)');
    const sendButton = form.querySelector('button[type="button"]:nth-of-type(1)');
    const clearButton = form.querySelector('button[type="button"]:nth-of-type(2)');
    const textareas = form.querySelectorAll('textarea');
    const inputs = form.querySelectorAll('input[type="text"]');
  
    sendButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Check if required fields are filled
      let allFilled = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          allFilled = false;
          input.style.borderColor = 'red'; // Indicate error
        } else {
          input.style.borderColor = ''; // Reset border
        }
      });
  
      if (allFilled) {
        alert('Form sent successfully!');
        form.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  
    clearButton.addEventListener('click', function(event) {
      event.preventDefault();
      form.reset();
      inputs.forEach(input => {
          input.style.borderColor = '';
      });
    });
  
    inputs.forEach(input => {
      input.addEventListener('input', function() {
          if (input.value.trim()) {
              input.style.borderColor = '';
          }
      })
    });
  });