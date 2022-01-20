let counter = 1;

setInterval( () => {
    counter++;
    if(counter == 5){
        counter = 1;
    }

    document.getElementById('radio' + counter).checked = true;
}, 5000)