const clear = document.querySelector(".clear")
const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display")

function clearInput() {
    display.value = ""
}
function enteredValue(valor) {
    display.value += valor
}

function clearDisplay() {
    display.value = ""
}

function back() {
    display.value = display.value.slice(0, - 1)
}

function calculate() {
    if (display.value) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Erro';
        }
    } else {
        display.value = '';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim()

        if (value == 'C') {
            clearDisplay();
        } else if (value == '⌫') {
            back();
        } else if (value == '=') {
            calculate();
        } else if (value == ',') {
            enteredValue('.');
        } else if (value == '√') {
            display.value = Math.sqrt(display.value);
        } else if (value == '%') {
            display.value = parseFloat(display.value) / 100;
        } else {
            enteredValue(value);
        }
    });
});
