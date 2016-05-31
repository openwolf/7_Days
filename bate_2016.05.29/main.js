//var calendar = {
//    isLeap: function (vYear) {
//        return vYear % 400 == 0 || (vYear % 4 == 0 && vYear % 100 != 0);
//    },
//    getFebruaryDays: function (vYear) {
//        return this.isLeap(vYear) ? 29 : 28;
//    }
//}

//本月第一天的星期数可以根据new Date(currentYear, currentMonth, 1).getDay()得出。

//monthDays = [ 31, this.getFebruaryDays(this.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
//用来存放月份。
//var a = new Date(2016,4,1).getDay();
//以上可以得到这个月第一天是周几
function month_arr(year) {
    var run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
    //    console.log(run);
    var february = run ? 29 : 28;
    var monthDays = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthDays;
}

function week_num(year, month) {
    return new Date(year, month, 1).getDay();
}

function month_table(year, month) {
    var now_month = month - 1;

    var prev_month = now_month - 1;

    var prev_year = year - 1;

    var n = 1;

    if (prev_month < 0) {
        prev_month = 12;
    }
    var monthDays = month_arr(year);

    var now_week = week_num(year, now_month);

    for (var i = 0; i < 6; i++) {
        var str = '';
        for (var j = 0; j < 7; j++) {
            if (n <= monthDays[now_month]) {
                if (j >= now_week || n > 1) {
                    if (n < 10) {
                        str += " " + n + " ";
                    } else {
                        str += n + " ";
                    }
                    n++;
                } else {
                    str += "   ";
                }
            } else {
                str += "   ";
            }
        }
        console.log(str)
    }
}
/*
    版本描述 这是个只能打印出当前月份的版本
*/