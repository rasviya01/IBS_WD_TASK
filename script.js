// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
          // Close navbar after click (for mobile view)
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse && navbarCollapse.classList.contains('show')) {
              const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
              bsCollapse.hide();
          }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation messages
        let errorMessage = '';

        // Name validation
        if (name === '') {
            errorMessage += 'Name is required.\n';
        }

        // Email validation (basic format check)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === '') {
            errorMessage += 'Email is required.\n';
        } else if (!emailPattern.test(email)) {
            errorMessage += 'Please enter a valid email address.\n';
        }

        // Message validation
        if (message === '') {
            errorMessage += 'Message is required.\n';
        }

        // Display errors or submit the form
        if (errorMessage !== '') {
            alert(errorMessage); // Display the error message
        } else {
            // If everything is valid, submit the form (or handle form submission here)
            alert('Form submitted successfully!');
            form.submit(); // Uncomment this line if you want the form to be submitted after validation
        }
    });
});

