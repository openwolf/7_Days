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
//function week_num(year, month) {
//    return new Date(year, month, 1).getDay();
//}

function month_arr(year) {
	var run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
	//    console.log(run);
	var february = run ? 29 : 28;
	var monthDays = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	return monthDays;
}

function month_table(year, month) {
    console.time("t1");
	/* 当前月的索引值 */
	var now_month = month - 1;
	/* 每月最大值数组 */
	var monthDays = month_arr(year);
	/* 当前月第一天是周几 */
	var first_day = new Date(year, now_month, 1).getDay();
	/* flag */
	var flag = true;
	/* 上个月索引值 */
	var prev_month = (now_month - 1) < 0 ? 11 : (now_month - 1);
	/* 下个月索引值 */
	var next_month = (now_month + 1) > 11 ? 1 : (now_month + 1);
	/* 上个月数字值 */
	var before_month = (month - 1) === 0 ? 12 : (month - 1);
	/* 下个月数字值 */
	var after_month = (month + 1) === 13 ? 1 : (month + 1);
	/* 去年 */
	var prev_year = year - 1;
	/* 明年 */
	var next_year = year + 1;
	/* 日历自增量 */
	var n = 1;
	/* 绘图循环 */
	for (var i = 0; i < 6; i++) {
		var str = [];
		for (var j = 0; j < 7; j++) {
			if (!first_day) {
				if (n <= monthDays[now_month] && flag) {
					str.push(year + '-' + (month < 10 ? '0' + month : month) + '-' + (n < 10 ? '0' + n : n));
					n++;
				} else {
					if(flag){
						n = 1;
						flag = false;
					}
					if (now_month === 11) {
						str.push(next_year + '-' + (after_month < 10 ? '0' + after_month : after_month) + '-' + (n < 10 ? '0' + n : n));
					} else {
						str.push(year + '-' + (after_month < 10 ? '0' + after_month : after_month) + '-' + (n < 10 ? '0' + n : n));
					}
					n++;
				}
			} else {
				if (i === 0 && j < first_day) {
					if (now_month === 0) {
						str.push(prev_year + '-' + before_month + '-' + (monthDays[prev_month] - first_day + j + 1 ));
					} else {
						str.push(year + '-' + (before_month < 10 ? '0' + before_month : before_month) + '-' + (monthDays[prev_month] - first_day + j + 1 ));
					}
				} else {
					if (n <= monthDays[now_month] && flag) {
						str.push(year + '-' + (month < 10 ? '0' + month : month) + '-' + (n < 10 ? '0' + n : n));
						n++;
					} else {
						if(flag){
							n = 1;
							flag = false;
						}
						if (now_month === 11) {
							str.push(next_year + '-' + (after_month < 10 ? '0' + after_month : after_month) + '-' + (n < 10 ? '0' + n : n));
						} else {
							str.push(year + '-' + (after_month < 10 ? '0' + after_month : after_month) + '-' + (n < 10 ? '0' + n : n));
						}
						n++;
					}
				}
			}
		}
		console.log(str);
	}
    console.timeEnd("t1");
}
/*
这是个可以打印出以所选月月头为第一行 包括上个月与下个月的版本 但是我觉得循环的判断用问题 下个版本将以对象保存上个月与这个月和下个月的信息再打印出来然后再比较与这个版本的速度
*/