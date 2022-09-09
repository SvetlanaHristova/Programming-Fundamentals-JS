function printAndSum(start, end) {
    let sum = 0;
    let printLine = '';

    for (i = start; i <= end; i++) {
        sum += i;
        if (i === end) {
            printLine += `${i}`;
        } else {
            printLine += `${i} `;
        }
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)