"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysInMonth = void 0;
function daysInMonth(month, year) {
    var date = new Date(year, month, 0);
    var days = date.getDate();
    console.log(days);
}
exports.daysInMonth = daysInMonth;
//# sourceMappingURL=index.js.map