function verificaP(event) {
    if(event.parentNode.classList.contains('expandido')) {
        event.parentNode.classList.remove('expandido');
        event.innerHTML = '+';
    } else {
        event.parentNode.classList.add('expandido');
        event.innerHTML = '-';
    }
}