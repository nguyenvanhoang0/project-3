import { Component } from '@angular/core';
import { PromotionsService } from 'src/app/Service/promotions/promotions.service';
import { Promotions } from 'src/app/Service/promotions/promotions';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-discount-detail',
  templateUrl: './discount-detail.component.html',
  styleUrls: ['./discount-detail.component.css']
})
export class DiscountDetailComponent {
  promotions: Promotions[] | null = null;
  filteredProducts: Promotions[] | null = null;
  Promotions: Promotions | undefined;
  sortType: string = '';

  idSubject = new BehaviorSubject<number>(0);

  
  currentPage = 1
  isIndexClass = false;


  constructor(
    // private router: Router,
    // private location: Location,
    private location: Location,
    private PromotionsService: PromotionsService,
    private route: ActivatedRoute,
    ) {
    this.PromotionsService.getAllPromotions()
      .subscribe((response: Promotions[]) => {
        this.promotions = response;
        this.filteredProducts = [];
      });
  }

  ngOnInit() {
    this.PromotionsService.getAllPromotions().subscribe((response: Promotions[]) => {
      this.promotions = response;
      this.filteredProducts = response;
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.PromotionsService.getPromotionsById(id).subscribe((Promotions) => {
      this.Promotions = Promotions;
    });

    
  }

  sortByDiscount(type: string) {
    if (type === 'asc') {
      this.promotions = (this.promotions ?? []).sort((a, b) => a.discount - b.discount); // sắp xếp giá tăng dần
    } else if (type === 'desc') {
      this.promotions = (this.promotions ?? []).sort((a, b) => b.discount - a.discount); // sắp xếp giá giảm dần
    }
    this.sortType = type; // lưu loại sắp xếp đã chọn
  }

  sortBystartDate(type: string) {
    if (type === 'asc') {
      this.promotions = (this.promotions ?? []).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()); // sắp xếp giá tăng dần
    } else if (type === 'desc') {
      this.promotions = (this.promotions ?? []).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()); // sắp xếp giá giảm dần
    }
    this.sortType = type; // lưu loại sắp xếp đã chọn
  }
  
  resetSort() {
    if (this.sortType !== '') {
      this.sortType = '';
      if (this.promotions) { // kiểm tra this.products trước khi sử dụng
        this.promotions.sort((a, b) => a.id - b.id); // Sắp xếp lại theo id để trở về trạng thái không sắp xếp
      }
    }
  }

  deletePromotions(id: number) {
    this.PromotionsService.deletePromotions(id).subscribe(
      response => {
        console.log(response);
        this.location.back();
      },
      error => {
        console.log(error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
 
  
  // reloadPage(): void {
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([this.router.url]);
  //   });
  // }
}
