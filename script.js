let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;


    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };
    this.setDate = function (day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    };
    this.toString = function () {
        alert(this.day + "/" + this.month + "/" + this.year)
    }
};
let date = new MyDate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
alert(date.getDay() + "/" + date.getMonth() + "/" + date.getYear());
date.setDate(12,12,2019);
date.toString();
