$(document).ready(function(){
	var chart1 = AmCharts.makeChart("main_chart", {
		"type": "serial", //그래프 타입
		"columnWidth": 0.5, //그래프 가로길이
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
			"axisThickness": 2, //밑 선 두께
			"gridThickness": 0, //  세로 선 없애기
			"color": "#a5a8b1", //  하단 텍스트 색상
			"fontSize": 12, // 하단 텍스트 크기
			"boldLabels": true, // 하단 텍스트 bold
		},
		"trendLines": [],
		"graphs": [
			{   //파랑색 선 그래프
				"balloonText": "[[title]] : [[value]]",
			    "title": "총 매출",
				"valueField": "column-4",
				"id": "Graph-4", // 그래프 ID
				"fillColors": "#4661ee", // 채우기 면 색상
				"fillAlphas": 0.15, // 채우기 면 투명도
				"lineColor": "#4661ee", // 채우기 선 색상
				"bullet": "round",  // 버튼 라운드
				"bulletAlpha": 0,  // 선 동그라미 없앰
				"valueAxis": "ValueAxis-2",
			},
			{    // 파랑색 면 그래프
				"balloonText": "[[title]] : [[value]]",
				"type": "column", // 그래프 타입
				"title": "정액 선물",
				"valueField": "column-1",
				"id": "Graph-1",
				"fillColors": "#5d77fe", // 채우기 면 색상
				"fillAlphas": 1, // 채우기 면 투명도
				"lineThickness": 0, // 채우기 선 길이 없앰
				"valueAxis": "ValueAxis-1",
			},
			{    // 하늘색 면 그래프
				"balloonText": "[[title]] : [[value]]",
				"type": "column", // 그래프 타입
				"title": "정액 후불",
				"valueField": "column-2",
				"id": "Graph-2",
				"fillColors": "#3ab5ff", // 채우기 면 색상
				"fillAlphas": 1, // 채우기 면 투명도
				"lineThickness": 0, // 채우기 선 길이 없앰
				"valueAxis": "ValueAxis-1",
			},
			{    // 겨자색 면 그래프
				"balloonText": "[[title]] : [[value]]",
				"type": "column", // 그래프 타입
				"title": "단품 선불",
				"id": "Graph-3",
				"valueField": "column-3",
				"fillColors": "#ecb700", // 채우기 면 색상
				"fillAlphas": 1, // 채우기 면 투명도
				"lineThickness": 0, // 채우기 선 길이 없앰
				"valueAxis": "ValueAxis-1",
			}
		],
		"guides": [],
		"valueAxes": [
			{
				"axisColor": "#fff", // 왼쪽 축 색상
				"color": "#5c5f66",
				"boldLabels": true, // 하단 텍스트 bold
				// "gridColor": "#dae0ec", // 그리드 선 색상
				// "gridThickness": 2, // 그리드 선 굵기
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
			"valueWidth": 0 // value 없애기
		},
		"titles": [
			{ //상단 title
				"size": 0, //타이틀 없애기
			}
		],
		"dataProvider": [
			{
				"category": "01",
				"column-1": 400000000,
				"column-2": 300000000,
				"column-3": 200000000,
				"column-4": 800000000
			},
			{
				"category": "02",
				"column-1": 100000000,
				"column-2": 200000000,
				"column-3": 200000000,
				"column-4": 900000000,
			},
			{
				"category": "03",
				"column-1": 200000000,
				"column-2": 300000000,
				"column-3": 500000000,
				"column-4": 600000000,
			},
			{
				"category": "04",
				"column-1": 100000000,
				"column-2": 300000000,
				"column-3": 500000000,
				"column-4": 500000000,
			},
			{
				"category": "05",
				"column-1": 400000000,
				"column-2": 300000000,
				"column-3": 200000000,
				"column-4": 800000000,
			},
			{
				"category": "06",
				"column-1": 500000000,
				"column-2": 700000000,
				"column-3": 800000000,
				"column-4": 700000000,
			},
			{
				"category": "07",
				"column-1": 100000000,
				"column-2": 300000000,
				"column-3": 600000000,
				"column-4": 800000000,
			},
			{
				"category": "08",
				"column-1": 300000000,
				"column-2": 200000000,
				"column-3": 100000000,
				"column-4": 900000000,
			},
			{
				"category": "09",
				"column-1": 100000000,
				"column-2": 200000000,
				"column-3": 100000000,
				"column-4": 600000000,
			},
			{
				"category": "10",
				"column-1": 300000000,
				"column-2": 500000000,
				"column-3": 400000000,
				"column-4": 500000000,
			},
			{
				"category": "11",
				"column-1": 300000000,
				"column-2": 400000000,
				"column-3": 500000000,
				"column-4": 400000000,
			},
			{
				"category": "12",
				"column-1": 600000000,
				"column-2": 600000000,
				"column-3": 600000000,
				"column-4": 700000000,
			},
			{
				"category": "13",
				"column-1": 500000000,
				"column-2": 500000000,
				"column-3": 600000000,
				"column-4": 600000000,
			},
			{
				"category": "14",
				"column-1": 400000000,
				"column-2": 500000000,
				"column-3": 600000000,
				"column-4": 700000000,
			},
			{
				"category": "15",
				"column-1": 200000000,
				"column-2": 300000000,
				"column-3": 300000000,
				"column-4": 800000000,
			},
			{
				"category": "16",
				"column-1": 300000000,
				"column-2": 600000000,
				"column-3": 400000000,
				"column-4": 600000000,
			},
			{
				"category": "17",
				"column-1": 100000000,
				"column-2": 200000000,
				"column-3": 500000000,
				"column-4": 500000000,
			},
			{
				"category": "18",
				"column-1": 300000000,
				"column-2": 400000000,
				"column-3": 500000000,
				"column-4": 800000000,
			},
			{
				"category": "19",
				"column-1": 200000000,
				"column-2": 200000000,
				"column-3": 500000000,
				"column-4": 800000000,
			},
			{
				"category": "20",
				"column-1": 100000000,
				"column-2": 200000000,
				"column-3": 200000000,
				"column-4": 900000000,
			},
			{
				"category": "21",
				"column-1": 100000000,
				"column-2": 300000000,
				"column-3": 400000000,
				"column-4": 500000000,
			},
			{
				"category": "22",
				"column-1": 400000000,
				"column-2": 400000000,
				"column-3": 500000000,
				"column-4": 600000000,
			},
			{
				"category": "23",
				"column-1": 300000000,
				"column-2": 500000000,
				"column-3": 600000000,
				"column-4": 700000000,
			},
			{
				"category": "24",
				"column-1": 200000000,
				"column-2": 300000000,
				"column-3": 300000000,
				"column-4": 800000000,
			},
			{
				"category": "25",
				"column-1": 400000000,
				"column-2": 500000000,
				"column-3": 500000000,
				"column-4": 900000000,
			},
			{
				"category": "26",
				"column-1": 300000000,
				"column-2": 400000000,
				"column-3": 500000000,
				"column-4": 500000000,
			},
			{
				"category": "27",
				"column-1": 200000000,
				"column-2": 200000000,
				"column-3": 300000000,
				"column-4": 800000000,
			},
			{
				"category": "28",
				"column-1": 100000000,
				"column-2": 200000000,
				"column-3": 400000000,
				"column-4": 700000000,
			},
			{
				"category": "29",
				"column-1": 500000000,
				"column-2": 200000000,
				"column-3": 100000000,
				"column-4": 800000000,
			},
			{
				"category": "30",
				"column-1": 300000000,
				"column-2": 400000000,
				"column-3": 500000000,
				"column-4": 900000000,
			},
		]
	});
});

