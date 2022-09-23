function integerAndFloat2(a, b, c) { 
    let sum = a + b + c;
    sum % 1 == 0
        ? console.log(`${sum} - Integer`)
        : console.log(`${sum} - Float`);
}
integerAndFloat2(9, 100, 1.1);
integerAndFloat2(100, 200, 303);