import { Component, ViewChildren, ElementRef, QueryList ,OnInit  } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import tinymce from 'tinymce';
// import * as Quill from 'quill';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Product } from '../../Service/product/product.interface'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ProductService } from '../../Service/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ShowBrandService } from 'src/app/Service/show_brand/show-brand.service';
import { Brand } from 'src/app/Service/show_brand/show-brand.interface';
import { CategoryService } from 'src/app/Service/category/category.service';
import { Category } from 'src/app/Service/category/category';

interface Image {
  src: string;
  name: string;
}


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],

})



// export class AddProductComponent implements OnInit{
//   public Editor = ClassicEditor;

//   // inputIndices = [0, 1, 2, 3, 4];
//   file: { src: string, name: string }[] = [];
//   images: { src: string, name: string }[] = [];
//   form!: FormGroup;
//   imgUrls: string[] = []; 
//   files!: File[];


//   constructor(private fb: FormBuilder, private productService: ProductService) {
//     this.form = this.fb.group({
//       name: ['', Validators.required],
//       price: ['', Validators.required],
//       description: ['']
//     });
//   }

//     ngOnInit(): void {
//     this.form = this.fb.group({
//       title: ['', Validators.required],
//       price: ['', Validators.required],
//       description: ['', Validators.required],
//       category: ['', Validators.required],
//       img: ['']
//     });
//   }

//   onSubmit() {
//     // Lấy giá trị từ form và tạo một đối tượng sản phẩm
//     const { title, price, description } = this.form.value;
//     const product: Product = {
//       title,
//       price,
//       description,
//       image: ''
//     };
//     // Gửi sản phẩm và các ảnh lên server
//     this.productService.addProduct(product, this.files).then(response => {
//       // Nếu thành công, cập nhật đường dẫn ảnh trên sản phẩm
//       product.image = response.image;
//       console.log('Product added:', product);
//     });
//   }

//   onFile(event: Event, index: number) {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) { // kiểm tra input.files có tồn tại và có ít nhất một file được chọn
//       this.files = [...this.files || []];
//       this.files[index] = input.files[0];
  
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (typeof reader.result === 'string') {
//           this.imgUrls = [...this.imgUrls || []];
//           this.imgUrls[index] = reader.result;
//         }
//       };
//       reader.readAsDataURL(this.files[index]);
//     }
//   }
  

//   onFileSelecteds(event: any, i: number) {
//   const file: File | null = event?.target?.files?.[0] || null;
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e: any) => {
//       // Tạo một đối tượng mới Image để lưu trữ thông tin ảnh
//       const image: Image = { src: e.target.result, name: file.name };
//       this.images[i] = image;
//     };
//     reader.readAsDataURL(file);
//   }
// }

// }

export class AddProductComponent implements OnInit{
  public Editor = ClassicEditor;
  public imageUrls: string = "";

  Brands: Brand[] | null = null;
  category: Category[] | null = null;
  // inputIndices = [0, 1, 2, 3, 4];
  files: { src: string, name: string }[] = [];
  form!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private showBrandService: ShowBrandService,
    private CategoryService: CategoryService,
  ) { 
    this.showBrandService.getAllBrand()
    .subscribe((response: Brand[]) => {
      this.Brands = response;
    });

    this.CategoryService.getAllCategory()
      .subscribe((response: Category[]) => {
        this.category = response;
      });

  }

  ngOnInit(): void {
    this.showBrandService.getAllBrand().subscribe((response: Brand[]) => {
      this.Brands = response;
    });

    this.CategoryService.getAllCategory().subscribe((response: Category[]) => {
      this.category = response;
    });

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