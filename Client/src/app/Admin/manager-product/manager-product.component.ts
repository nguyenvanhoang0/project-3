import { Component, OnInit ,SimpleChanges , OnChanges ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowProductService } from 'src/app/Service/show-product/show-product.service';
import { Product } from 'src/app/Service/show-product/show-product.interface';

export interface ManagerProductComponent {
  [key: string]: any;
  searchKeyword: string;
}

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})

export class ManagerProductComponent implements OnInit, OnChanges {
  products: Product[] | null = null;
  filteredProducts: Product[] | null = null;

  sortType: string = '';
  // @Input() searchKeyword: string = '';
  @Input() searchKeyword: ManagerProductComponent['searchKeyword'] = '';

  // searchKeyword: string = '';


  searchText: string = '';
  minPrice: number = 0 ;
  maxPrice: number = 999999999;
  currentPage = 1
  isIndexClass = false;


  constructor(private ShowProductService: ShowProductService) {
    this.ShowProductService.getAllProducts()
      .subscribe((response: Product[]) => {
        this.products = response;
        this.filteredProducts = [];
      });
  }

  ngOnInit() {
    this.ShowProductService.getAllProducts().subscribe((response: Product[]) => {
      this.products = response;
      this.filteredProducts = response;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchKeyword']) {
      this.filterProducts();

    }
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

  filterProducts() {
    if (!this.products) {
      return;
    }

    if (!this.searchKeyword) {
      this.filteredProducts = this.products;
      return;
    }

    const keyword = this.searchKeyword.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(keyword)
    );
  }

    searchProducts() {
    if (this.searchKeyword) {
      this.ShowProductService.searchProducts(this.searchKeyword, this.minPrice, this.maxPrice).subscribe(
        (response: Product[]) => {
          this.products = response;
          this.filteredProducts = response; 
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.ShowProductService.getAllProducts().subscribe(
        (response: Product[]) => {
          this.products = response;
          this.filteredProducts = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  


// export class ManagerProductComponent {
//   products: Product[] | null = null;
//   filteredProducts: Product[] | null = null;

//   sortType: string = '';

//   searchKeyword: string = '';

  
//   searchText: string = '';
//   minPrice: number = 0 ;
//   maxPrice: number = 999999999;
//   currentPage = 1
//   isIndexClass = false;


//   constructor(private ShowProductService: ShowProductService) {
//     this.ShowProductService.getAllProducts()
//       .subscribe((response: Product[]) => {
//         this.products = response;
//       });
//   }

//   ngOnInit() {
//     this.ShowProductService.getAllProducts().subscribe((response: Product[]) => {
//       this.products = response;
//       this.filteredProducts = response;
//     });
//   }

//   sortByPrice(type: string) {
//     if (type === 'asc') {
//       this.products = (this.products ?? []).sort((a, b) => a.price - b.price); // sắp xếp giá tăng dần
//     } else if (type === 'desc') {
//       this.products = (this.products ?? []).sort((a, b) => b.price - a.price); // sắp xếp giá giảm dần
//     }
//     this.sortType = type; // lưu loại sắp xếp đã chọn
//   }

//   resetSort() {
//     if (this.sortType !== '') {
//       this.sortType = '';
//       if (this.products) { // kiểm tra this.products trước khi sử dụng
//         this.products.sort((a, b) => a.id - b.id); // Sắp xếp lại theo id để trở về trạng thái không sắp xếp
//       }
//     }
//   }

//   onSearch() {
//     const name = this.searchText;
//     const minPrice = this.minPrice;
//     const maxPrice = this.maxPrice;
//     this.ShowProductService.searchProducts(name, minPrice, maxPrice)
//       .subscribe((response: Product[]) => {
//         this.products = response;
//       });
//   }

//   searchProducts() {
//     if (this.searchText) {
//       this.ShowProductService.searchProducts(this.searchText, this.minPrice, this.maxPrice)
//         .subscribe((response: Product[]) => {
//           this.products = response;
//         });
//     } else {
//       this.ShowProductService.getAllProducts()
//         .subscribe((response: Product[]) => {
//           this.products = response;
//         });
//     }
//   }

  

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
