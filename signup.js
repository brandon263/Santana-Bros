document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        
        if (validateForm(name, surname, email)) {
            alert(`You have successfully signed up.\nWelcome to the Santana Club ${name}!`);
            window.location.href = 'home.html';
        } else {
            alert('Please fill out the form correctly.');
        }
    });

    function validateForm(name, surname, email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return name.trim() !== '' && surname.trim() !== '' && emailPattern.test(email);
    }
});