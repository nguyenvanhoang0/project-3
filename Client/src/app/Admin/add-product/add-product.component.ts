import { Component, ViewChildren, ElementRef, QueryList ,OnInit  } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import tinymce from 'tinymce';
// import * as Quill from 'quill';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ProductService } from '../../Service/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],

})


export class AddProductComponent implements OnInit{
  public Editor = ClassicEditor;

  // inputIndices = [0, 1, 2, 3, 4];
  files: { src: string, name: string }[] = [];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      img: ['']
    });
  }

  onSubmit(): void {
    const product = this.form.value;
    const images = this.files.map(file => file.src).join(',');

    product.image = images;

    this.productService.addProduct(product).subscribe(
      response => console.log(response),
      error => console.log(error),
      
    );
    console.log(images)
  }

  onFileSelecteds(event: any, i: number) {
    const file: File | null = event?.target?.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.files[i] = { src: e.target.result, name: file.name };
      };
      reader.readAsDataURL(file);
    }
  }

}

