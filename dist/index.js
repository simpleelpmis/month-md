"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelMonthTable = exports.monthTable = exports.weekDay = exports.daysInMonth = void 0;
const json_language = `{
	"en":["Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"],
	"es":["domingo",
		"lunes",
		"martes",
		"miércoles",
		"jueves",
		"viernes",
		"sábado"],
	"fr":["dimanche",
		"lundi",
		"mardi",
		"mercredi",
		"jeudi",
		"vendredi",
		"samedi"],
	"pt":["Domingo",
		"Segunda-feira",
		"Terça-feira",
		"Quarta-feira",
		"Quinta-feira",
		"Sexta-feira",
		"Sábado"],
	"kr":"[일요일",
		"월요일",
		"화요일",
		"수요일",
		"목요일",
		"금요일",
		"토요일"]
}`;
const language = JSON.parse(json_language.toString());
console.log(language);
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
function monthTable(year = 0, month = 0, lang = 'en') {
    const today = new Date();
    if (typeof (year) == 'string') {
        lang = year;
        year = 0;
    }
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
        monthTable += language[lang][i] + '|';
    }
    monthTable += breakLine + tableDivider;
    const divider = ':---:';
    for (let i = 0; i <= 6; i++) {
        const dayLength = language[lang][i].length;
        monthTable += divider.padEnd(dayLength, ' ') + '|';
    }
    monthTable += breakLine + tableDivider;
    for (let i = 0; i < (daysNum + weekDayNum); i++) {
        weekDaysDone = (i % 7);
        const dayLength = language[lang][weekDaysDone].length;
        if (i < weekDayNum) {
            monthTable += '|'.padStart(dayLength + 1, ' ');
        }
        else {
            const dayNumString = String(i - weekDayNum + 1);
            monthTable += dayNumString.padEnd(dayLength, ' ') + '|';
        }
        if (((i != 0) && (weekDaysDone == 6)) && (i + 1 != (daysNum + weekDayNum))) {
            monthTable += breakLine + tableDivider;
        }
    }
    weekDaysDone = weekDaysDone + 1;
    while (weekDaysDone < 7) {
        const dayLength = language[lang][weekDaysDone].length;
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
