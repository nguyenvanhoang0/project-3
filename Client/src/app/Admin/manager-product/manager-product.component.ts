import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowProductService } from 'src/app/Service/show-product/show-product.service';
import { Product } from 'src/app/Service/show-product/show-product.interface';


@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})


export class ManagerProductComponent {
  products: Product[] | null = null;
  sortType: string = '';
  constructor(private ShowProductService: ShowProductService) {
    this.ShowProductService.getAllProducts()
      .subscribe((response: Product[]) => {
        this.products = response;
      });
  }

  sortByPrice(type: string) {
    if (type === 'asc') {
      this.products = (this.products ?? []).sort((a, b) => a.price - b.price); // sắp xếp giá tăng dần
    } else if (type === 'desc') {
      this.products = (this.products ?? []).sort((a, b) => b.price - a.price); // sắp xếp giá giảm dần
    }
    this.sortType = type; // lưu loại sắp xếp đã chọn
  }

  resetSort() {
    if (this.sortType !== '') {
      this.sortType = '';
      if (this.products) { // kiểm tra this.products trước khi sử dụng
        this.products.sort((a, b) => a.id - b.id); // Sắp xếp lại theo id để trở về trạng thái không sắp xếp
      }
    }
  }

  isIndexClass = false;

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
