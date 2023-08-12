const contenedor = document.querySelector('.container');
const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');
display.value = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === 'C') {
            display.value = '0';
        } else {
            if (display.value === '0') {
                display.value = buttonText;
            } else {
                display.value += buttonText;
            }
        }
    });
});
