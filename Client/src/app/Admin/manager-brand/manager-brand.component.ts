import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowBrandService } from 'src/app/Service/show_brand/show-brand.service';
import { Brand } from 'src/app/Service/show_brand/show-brand.interface';

@Component({
  selector: 'app-manager-brand',
  templateUrl: './manager-brand.component.html',
  styleUrls: ['./manager-brand.component.css']
})
export class ManagerBrandComponent {

  Brands: Brand[] | null = null;
  filteredProducts: Brand[] | null = null;

  sortType: string = '';
  // @Input() searchKeyword: string = '';
  // @Input() searchKeyword: ManagerProductComponent['searchKeyword'] = '';

  // searchKeyword: string = '';


  searchText: string = '';
  minPrice: number = 0 ;
  maxPrice: number = 999999999;
  currentPage = 1
  isIndexClass = false;


  constructor(private showBrandService: ShowBrandService) {
    this.showBrandService.getAllBrand()
      .subscribe((response: Brand[]) => {
        this.Brands = response;
        this.filteredProducts = [];
      });
  }

  ngOnInit() {
    this.showBrandService.getAllBrand().subscribe((response: Brand[]) => {
      this.Brands = response;
      this.filteredProducts = response;
    });
  }

  // sortByPrice(type: string) {
  //   if (type === 'asc') {
  //     this.Brands = (this.Brands ?? []).sort((a, b) => a.price - b.price); // sắp xếp giá tăng dần
  //   } else if (type === 'desc') {
  //     this.Brands = (this.Brands ?? []).sort((a, b) => b.price - a.price); // sắp xếp giá giảm dần
  //   }
  //   this.sortType = type; // lưu loại sắp xếp đã chọn
  // }

  resetSort() {
    if (this.sortType !== '') {
      this.sortType = '';
      if (this.Brands) { // kiểm tra this.products trước khi sử dụng
        this.Brands.sort((a, b) => a.id - b.id); // Sắp xếp lại theo id để trở về trạng thái không sắp xếp
      }
    }
  }

}
