import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { ShowProductService } from 'src/app/Service/show-product/show-product.service';
import { Product } from 'src/app/Service/show-product/show-product.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 products: Product[] | null = null;
  @ViewChild('yearSelect') yearSelect!: ElementRef;
  @ViewChild('monthList') monthList!: ElementRef;

  yearList: number[] = [];
  monthListItems: string[] = [];
  selectedMonth: string | null = null;
  selectedYear: string | null = null;

  constructor(private ShowProductService: ShowProductService) {
    const currentYear = new Date().getFullYear();
    this.yearList = Array.from({ length: 10 }, (_, i) => currentYear + i);
    this.monthListItems = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }
  ngOnInit() {
    const defaultDate = new Date();
    const defaultMonth = ('0' + (defaultDate.getMonth() + 1)).slice(-2);
    const defaultYear = defaultDate.getFullYear().toString();
    
    const selectedYear = this.selectedYear || '';
    const selectedMonth = this.selectedMonth || '';
    const selectedDate = new Date(`${selectedMonth} ${selectedYear}`);
    const formattedDate = selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    this.selectedMonth = defaultMonth;
    this.selectedYear = defaultYear;

    this.updateChart()
  }

  
  

  

  
  onYearSelectChange(): void {
    this.selectedYear = this.yearSelect.nativeElement.value;
    console.log(`Selected year: ${this.selectedYear}`);
    // Update the chart with new data
    this.updateChart();
  }
  
  onMonthListClick(event: any): void {
    if (event.target.tagName === 'LI') {
      this.selectedMonth = event.target.innerText;
      console.log(`Selected month: ${this.selectedMonth}`);
      // Update the chart with new data
      this.updateChart();
    }
  }

  updateChart(): void {
  const selectedYear = this.selectedYear || '';
  const selectedMonth = this.selectedMonth || '';
  const selectedDate = new Date(`${selectedMonth} ${selectedYear}`);
  const formattedDate = selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  console.log(formattedDate); // Output: "May 2023" (for example)

  // Get number of days in the selected month
  const daysInMonth = new Date(Number(selectedYear), this.monthListItems.indexOf(selectedMonth) + 1, 0).getDate();

  // Create an array with the days in the selected month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  this.ShowProductService.getAllProducts().subscribe((response: Product[]) => {
    this.products = response;
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: daysArray,
        datasets: [{
          label: '$',
          data: this.products.map((p) => p.price),
          backgroundColor: 'rgba(113, 184, 94, 0.61)',
          borderColor: '#71b85e',
          borderWidth: 1
        },
        {
          label: 'Data',
          data: [12, 13, 13, 12, 15, 17, 15, 17, 27, 17, 27, 24, 22, 24, 26],
          backgroundColor: 'rgba(113, 184, 94, 0.2)',
          borderColor: 'rgba(113, 184, 94, 0.62)',
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {}
      }
    });
  });
}


//   const yearSelect = document.getElementById("year");
// const monthList = document.getElementById("months");

// // Set default value to current month and year
// const defaultDate = new Date();
// const defaultMonth = ('0' + (defaultDate.getMonth() + 1)).slice(-2);
// const defaultYear = defaultDate.getFullYear().toString();
// let selectedMonth = defaultMonth;
// let selectedYear = defaultYear;

// yearSelect.addEventListener("change", (event) => {
//   selectedYear = event.target.value;
//   updateChart();
// });

// monthList.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     selectedMonth = event.target.value;
//     updateChart();
//   }
// });

// function updateChart() {
//   const selectedDate = new Date(selectedYear, selectedMonth - 1, 1);
//   const formattedDate = selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' });
//   console.log(formattedDate); // Output: "May 2023" (for example)
//   // Call chart update function with formattedDate as argument
// }

}

