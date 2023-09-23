import {
  Chart,
  PieController,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(PieController, ArcElement, Title, Tooltip, Legend);


export async function drawPieChart() {
    try {
      const response = await fetch('./db.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const list = await response.json();

      const data = list.langues;
  
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
              'rgb(255, 0, 0)',
              'rgb(255, 165, 0)',
              'rgb(60, 179, 113)',
              'rgb(106, 90, 205)',
              'rgb(0, 0, 255)',
              'rgb(179, 179, 0)',
              'rgb(0, 172, 230)'

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
  