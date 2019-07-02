var ctx = document.getElementById('doughnut1').getContext('2d');


var doughnut1 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [60, 40],
      backgroundColor: [
        'rgb(212, 150, 167, 1)',
        'rgb(212, 150, 167, 0)'
         ],
          borderWidth: 2
}],
},
  options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
  }
};
