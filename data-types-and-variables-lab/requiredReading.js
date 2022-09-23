function requiredReading(totalPages, pagesPerHour, day) {
    let totalHour = totalPages / pagesPerHour;
    let hourPerDay = totalHour / day;
    console.log(hourPerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
