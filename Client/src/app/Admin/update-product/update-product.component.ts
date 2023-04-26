import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowProductService } from 'src/app/Service/show-product/show-product.service';
import { Product } from 'src/app/Service/show-product/show-product.interface';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  title = 'angular';
  public Editor = ClassicEditor;
  inputIndices = [0, 1, 2, 3, 4];
  files: { src: string, name: string }[] = [];
  // files: (File | null)[] = [null, null, null, null, null];
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

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ShowProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }
}
