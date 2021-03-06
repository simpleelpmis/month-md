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

    let divider:string = ':---:'

    for (let i: number = 0; i <= 6; i++) {
        let dayLength:number = WeekDays[i].length
        monthTable += divider.padEnd(dayLength, ' ') + '|'
    }

    monthTable += breakLine

    for (let i: number = 0; i < (daysNum + weekDayNum); i++) {
        weekDaysDone = (i % 7)

        let dayLength:number = WeekDays[weekDaysDone].length

        if (i < weekDayNum) {
            monthTable += '|'.padStart(dayLength+1, ' ')
        } else {
            let dayNumString:string = String(i + 1)
            monthTable += dayNumString.padEnd(dayLength, ' ') + '|'
        }
        if ((i != 0) && (weekDaysDone == 6)) {
            monthTable += breakLine
        }
    }

    weekDaysRemain = weekDaysRemain - weekDaysDone

    while (weekDaysRemain < 7 ) {
        console.log(WeekDays[weekDaysRemain])
        let dayLength:number = WeekDays[weekDaysRemain].length
        monthTable += '|'.padStart(dayLength+1, ' ')
        weekDaysRemain++;
    }
    return monthTable
}
