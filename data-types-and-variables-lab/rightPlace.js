function rightPlace(string1, char, strin2) {
    let newString = '';

    for (let i = 0; i < string1.length; i++) {
        let currentChar = string1[i];

        if (currentChar == '_') {
            currentChar = char;
        }

        newString += currentChar;
    }

    if (newString == strin2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');

