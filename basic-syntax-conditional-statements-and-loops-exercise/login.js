function login(input) {
    let index = 0;
    let username = input[index++];
    let pass = '';
    let corner = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }

    while (input[index] !== pass) {
        corner++
        if (corner === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log('Incorrect password. Try again.');
        index++;
    }

    console.log(`User ${username} logged in.`);
}

login(['Acer', 'login', 'go', 'let me in', 'let me in', 'recA'])