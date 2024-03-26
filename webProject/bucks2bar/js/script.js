window.onload = function(){
    document.getElementById('download').addEventListener('click', function() {
        var canvas = document.getElementById('myChart');
        var imgURL = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = imgURL;
        link.download = 'chart.png';
        link.click();
    });

    var ctx = document.getElementById('myChart').getContext('2d');

    // Create a new chart object
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('chart-tab').addEventListener('click', function() {
        // Your code to update the chart goes here
    
        var income = {
            january: document.getElementById('january-income').value,
            february: document.getElementById('february-income').value,
            march: document.getElementById('march-income').value,
            april: document.getElementById('april-income').value,
            may: document.getElementById('may-income').value,
            june: document.getElementById('june-income').value,
            july: document.getElementById('july-income').value,
            august: document.getElementById('august-income').value,
            september: document.getElementById('september-income').value,
            october: document.getElementById('october-income').value,
            november: document.getElementById('november-income').value,
            december: document.getElementById('december-income').value
        };
    
        var expenses = {
            january: document.getElementById('january-expenses').value,
            february: document.getElementById('february-expenses').value,
            march: document.getElementById('march-expenses').value,
            april: document.getElementById('april-expenses').value,
            may: document.getElementById('may-expenses').value,
            june: document.getElementById('june-expenses').value,
            july: document.getElementById('july-expenses').value,
            august: document.getElementById('august-expenses').value,
            september: document.getElementById('september-expenses').value,
            october: document.getElementById('october-expenses').value,
            november: document.getElementById('november-expenses').value,
            december: document.getElementById('december-expenses').value
        };
        
        // Assuming your chart object is named myChart
        myChart.data.datasets[0].data = Object.values(income);
        myChart.data.datasets[1].data = Object.values(expenses);

        // Update the chart to reflect the new data
        myChart.update();

    });

};

