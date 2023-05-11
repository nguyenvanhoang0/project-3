import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ShowBrandService } from 'src/app/Service/show_brand/show-brand.service';
import { Brand } from 'src/app/Service/show_brand/show-brand.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
})
export class AddBrandComponent {
  public Editor = ClassicEditor;
  brand: Brand[] = []
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private showBrandService: ShowBrandService
    ) {


     }

     ngOnInit(): void {
      this.form = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
      });
    }

    onSubmit(): void {
      const product = this.form.value;
      
  
     
  
      this.showBrandService.createBrand(product).subscribe(
        response => console.log(response),
        error => console.log(error),
        
      );
    }
}
