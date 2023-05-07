import { Component , OnInit } from '@angular/core';
import { ShowProductService } from 'src/app/Service/show-product/show-product.service';
import { Product } from 'src/app/Service/show-product/show-product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-import-products',
  templateUrl: './import-products.component.html',
  styleUrls: ['./import-products.component.css']
})
export class ImportProductsComponent implements OnInit{
  products: Product[] | null = null;
  product: Product | undefined;

  currentPage = 1
  isIndexClass = false;

  constructor(
    private ShowProductService: ShowProductService,
    private productService: ShowProductService,
    private route: ActivatedRoute,
    ) {
    this.ShowProductService.getAllProducts()
      .subscribe((response: Product[]) => {
        this.products = response;
      });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }
}
