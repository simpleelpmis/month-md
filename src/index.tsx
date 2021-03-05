export function daysInMonth(month: number, year: number) {
    const dateObj: Date = new Date(year, month, 0)
    const daysNum: number = dateObj.getDate()
    return daysNum
}

export function weekDay(month: number, year: number) {
    const dateObj: Date = new Date(year, month - 1, 1)
    const weekDayNum: number = dateObj.getDay()
    return weekDayNum
}

export function monthTable(month: number, year: number) {
    const daysNum: number = daysInMonth(month, year)
    const weekDayNum: number = weekDay(month, year)
    const breakLine: string = '\n|'
    let monthTable: string = '|'
    let weekDaysDone: number = 0
    let weekDaysRemain: number = 7
    enum WeekDays {
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    }

    for (let i: number = 0; i <= 6; i++) {
        monthTable += WeekDays[i] + '|'
    }
    monthTable += breakLine

    for (let i: number = 0; i <= 6; i++) {
        monthTable += ':---:|'
    }
    monthTable += breakLine

    for (let i: number = 0; i < (daysNum + weekDayNum); i++) {
        if (i < weekDayNum) {
            monthTable += '  |'
        } else {
            monthTable += (i - weekDayNum + 1) + '|'
        }
        weekDaysDone = (i % 7)
        if ((i != 0) && (weekDaysDone == 0)) {
            monthTable += breakLine
        }
    }

    weekDaysRemain = weekDaysRemain - weekDaysDone
    while (weekDaysRemain > 0) {
        monthTable += '  |'
        weekDaysRemain--;
    }
    return monthTable.slice(0, -1)
}
