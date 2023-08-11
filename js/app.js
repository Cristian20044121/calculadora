const contenedor = document.querySelector('.container');
const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');
console.log(contenedor)


// Agregamos un manejador de clic para cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === '=') {
            // Realizar el cálculo cuando se presione el botón '='
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === 'C') {
            // Limpiar la pantalla cuando se presione el botón 'C'
            display.value = '';
        } else {
            // Agregar el número u operador al campo de entrada
            display.value += buttonText;
        }
    });
});