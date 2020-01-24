google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Day', 'Page Views', 'Unique Views', 'Like', 'Dislike'],
        ['Sun',  1050,      600,               100,   200],
        ['Mon',  1370,      910,               340,    250],
        ['Tue',  660,       400,               440,    300],
        ['Wed',  1030,      540,               650,    110],
        ['Thu',  1000,      480,               120,    260],
        ['Fri',  1170,      960,               435,    370],
        ['Sat',  660,       320,               115,    425]

    ]);

    var views = {
        title: 'Dawaai Performance',
        curveType: 'function',
        legend: { position: 'bottom' },
    
          animation: {
            duration: 1200,
            easing: 'out',
                  startup: true
          }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, views);
}