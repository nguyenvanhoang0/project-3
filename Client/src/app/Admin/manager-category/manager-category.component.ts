import { Component } from '@angular/core';

import { CategoryService } from 'src/app/Service/category/category.service';
import { Category } from 'src/app/Service/category/category';

@Component({
  selector: 'app-manager-category',
  templateUrl: './manager-category.component.html',
  styleUrls: ['./manager-category.component.css']
})
export class ManagerCategoryComponent {
  category: Category[] | null = null;
  filteredProducts: Category[] | null = null;

  sortType: string = '';
  // @Input() searchKeyword: string = '';
  // @Input() searchKeyword: ManagerProductComponent['searchKeyword'] = '';

  // searchKeyword: string = '';
  currentPage = 1
  isIndexClass = false;


  constructor(private CategoryService: CategoryService) {
    this.CategoryService.getAllCategory()
      .subscribe((response: Category[]) => {
        this.category = response;
        this.filteredProducts = [];
      });
  }

  ngOnInit() {
    this.CategoryService.getAllCategory().subscribe((response: Category[]) => {
      this.category = response;
      this.filteredProducts = response;
    });
  }

  sortBystartDate(type: string) {
    if (type === 'asc') {
      this.category = (this.category ?? []).sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()); // sắp xếp giá tăng dần
    } else if (type === 'desc') {
      this.category = (this.category ?? []).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()); // sắp xếp giá giảm dần
    }
    this.sortType = type; // lưu loại sắp xếp đã chọn
  }

  resetSort() {
    if (this.sortType !== '') {
      this.sortType = '';
      if (this.category) { // kiểm tra this.products trước khi sử dụng
        this.category.sort((a, b) => a.id - b.id); // Sắp xếp lại theo id để trở về trạng thái không sắp xếp
      }
    }
}
}
