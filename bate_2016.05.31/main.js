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
	/* 当前月第一天是周几 */
	var first_day = new Date(year, now_month, 1).getDay();
	/* 每月最大值数组 */
	var monthDays = month_arr(year);
	/* 上一个月的索引值 */
	var prev_month = now_month - 1;
	/* 下一个月的索引值 */
	var next_month = now_month + 1;
	/* 日历头部的年份 */
	var first_year = year;
	/* 日历尾部的年份 */
	var second_year = year;
	/*  */
	if (now_month === 0) {
		prev_month = 11;
		first_year = year - 1;
	} else if (now_month === 11) {
		next_month = 0;
		second_year = year + 1;
	}
	/* 绘图循环 */
	for (var i = 0; i < 6; i++) {
		var str = [];
		for (var j = 0; j < 7; j++) {
			if ((i * 7 + j) < first_day) {
				str.push(first_year + '-' + (prev_month + 1) + '-' + (monthDays[prev_month] + ((i * 7 + j) - first_day + 1)));
			} else if ((i * 7 + j) >= first_day && (i * 7 + j) < (first_day + monthDays[now_month])) {
				str.push(year + '-' + (now_month + 1) + '-' + ((i * 7 + j) - first_day + 1));
			} else {
				str.push(second_year + '-' + (next_month + 1) + '-' + ((i * 7 + j) + 1 - first_day - monthDays[now_month]));
			}
		}
		console.log(str);
	}
	console.timeEnd("t1");
}
