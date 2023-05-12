import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { ShowProductService } from 'src/app/Service/show-product/show-product.service';
import { Product } from 'src/app/Service/show-product/show-product.interface';
import { OrdersService } from 'src/app/Service/orders/orders.service';
import { Orders } from 'src/app/Service/orders/orders';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] | null = null;
  orders: Orders[] | null = null;
  @ViewChild('yearSelect') yearSelect!: ElementRef;
  @ViewChild('monthList') monthList!: ElementRef;

  yearList: number[] = [];
  monthListItems: string[] = [];
  dayListItems: string[] = [];
  dayList: string[] = [];

  // day: string[] = [];

  selectedMonth: string | null = null;
  selectedYear: string | null = null;

  constructor(
    private ShowProductService: ShowProductService,
    private OrdersService: OrdersService,
  ) {
    const currentYear = new Date().getFullYear();
    this.yearList = Array.from({ length: 10 }, (_, i) => currentYear + i);
    this.monthListItems = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    this.OrdersService.getAllOrders()
      .subscribe((response: Orders[]) => {
        this.orders = response;
      });


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

    // this.OrdersService.getAllOrders().subscribe((response: Orders[]) => {
    //   this.orders = response;
    //   this.dayListItems = this.orders.map((p) => p.updatedAt)
    //   for(let i = 0; i < this.orders.length; i++) {
    //     this.dayListItems.push(this.orders[i].updatedAt);
    //   }

    //   // Chuyển các giá trị updatedAt thành định dạng 'dd/MM/yyyy' và đưa vào mảng dayList
    //   for(let i = 0; i < this.dayListItems.length; i++) {
    //     let date = new Date(this.dayListItems[i]);
    //     this.dayList.push(date.toLocaleDateString('en-GB'));
    //   }
    // })

    this.updateChart()
  }


  // const createdDates = this.orders?.map((item) => item.createdAt);




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

    this.OrdersService.getAllOrders().subscribe((response: Orders[]) => {
      const createdDates = response.map((item) => item.createdAt); // Use response here instead of this.orders
      const uniqueDays = [...new Set(createdDates.map((d) => new Date(d).toDateString()))]; // Declare uniqueDays variable here
      const days = uniqueDays.map((day) => createdDates.filter((d) => new Date(d).toDateString() === day).length);

      const dataWithPrices = response.map((item) => ({
        date: new Date(item.createdAt),
        price: item.totalPrice
      }));

      type MyObject = {
        [key: string]: number;
      };

      const totalPriceByDay: MyObject = dataWithPrices.reduce((acc: MyObject, curr) => {
        const date = new Date(curr.date).toLocaleDateString();
        acc[date] = (acc[date] || 0) + parseInt(curr.price.toString());
        return acc;
      }, {});

      const pricesByDay = daysArray.map((day) => totalPriceByDay[new Date(`${selectedMonth} ${day}, ${selectedYear}`).toLocaleDateString()] || 0);
      const today = new Date().toLocaleDateString();

      const totalOrdersToday = this.orders?.reduce((total, order) => {
        if (new Date(order.createdAt).toLocaleDateString() === today) {
          total++;
        }
        return total;
      }, 0);

      const totalPriceToday = Object.entries(totalPriceByDay).reduce((total, [date, price]) => {
        if (date === today) {
          total += +price;
        }
        return total;
      }, 0);

      const totalPriceElement = document.getElementById('total-price');
      totalPriceElement!.innerText = `$${totalPriceToday}`;

      const oderday = document.getElementById('total-day');
      oderday!.innerText = `${totalOrdersToday}`;

      // In ra tổng tiền của ngày hôm nay
      console.log(`Total price today: $${totalPriceToday}`);

      const myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: daysArray,
          datasets: [{
            label: '$',
            data: pricesByDay,
            backgroundColor: 'rgba(113, 184, 94, 0.61)',
            borderColor: '#71b85e',
            borderWidth: 1
          },
            // {
            //   label: 'Data',
            //   data: days,
            //   backgroundColor: 'rgba(113, 184, 94, 0.2)',
            //   borderColor: 'rgba(113, 184, 94, 0.62)',
            //   borderWidth: 1
            // }
          ]
        },
        options: {
          scales: {}
        }
      });
    });


  }


}

