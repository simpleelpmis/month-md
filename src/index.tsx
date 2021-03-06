export function daysInMonth(year: number, month: number) {
    const dateObj: Date = new Date(year, month, 0)
    const daysNum: number = dateObj.getDate()
    return daysNum
}

export function weekDay(year: number, month: number) {
    const dateObj: Date = new Date(year, month - 1, 1)
    const weekDayNum: number = dateObj.getDay()
    return weekDayNum
}

export function monthTable(year: number, month: number) {
    const daysNum: number = daysInMonth(year, month)
    const weekDayNum: number = weekDay(year, month)
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

    let divider: string = ':---:'

    for (let i: number = 0; i <= 6; i++) {
        let dayLength: number = WeekDays[i].length
        monthTable += divider.padEnd(dayLength, ' ') + '|'
    }

    monthTable += breakLine

    for (let i: number = 0; i < (daysNum + weekDayNum); i++) {
        weekDaysDone = (i % 7)

        let dayLength: number = WeekDays[weekDaysDone].length

        if (i < weekDayNum) {
            monthTable += '|'.padStart(dayLength + 1, ' ')
        } else {
            let dayNumString: string = String(i - weekDayNum + 1)
            monthTable += dayNumString.padEnd(dayLength, ' ') + '|'
        }
        if (((i != 0) && (weekDaysDone == 6)) && (i + 1 != (daysNum + weekDayNum))) {
            monthTable += breakLine
        }
    }

    weekDaysDone = weekDaysDone + 1

    // if (weekDaysDone != 6) {
    while (weekDaysDone < 7) {
        let dayLength: number = WeekDays[weekDaysDone].length
        monthTable += '|'.padStart(dayLength + 1, ' ')
        weekDaysDone++;
    }
    // }

    return monthTable
}
