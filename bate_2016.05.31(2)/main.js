function month_arr(year) {
	var run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
	//    console.log(run);
	var february = run ? 29 : 28;
	var monthDays = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	return monthDays;
}


function month_table(year, month) {
//	星期
	var week_arr = ['日','一','二','三','四','五','六'];
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
	var tbody = $(".t7_calendar tbody")
	tbody.empty();
	for (var i = 0; i < 6; i++) {
		var tr = document.createElement("tr");
		for (var j = 0; j < 7; j++) {
			var td = document.createElement("td");
			if ((i * 7 + j) < first_day) {
//				str.push(first_year + '-' + (prev_month + 1) + '-' + (monthDays[prev_month] + ((i * 7 + j) - first_day + 1)));
				td.dayData = { 
					'year' : first_year,
					'month' : prev_month + 1,
					'day' : monthDays[prev_month] + ((i * 7 + j) - first_day + 1),
					'week' : week_arr[j]
				};
				td.innerHTML = monthDays[prev_month] + ((i * 7 + j) - first_day + 1);
			} else if ((i * 7 + j) >= first_day && (i * 7 + j) < (first_day + monthDays[now_month])) {
//				str.push(year + '-' + (now_month + 1) + '-' + ((i * 7 + j) - first_day + 1));
				td.dayData = { 
					'year' : year,
					'month' : now_month + 1,
					'day' : ((i * 7 + j) - first_day + 1),
					'week' : week_arr[j]
				};
				td.innerHTML = ((i * 7 + j) - first_day + 1);
			} else {
//				str.push(second_year + '-' + (next_month + 1) + '-' + ((i * 7 + j) + 1 - first_day - monthDays[now_month]));
				td.dayData = { 
					'year' : second_year,
					'month' : next_month + 1,
					'day' : ((i * 7 + j) + 1 - first_day - monthDays[now_month]),
					'week' : week_arr[j]
				};
				td.innerHTML = ((i * 7 + j) + 1 - first_day - monthDays[now_month])
			}
			$(tr).append(td);
		}
		tbody.append(tr);
	}
}