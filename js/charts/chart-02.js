$(document).ready(function(){
	var chart1 = AmCharts.makeChart("chart_02", {
		"type": "serial", //그래프 타입
		"columnWidth": 0.3, //그래프 가로길이
		"fontFamily": "Malgun Gothic",
		"color": "#5c5f66", //  하단 텍스트 색상
		"columnSpacing":2.5, // 그래프 사이길이
		"fontFamily":'Noto Sans KR', //그래프 폰트 종류
		"autoMarginOffset": 0, // 그래프 왼쪽 공간 없애기
		"fontSize": 12, //그래프 폰트 사이즈
		"creditsPosition": "bottom-right", // 로고 링크 오른쪽 아래
		"categoryField": "category", //그래프 하단 이름
		"processCount": 100000000,  // 숫자 몇까지 있는지
		"marginTop": 0, //margin-top 0
		"categoryAxis": {
			"gridPosition": "start", // 밑 시작 부분
			"axisColor": "#d9dee8", // 밑 선 색상
			"gridThickness": 0, //  세로 선 없애기
			"color": "#a5a8b1", //  하단 텍스트 색상
			"fontSize": 12, // 하단 텍스트 크기
			"boldLabels": true, // 하단 텍스트 bold
		},
		"trendLines": [],
		"graphs": [
			{    // 보라색 면 그래프
				"balloonText": "[[title]] : [[value]]",
				"balloonColor": "#25a0ea", // 말풍선 색상
				"type": "column", // 그래프 타입
				"title": "가입",
				"valueField": "column-1",
				"id": "Graph-1",
				"fillColors": "#3ab5ff", // 채우기 면 색상
				"fillAlphas": 1, // 채우기 면 투명도
				"lineThickness": 0, // 채우기 선 길이 없앰
				"valueAxis": "ValueAxis-1",
			},
			{    // 겨자색 면 그래프
				"balloonText": "[[title]] : [[value]]",
				"balloonColor": "#ff6600", // 말풍선 색상
				"type": "column", // 그래프 타입
				"title": "탈퇴",
				"valueField": "column-2",
				"id": "Graph-2",
				"fillColors": "#e77b48", // 채우기 면 색상
				"fillAlphas": 1, // 채우기 면 투명도
				"lineThickness": 0, // 채우기 선 길이 없앰
				"valueAxis": "ValueAxis-1",
			},
		],
		"guides": [],
		"valueAxes": [
			{
				"axisColor": "#fff", // 왼쪽 축 색상
				"color": "#5c5f66",
				"boldLabels": true, // 하단 텍스트 bold
				"autoWrap": true, // 하단 텍스트 bold
				"autoGridCount": false, // 그리드 y측 자동 없애기
				"minimum": -2000000000, // 그리드 y측 부터
				"maximum": 2000000000, //그리드 y측 까지
				// "gridColor": "#dae0ec", // 그리드 선 색상
				// "gridThickness": 2, // 그리드 선 굵기
				"stackType": "regular", // 그리드 타입
			},
		],
		"allLabels": [],
		"balloon": { //hover시 나오는 말풍선
			"adjustBorderColor": false, //원래 그리드 색상
			"borderAlpha": 0, //border 없앰
			"borderThickness": 0, //border 그림자
			"fillAlpha": 1, // 투명도 
		    "color": "#FFF", //텍스트 색상
		},
		"chartCursor": {
			"cursorColor": "#4661ee", // 커서 라인 색상
			"avoidBalloonOverlapping": true, // 말풍선 겹치지 않게 해줌
			"categoryBalloonEnabled": false, // 하단 말풍선 없애기
		},
		"legend": { //하단 설명 
			"enabled": true, // 리스트 나타내기
			"useGraphSettings": true, // 리스트 나타내기2
			"position": "top", // top 위치
			"align": "right", // right 위치
			"valueWidth": 0 // 리스트 value 값 없애기
		},
		"titles": [
			{ //상단 title
				"size": 0, //타이틀 없애기
			}
		],
		"dataProvider": [
			{
				"category": "01",
				"column-1": -811200000,
				"column-2": 803400000,
			},
			{
				"category": "02",
				"column-1": -811500000,
				"column-2": 803100000,
			},
			{
				"category": "03",
				"column-1": -816500000,
				"column-2": 806100000,
			},
			{
				"category": "04",
				"column-1": -841500000,
				"column-2": 883100000,
			},
			{
				"category": "05",
				"column-1": -891500000,
				"column-2": 886100000,
			},
			{
				"category": "06",
				"column-1": -881500000,
				"column-2": 886100000,
			},
			{
				"category": "07",
				"column-1": -871500000,
				"column-2": 816100000,
			},
			{
				"category": "08",
				"column-1": -841500000,
				"column-2": 883100000,
			},
			{
				"category": "09",
				"column-1": -881500000,
				"column-2": 886100000,
			},
			{
				"category": "10",
				"column-1": -871500000,
				"column-2": 856100000,
			},
			{
				"category": "11",
				"column-1": -871500000,
				"column-2": 833100000,
			},
			{
				"category": "12",
				"column-1": -811500000,
				"column-2": 803100000,
			},
			{
				"category": "13",
				"column-1": -831500000,
				"column-2": 853100000,
			},
			{
				"category": "14",
				"column-1": -841500000,
				"column-2": 826100000,
			},
			{
				"category": "15",
				"column-1": -821500000,
				"column-2": 873100000,
			},
			{
				"category": "16",
				"column-1": -861500000,
				"column-2": 813100000,
			},
			{
				"category": "17",
				"column-1": -821500000,
				"column-2": 843100000,
			},
			{
				"category": "18",
				"column-1": -871500000,
				"column-2": 863100000,
			},
			{
				"category": "19",
				"column-1": -811500000,
				"column-2": 823100000,
			},
			{
				"category": "20",
				"column-1": -851500000,
				"column-2": 823100000,
			},
			{
				"category": "21",
				"column-1": -841500000,
				"column-2": 883100000,
			},
			{
				"category": "22",
				"column-1": -821500000,
				"column-2": 842100000,
			},
			{
				"category": "23",
				"column-1": -811500000,
				"column-2": 863100000,
			},
			{
				"category": "24",
				"column-1": -881500000,
				"column-2": 893100000,
			},
			{
				"category": "25",
				"column-1": -801500000,
				"column-2": 823100000,
			},
			{
				"category": "26",
				"column-1": -881500000,
				"column-2": 873100000,
			},
			{
				"category": "27",
				"column-1": -851500000,
				"column-2": 823100000,
			},
			{
				"category": "28",
				"column-1": -811500000,
				"column-2": 893100000,
			},
			{
				"category": "29",
				"column-1": -841500000,
				"column-2": 863100000,
			},
			{
				"category": "30",
				"column-1": -891500000,
				"column-2": 813100000,
			},
		]
	});
});




