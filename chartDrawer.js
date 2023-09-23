
import { 
  Chart, 
  BarController, 
  BarElement, 
  LinearScale, 
  CategoryScale, 
  Title, 
  Tooltip 
} from 'chart.js';

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title, Tooltip);




export async function drawChart() {
    try {
      const response = await fetch('./db.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const list= await response.json();
      if(!list) return 'Data not fetched';
      
      const data = list.langues; 

      const ctx = document.getElementById('myChart').getContext('2d');
      if(!ctx) return 'Context not found'; // Check if context is found
  
      const labels = data.map(item => item.langue);
      const dataSet = data.map(item => parseInt(item['parleurs natif'].replace(/,/g, ''), 10) || 0);
  
      if(!labels.length || !dataSet.length) return 'Data transformation failed'; // Check data transformation
  
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Nombre de parleurs natifs',
            data: dataSet,
            backgroundColor: Array(labels.length).fill('rgb(255, 0, 0)'),
            borderColor: Array(labels.length).fill('rgb(68, 73, 91)'),
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
      return 'Chart drawn successfully'; // Check if chart drawing is successful
    } catch (error) {
      console.error('Error fetching data or drawing chart:', error);
      return 'Error occurred'; // Return if there is any error caught
    }
  }
  