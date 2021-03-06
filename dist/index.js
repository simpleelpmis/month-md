"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthTable = exports.weekDay = exports.daysInMonth = void 0;
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
function monthTable(year, month) {
    const daysNum = daysInMonth(year, month);
    const weekDayNum = weekDay(year, month);
    const breakLine = '\n|';
    let monthTable = '|';
    let weekDaysDone = 0;
    let weekDaysRemain = 7;
    let WeekDays;
    (function (WeekDays) {
        WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
        WeekDays[WeekDays["Monday"] = 1] = "Monday";
        WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
        WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
        WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
        WeekDays[WeekDays["Friday"] = 5] = "Friday";
        WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    })(WeekDays || (WeekDays = {}));
    for (let i = 0; i <= 6; i++) {
        monthTable += WeekDays[i] + '|';
    }
    monthTable += breakLine;
    let divider = ':---:';
    for (let i = 0; i <= 6; i++) {
        let dayLength = WeekDays[i].length;
        monthTable += divider.padEnd(dayLength, ' ') + '|';
    }
    monthTable += breakLine;
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
            monthTable += breakLine;
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
//# sourceMappingURL=index.js.map