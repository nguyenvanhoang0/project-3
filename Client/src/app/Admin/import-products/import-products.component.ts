import { Component, OnInit } from '@angular/core';
import { ShowProductService } from 'src/app/Service/show-product/show-product.service';
import { Product } from 'src/app/Service/show-product/show-product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-import-products',
  templateUrl: './import-products.component.html',
  styleUrls: ['./import-products.component.css']
})
export class ImportProductsComponent implements OnInit {
  products: Product[] | null = null;
  product: Product | undefined;

  currentPage = 1
  isIndexClass = false;
  quantityInput: number | undefined;
  sortType: string = '';


  constructor(
    private ShowProductService: ShowProductService,
    private productService: ShowProductService,
    private route: ActivatedRoute,
  ) {
    this.ShowProductService.getAllProducts()
      .subscribe((response: Product[]) => {
        this.products = response;

      });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
      this.quantityInput = product.quantity;
    });
  }

  updateQuantity() {
    if (this.quantityInput) { // kiểm tra quantityInput có giá trị hay không
      if (this.product) {
        this.product.quantity = this.product.quantity + this.quantityInput;
        console.log('New quantity:', this.product.quantity);

      }
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
}
