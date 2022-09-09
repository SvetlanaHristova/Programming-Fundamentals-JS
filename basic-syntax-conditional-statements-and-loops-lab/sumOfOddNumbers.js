function sumOfOddNumbers(count) {
    let num = 1;
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        console.log(num);
        sum += num;
        num += 2;
    }
    console.log(`Sum: ${sum}`)
}