import { Chart } from 'chart.js';


export async function drawPieChart() {
    try {
      const response = await fetch('./db.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      // Processing the data
      let originData = {};
      data.forEach(item => {
        const origin = item.origine;
        const totalSpeakers = parseInt(item['parleurs total'].replace(/,/g, ''), 10) || 0;
        if (originData[origin]) {
          originData[origin] += totalSpeakers;
        } else {
          originData[origin] = totalSpeakers;
        }
      });
  
      const labels = Object.keys(originData);
      const dataSet = Object.values(originData);
  
      // Drawing the pie chart
      const ctx = document.getElementById('myPieChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: dataSet,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            }
          }
        }
      });
    } catch (error) {
      console.error('Error fetching data or drawing pie chart:', error );
    }
  }
  