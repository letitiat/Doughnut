var ctx = document.getElementById('doughnut1').getContext('2d');
var ctx1 = document.getElementById('doughnut2').getContext('2d');
var ctx2 = document.getElementById('doughnut3').getContext('2d');


var doughnut1 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [90, 20],
      backgroundColor: [
        'rgba(203, 243, 210, 1)', 'rgba(203, 243, 210, 0)'
         ],
				 borderColor: 'rgba(203, 243, 210, 0)',
}],

},
  options: {
			events: [],
			 cutoutPercentage: 90,
        scales: {
					display: false,
        }
  }
});

var doughnut2 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [70, 30],
      backgroundColor: [
        'rgba(183, 192, 238, 1)', 'rgba(203, 243, 210, 0)'
         ],
				 borderColor: 'rgba(203, 243, 210, 0)',
}],

},
  options: {
			events: [],
			 cutoutPercentage: 70,
        scales: {
					display: false,
        }
  }
});

var doughnut3 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [55,45],
      backgroundColor: [
				'rgba(247, 169, 168, 1)', 'rgba(203, 243, 210, 0)'
         ],
				 borderColor: 'rgba(203, 243, 210, 0)',

}],

},
  options: {
			events: [],
			 cutoutPercentage: 50,
        scales: {
					display: false,
        }
  }
});

