function triplesOfLatinLetters(num) {
    let step = Number(num);
    
    for (i = 1; i <= step; i++) {
        let letter1 = String.fromCharCode(96 + i);

        for (let j = 1; j <= step; j++) {
            let letter2 = String.fromCharCode(96 + j);

            for (let k = 1; k <= step; k++) {

                let letter3 = String.fromCharCode(96 + k);
                console.log(letter1 + letter2 + letter3)
                
            }
        }
    }
}
triplesOfLatinLetters('3');
triplesOfLatinLetters('2');