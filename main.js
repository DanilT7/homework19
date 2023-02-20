const btnEls = document.querySelectorAll('button');
const inputEls = document.querySelectorAll('input');

btnEls.forEach(function (el) {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = el.closest('form');
        const input = parent.querySelector('input');
        if(input.value) {
            if(input.value.startsWith('http://') || input.value.startsWith('https://')) {
            // window.location.href = input.value;
            const url = input.value;
            window.open(url, '_blank').focus();
        } else {
            // window.location.href = `https://${input.value}`;
            const url = 'https://' + input.value
            window.open(url, '_blank').focus();
        }
        } else {
            console.log('Input is empty');
        }
    });
} )





