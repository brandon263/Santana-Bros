document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.ORDER form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const code = document.getElementById('code').value;
        const size = document.getElementById('size').value;
        const color = document.querySelector('input[name="color"]:checked').value;

        if (validateForm(code, size, color)) {
            alert(`WE HAVE RECEIVED YOUR ORDER!\nCODE: ${code}\nSIZE: ${size}\nCOLOR: ${color}`);
        } else {
            alert('Please fill out the form correctly.');
        }
    });

    function validateForm(code, size, color) {
        const codePattern = /^00[0-9]*$/;
        const sizePattern = /^(S|M|L|XL|XXL)$/;

        return codePattern.test(code) && sizePattern.test(size) && color;
    }
});