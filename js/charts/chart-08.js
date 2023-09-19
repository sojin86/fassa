$(document).ready(function(){
	var chart1 = AmCharts.makeChart("chart_08", {
		"type": "pie", // 그래프 타입
		"radius": "50%", // 원 크기
		"innerRadius": "60%", // 원 선 크기
		"labelRadius": -20, // 글자 가운데
		"fontSize": 12, //그래프 폰트 사이즈
		"creditsPosition": "bottom-right", // 로고 링크 오른쪽 아래
		"labelText": " [[column-1]]%", // 라벨텍스트 내용
		'startDuration': '0', // 처음 시작
		"color": "#ffffff", // 글씨체 변경
		"colors": [  // 차트 생상
			"#5076dc",
			"#3c9fff",
			"#f2cd00",
			"#f26c4f",
		],
		"valueField": "column-1",
		"allLabels": [],
		"balloon": {
			"enabled": false, // 말풍선 없애기
		},
		"legend": {
			"enabled" : false, //legend 리스트 없애기
		},
		"titles": [],
		"dataProvider": [
			{
				"category": "조정 사유1",
				"column-1": "48"
			},
			{
				"category": "조정 사유 2",
				"column-1": "28"
			},
			{
				"category": "조정사유 3",
				"column-1": "18"
			},
			{
				"category": "조정사유 4",
				"column-1": "38"
			}
		]
	});
});




