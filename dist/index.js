"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelMonthTable = exports.monthTable = exports.weekDay = exports.daysInMonth = void 0;
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
})(Months || (Months = {}));
function daysInMonth(year, month) {
    const dateObj = new Date(year, month, 0);
    const daysNum = dateObj.getDate();
    return daysNum;
}
exports.daysInMonth = daysInMonth;
function weekDay(year, month) {
    const dateObj = new Date(year, month - 1, 1);
    const weekDayNum = dateObj.getDay();
    return weekDayNum;
}
exports.weekDay = weekDay;
function monthTable(year = 0, month = 0) {
    const today = new Date();
    if (year == 0) {
        year = today.getFullYear();
    }
    if (month == 0) {
        month = today.getMonth();
    }
    const daysNum = daysInMonth(year, month);
    const weekDayNum = weekDay(year, month);
    const breakLine = '\n';
    const tableDivider = '|';
    let monthTable = tableDivider;
    let weekDaysDone = 0;
    for (let i = 0; i <= 6; i++) {
        monthTable += WeekDays[i] + '|';
    }
    monthTable += breakLine + tableDivider;
    let divider = ':---:';
    for (let i = 0; i <= 6; i++) {
        let dayLength = WeekDays[i].length;
        monthTable += divider.padEnd(dayLength, ' ') + '|';
    }
    monthTable += breakLine + tableDivider;
    for (let i = 0; i < (daysNum + weekDayNum); i++) {
        weekDaysDone = (i % 7);
        let dayLength = WeekDays[weekDaysDone].length;
        if (i < weekDayNum) {
            monthTable += '|'.padStart(dayLength + 1, ' ');
        }
        else {
            let dayNumString = String(i - weekDayNum + 1);
            monthTable += dayNumString.padEnd(dayLength, ' ') + '|';
        }
        if (((i != 0) && (weekDaysDone == 6)) && (i + 1 != (daysNum + weekDayNum))) {
            monthTable += breakLine + tableDivider;
        }
    }
    weekDaysDone = weekDaysDone + 1;
    while (weekDaysDone < 7) {
        let dayLength = WeekDays[weekDaysDone].length;
        monthTable += '|'.padStart(dayLength + 1, ' ');
        weekDaysDone++;
    }
    return monthTable;
}
exports.monthTable = monthTable;
function labelMonthTable(month = 0) {
    const today = new Date();
    if (month == 0) {
        month = today.getMonth();
    }
    const labelMonthTable = `|${Months[month - 1]}|\n|:---:|`;
    return labelMonthTable;
}
exports.labelMonthTable = labelMonthTable;
