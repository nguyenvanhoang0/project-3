import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ShowBrandService } from 'src/app/Service/show_brand/show-brand.service';
import { Brand } from 'src/app/Service/show_brand/show-brand.interface';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
})
export class AddBrandComponent {
  public Editor = ClassicEditor;
  brand: Brand[] = []

  constructor(private showBrandService: ShowBrandService) { }

  onSubmit() {
    // this.showBrandService.createBrand(this.brand)
    //   .subscribe(brand => {
    //     console.log('Created new brand:', brand);
    //   });
  }
}
