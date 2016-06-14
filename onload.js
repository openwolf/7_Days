function isInteger(obj) {
	return typeof obj === 'number' && obj % 1 === 0
}
$(function () {
	$(document).on("click",".t7_calendar tbody td",function(){
		console.log(1);
		console.log($(this)[0].dayData);
	});
    /* 初始化 */
    tab_init();
	var year_val = parseInt($("#year_val").val());
	var month_val = parseInt($("#month_val").val());
	var btn = $("#btn");
	btn.on("click", function () {
		var year_val = parseInt($("#year_val").val());
		var month_val = parseInt($("#month_val").val());
		$("#year_val").removeClass("bg");
		$("#month_val").removeClass("bg");
		if (isInteger(year_val)) {
			if( year_val < 1970 || year_val > 2200 ){
				alert("请输入1970至2200之间的年份");
				$("#year_val").addClass("bg");
				return false;
			}
		} else {
			$("#year_val").addClass("bg");
			alert("请输入年份整数");
			return false;
		}
		if (isInteger(month_val)) {
			if( month_val < 0 || month_val > 12 ){
				alert("请输入1至12之间的月份");
				$("#month_val").addClass("bg");
				return false;
			}
		} else {
			$("#month_val").addClass("bg");
			alert("请输入月份整数");
			return false;
		}
		month_table( year_val , month_val );
	});
});
