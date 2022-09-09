function theatrePromotions(typeDay, age) {
    let prices = 0;
    let isOK = true;
    if (age >= 0 && age <= 18) {
        switch (typeDay) {
            case 'Weekday': prices = 12; break;
            case 'Weekend': prices = 15; break;
            case 'Holiday': prices = 5; break;
        }
    } else if (age > 18 && age <= 64) {
        switch (typeDay) {
            case 'Weekday': prices = 18; break;
            case 'Weekend': prices = 20; break;
            case 'Holiday': prices = 12; break;
        }
    } else if (age > 64 && age <= 122) {
        switch (typeDay) {
            case 'Weekday': prices = 12; break;
            case 'Weekend': prices = 15; break;
            case 'Holiday': prices = 10; break;
        }
    } else {
        console.log('Error!');
        isOK = false;
    }
    if (isOK) {
        console.log(`${prices}$`);
    }
}