
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawCharts);
function drawCharts() {

  var barData = google.visualization.arrayToDataTable([
    ['Day', 'Page Views', 'Unique Views', 'Like', 'Dislike'],
    ['Sun', 1050, 600, 100, 200],
    ['Mon', 1370, 910, 340, 250],
    ['Tue', 660, 400, 440, 300],
    ['Wed', 1030, 540, 650, 110],
    ['Thu', 1000, 480, 120, 260],
    ['Fri', 1170, 960, 435, 370],
    ['Sat', 660, 320, 115, 425]
  ]);

  var barView = {
    focusTarget: 'category',
    colors: ['cornflowerblue', 'red', 'yellow', 'black'],
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%'
    },
    bar: {
      groupWidth: '60%'
    },
    hAxis: {
      textStyle: {
        fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
      startup: true
    }
  };

  var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));

  barChart.draw(barData, barView);

}  
