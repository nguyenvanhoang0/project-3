import { Component, OnInit  } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  // constructor() { }

  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"  ],
        datasets: [{
          label: '$',
          data: [12, 13, 12, 15, 17, 27, 24, 22, 24, 26],
          backgroundColor:
            'rgba(113, 184, 94, 0.61)',
            
          borderColor: 
            '#71b85e',
            
          borderWidth: 1
        },
        {
          label: 'Data',
          data: [12, 13, 13, 12, 15, 17,15, 17, 27,17, 27, 24, 22, 24, 26],
          backgroundColor: 'rgba(113, 184, 94, 0.2)',
          borderColor: 'rgba(113, 184, 94, 0.62)',
          borderWidth: 1
        }
      ]
        
      },
      
      options: {
        scales: {
          // yAxes: [{
          //   type: 'timeseries',
          //   min: '2023-01-01',
          //   max: '2023-12-31',
          //   suggestedMin: '2023-01-01',
          //   suggestedMax: '2023-12-31'
          // }]
        }
      }
    });
  }

  
}
