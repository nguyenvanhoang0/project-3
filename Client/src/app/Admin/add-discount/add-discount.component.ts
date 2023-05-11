import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PromotionsService } from 'src/app/Service/promotions/promotions.service';
import { Promotions } from 'src/app/Service/promotions/promotions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent {

  public Editor = ClassicEditor;

  promotions: Promotions[] = []
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private promotionsService: PromotionsService
    ) {
     }

     ngOnInit(): void {
      this.form = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        discount: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
      });
    }

    onSubmit(): void {
      const promotions = this.form.value;
      this.promotionsService.createPromotions(promotions).subscribe(
        response => console.log(response),
        error => console.log(error),
        
      );
    }
}
