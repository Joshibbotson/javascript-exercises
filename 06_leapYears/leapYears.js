const leapYears = function(year) {
let leapYear;

if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0 ) {
    return leapYear = true;
}

if (year % 4 === 0 && year % 100 === 0) {
    return leapYear = false;
}

if (year % 4 === 0) {
    return leapYear = true;
}

else {
    return leapYear = false;
}
};


leapYears(1985)

//leap year is any year divisble by four (true), unless divisble by 100 (false), unless divible by 400 (true)

// Do not edit below this line
module.exports = leapYears;
