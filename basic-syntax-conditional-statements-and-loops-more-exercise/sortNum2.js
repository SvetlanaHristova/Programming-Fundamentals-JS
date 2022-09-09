function sortNum(a, b, c) {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let avg = 0;
    if (a < max && a > min) {
        avg = a;
    } else if((b < max && b > min)||a===b) {
        avg = b;
    } else {
        avg = c;
    }
    console.log(`${max}\n${avg}\n${min}`);
}

sortNum(2, 6, 6)