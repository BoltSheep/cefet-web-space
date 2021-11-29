function verificaP(event) {
    if(event.parentNode.classList.contains('expandido')) {
        event.parentNode.classList.remove('expandido');
    } else {
        event.parentNode.classList.add('expandido');
    }
}