export function daysInMonth(month: number, year: number) {
    const date: Date = new Date(year, month,0)
    const days: number = date.getDate()
    console.log(days)
}