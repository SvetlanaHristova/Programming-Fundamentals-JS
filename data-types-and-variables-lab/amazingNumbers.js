function amazingNumbers2(num) { 
    let numToString = num.toString();
    let sum = 0;

    for (i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }

    let result = sum.toString().includes('9');

    console.log(result
        ? `${num} Amazing? True`
        : `${num} Amazing? False`)
}
amazingNumbers2(1233)
amazingNumbers2(999)