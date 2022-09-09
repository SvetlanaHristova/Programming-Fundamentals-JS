function repeatString(str,numberOfRepeat) {
    let string='';
    for (let i=1;i<=numberOfRepeat;i++){
        string+=str
    }
    return string;
}
console.log((repeatString("abc", 3)))
console.log(repeatString("String", 2))