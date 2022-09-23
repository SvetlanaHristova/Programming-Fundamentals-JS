function amazingNumbers(num) {
    let numToString = num.toString();
    let sum = 0; 

    for (i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }

    let sumToString = sum + "";
    let digit = 'False'

    for (i = 0; i < sumToString.length; i++) {
        let currentSimbol = sumToString.charAt(i);

        if (currentSimbol == 9) {
            digit = 'True';
            break;
        }
    }
    
    console.log(`${num} Amazing? ${digit}`);
}
amazingNumbers(1233)
amazingNumbers(999)