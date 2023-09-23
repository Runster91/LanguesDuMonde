import { Chart } from 'chart.js';

export async function drawTable() {
    try {
      const response = await fetch('./db.json');
      const list = await response.json();
      console.log(list)

      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
     

      
    
      const data = list.langues; 
  
      const canvas = document.getElementById('tableCanvas');
      const ctx = canvas.getContext('2d');
  
      // Set up table dimensions and styles
      const cellWidth = 50;
      const cellHeight = 30;
      ctx.font = '16px sans-serif';
      ctx.lineWidth = 0;
  
      // Draw table header
      ctx.fillText('Language', 10, 30);
      ctx.fillText('Parleurs Natif', 120, 30);
      ctx.beginPath();
      ctx.moveTo(0, 40);
      ctx.lineTo(250, 40);
      ctx.stroke();
  
     
      data.forEach((langue, index) => {
        const y = 70 + (index * cellHeight);
  
        // Use the correct property names based on your API response structure
        ctx.fillText(langue.langue || '', 10, y); // 'langue' property for language name
        ctx.fillText(langue['parleurs natif'] || '', 120, y); // 'parleurs natif' property for native speakers count
  
        ctx.beginPath();
        ctx.moveTo(0, y + 10);
        ctx.lineTo(250, y + 10);
        ctx.stroke();
      });
    } catch (error) {
      console.error('Error fetching or drawing table:', error);
    }
  }
  
  // Call the function when the script loads
  drawTable();