function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let stringOfSum = sum + '';
    let float = false;

    for (let i = 0; i < stringOfSum.length; i++) {
        let currentSimbol = stringOfSum[i];

        if (currentSimbol === '.') {
            console.log(`${sum} - Float`);
            float = true;
            break;
        }
    }

    if (!float) {
        console.log(`${sum} - Integer`);
    }
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);