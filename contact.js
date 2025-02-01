document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateForm(name, email, message)) {
            alert(`${name}\nYour message has been sent!`);
            window.location.href = 'home.html';
        } else {
            alert('Please fill out the form correctly.');
        }
    });

    function validateForm(name, email, message) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return name.trim() !== '' && emailPattern.test(email) && message.trim() !== '';
    }
})