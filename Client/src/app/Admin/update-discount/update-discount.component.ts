import { Component } from '@angular/core';
import { PromotionsService } from 'src/app/Service/promotions/promotions.service';
import { Promotions } from 'src/app/Service/promotions/promotions';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-update-discount',
  templateUrl: './update-discount.component.html',
  styleUrls: ['./update-discount.component.css']
})
export class UpdateDiscountComponent {
  form!: FormGroup;

  public Editor = ClassicEditor;
  promotions: Promotions[] | null = null;
  // filteredProducts: Promotions[] | null = null;
  promotion: Promotions | undefined;
  Promotions: Promotions | undefined;

  sortType: string = '';

  idSubject = new BehaviorSubject<number>(0);

  
  currentPage = 1
  isIndexClass = false;


  constructor(
    // private router: Router,
    // private location: Location,
    private fb: FormBuilder,
    private promotionsService: PromotionsService,
    private route: ActivatedRoute,
    ) {
    this.promotionsService.getAllPromotions()
      .subscribe((response: Promotions[]) => {
        this.promotions = response;
      });
  }

  ngOnInit() {
    // this.PromotionsService.getAllPromotions().subscribe((response: Promotions[]) => {
    //   this.promotions = response;
    // });
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.promotionsService.getPromotionsById(id).subscribe((Promotions) => {
      this.Promotions = Promotions;
  });
    this.promotionsService.getPromotionsById(id).subscribe((promotion) => {
      this.promotion = promotion;
    });

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      discount: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  

  onSubmit(): void {
    const id = this.promotion?.id;
    const updatedPromotions = this.form.value;
    if (typeof id === 'number') {
      this.promotionsService.updatePromotions(id, updatedPromotions).subscribe(
        response => console.log(response),
        error => console.log(error),
      );
  }
}}
