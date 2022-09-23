function rightPlace2(string1, char, string2) {  
    let newString = string1.replace('_', char);

    newString == string2
        ? console.log('Matched')
        : console.log('Not Matched');
}
rightPlace2('str_ng1', 'E', 'strin2');