function month_arr(year) {
    var run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
    var february = run ? 29 : 28;
    var monthDays = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthDays;
}

function set_td_val(obj, year, month, day, week) {
    obj.dayData = {
        'year': year,
        'month': month,
        'day': day,
        'week': week
    };
    obj.innerHTML = day;
}

function tab_init() {
    var now = new Date(),
        year = now.getFullYear(),
        month = (now.getMonth() + 1) < 10 ? "0"+(now.getMonth() + 1) : now.getMonth() + 1 ,
        day = now.getDate();
    $(".year span").html(year+"年");
    $(".month span").html(month+"月");
    month_table( year, month);
}

function month_table(year, month) {
    console.time("t1");
    //计算循环的值
    var sum = 0;
    //	星期
    var week_arr = ['日', '一', '二', '三', '四', '五', '六'];
    //	当前月的索引值 
    var now_month = month - 1;
    //	当前月第一天是周几 
    var first_day = new Date(year, now_month, 1).getDay();
    //	每月最大值数组
    var monthDays = month_arr(year);
    //	上一个月的索引值
    var prev_month = now_month - 1;
    //	下一个月的索引值
    var next_month = now_month + 1;
    //	日历头部的年份
    var first_year = year;
    //	日历尾部的年份
    var second_year = year;
    //	从传入月份的索引判断日历头部的年分 和 日历尾部的年份
    if (now_month === 0) {
        prev_month = 11;
        first_year = year - 1;
    } else if (now_month === 11) {
        next_month = 0;
        second_year = year + 1;
    }
    //	画表
    $(".t7_calendar tbody").empty();
    var tbody_content = document.createDocumentFragment();
    for (var i = 0; i < 6; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            var td = document.createElement("td");
            sum = i * 7 + j + 1 - first_day;
            if ( sum < 1 ) {
                set_td_val( td, first_year, prev_month + 1, monthDays[prev_month] + sum, week_arr[j]);
            } else if (sum >= 1 && sum < monthDays[now_month] + 1) {
                set_td_val( td, year, now_month + 1, sum, week_arr[j]);
            } else {
                set_td_val( td, second_year, next_month + 1, sum - monthDays[now_month], week_arr[j]);
            }
            tr.appendChild(td);
        }
        tbody_content.appendChild(tr);
    }
    $(".t7_calendar").append(tbody_content);
    console.timeEnd("t1");
}
