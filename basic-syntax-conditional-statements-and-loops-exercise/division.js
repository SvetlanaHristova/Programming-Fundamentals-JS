function division(num) {
    let dev = 0;
    devisible = true;

    if (num % 10 === 0) {
        dev = 10;
    } else if (num % 7 === 0) {
        dev = 7;
    } else if (num % 6 === 0) {
        dev = 6;
    } else if (num % 3 === 0) {
        dev = 3;
    } else if (num % 2 === 0) {
        dev = 2;
    } else {
        console.log('Not divisible');
        devisible = false;
    }

    if (devisible) {
        console.log(`The number is divisible by ${dev}`);
    }

}

division(80)