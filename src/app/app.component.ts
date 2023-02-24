import { Observable } from 'rxjs';
import { products } from './data/products';
import { ProductsService } from './services/products.service';
import { IProduct } from './models/product';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular app';

  // products: IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>

  constructor(private ProductsService: ProductsService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.ProductsService.getAll().pipe(
      tap(() => this.loading = false));
    // this.ProductsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // })
  }
}
