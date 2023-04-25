import { Component , OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowProductService } from 'src/app/Service/show-product/show-product.service';
import { Product } from 'src/app/Service/show-product/show-product.interface';


@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})


export class ManagerProductComponent  {
  products: Product[] | null = null;

  constructor(private ShowProductService: ShowProductService) {
    this.ShowProductService.getAllProducts()
      .subscribe((response: Product[]) => {
        this.products = response;
      });
  }

  classObj = {
    grids: true,
    table: false
  };

  toggleClass() {
    this.classObj = {
      grids: !this.classObj.grids,
      table: !this.classObj.table
    };
  }

  // changeClassBlock() {
  //   const element = document.querySelector('.grids');
  //   if (element) {
  //     element.classList.replace('grids', 'block');
  //     element.classList.replace('table', 'nones');
  //   }
  // }

  // changeClassNone() {
  //   const element = document.querySelector('.table');
  //   if (element) {

  //     element.classList.replace('table', 'block');
  //   }
  //   if (element) {
  //     element.classList.replace('grids', 'nones');

  //   }
  // }
}
