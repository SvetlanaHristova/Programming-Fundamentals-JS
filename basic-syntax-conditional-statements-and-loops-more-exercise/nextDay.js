function nextDay(year, month, day) {
    if (((day == 29 && month == 2) || (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11))
        || (day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)))) {
        day = 1;
        if (month == 12) {
            month = 1;
            year += 1;
        } else {
            month += 1;
        }
    } else {
        day += 1;
    }
    if (day == 28 && (!((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && month == 2)) {
        day += 1;

    }
    if (year < 100) {
        year += 1900;
    }
    console.log(`${year}-${month}-${day}`);
}
 nextDay(1900, 2, 28)