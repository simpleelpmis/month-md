"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthTable = exports.weekDay = exports.daysInMonth = void 0;
function daysInMonth(month, year) {
    var dateObj = new Date(year, month, 0);
    var daysNum = dateObj.getDate();
    return daysNum;
}
exports.daysInMonth = daysInMonth;
function weekDay(month, year) {
    var dateObj = new Date(year, month - 1, 1);
    var weekDayNum = dateObj.getDay();
    return weekDayNum;
}
exports.weekDay = weekDay;
function monthTable(month, year) {
    var daysNum = daysInMonth(month, year);
    var weekDayNum = weekDay(month, year);
    var breakLine = '\n|';
    var monthTable = '|';
    var weekDaysDone = 0;
    var weekDaysRemain = 7;
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
    for (var i = 0; i <= 6; i++) {
        monthTable += WeekDays[i] + '|';
    }
    monthTable += breakLine;
    for (var i = 0; i <= 6; i++) {
        monthTable += ':---:|';
    }
    monthTable += breakLine;
    for (var i = 0; i < (daysNum + weekDayNum); i++) {
        if (i < weekDayNum) {
            monthTable += '  |';
        }
        else {
            monthTable += (i - weekDayNum + 1) + '|';
        }
        weekDaysDone = (i % 7);
        if ((i != 0) && (weekDaysDone == 0)) {
            monthTable += breakLine;
        }
    }
    weekDaysRemain = weekDaysRemain - weekDaysDone;
    while (weekDaysRemain > 0) {
        monthTable += '  |';
        weekDaysRemain--;
    }
    return monthTable.slice(0, -1);
}
exports.monthTable = monthTable;
//# sourceMappingURL=index.js.map