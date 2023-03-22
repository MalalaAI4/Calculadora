window.addEventListener('load', () => {
    const keyButtons = document.getElementsByClassName('keypad-button');
    const display = document.querySelector('.calculator-display');

    const keybuttonArray = Array.from(keyButtons);

    keybuttonArray.forEach( (button) => {
        button.addEventListener('click' , () => {
            // console.log (button)
            calculadora(button, display)
        });
    });
});

function calculadora(button, display){
    switch (button.innerHTML){
        case 'C':
            borrar(display);
        break;
        case '=':
            calcular(display);
        break;
        default:
            actualizar(display,button);
        break; 
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display,button){
    if(display.innerHTML == 0 ){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    if (display.innerHTML != 0){
        display.innerHTML = 0;
    }
}