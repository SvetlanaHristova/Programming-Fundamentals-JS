function vacation(grupOf, type, dayOfWeek) {
    let price = 0;

    if (type === 'Students') {
        switch (dayOfWeek) {
            case 'Friday': price = grupOf * 8.45; break;
            case 'Saturday': price = grupOf * 9.8; break;
            case 'Sunday': price = grupOf * 10.46; break;
        }
        if (grupOf >= 30) {
            price = price * 0.85;
        }
    }

    if (type === 'Business') {

        if (grupOf >= 100) {
            grupOf -= 10;
        }

        switch (dayOfWeek) {
            case 'Friday': price = grupOf * 10.90; break;
            case 'Saturday': price = grupOf * 15.60; break;
            case 'Sunday': price = grupOf * 16; break;
        }

    }

    if (type === 'Regular') {

        switch (dayOfWeek) {
            case 'Friday': price = grupOf * 15; break;
            case 'Saturday': price = grupOf * 20; break;
            case 'Sunday': price = grupOf * 22.50; break;
        }
        
        if (grupOf >= 10 && grupOf <= 20) {
            price = price * 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday")