import { Component } from '@angular/core';
import { product } from 'src/model/product';
import { ProductRepository } from 'src/model/product.repository';
import { StoreModule } from '../store.module';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  selectedCategory: string | undefined;
  productsPerPage = 4;//mỗi trang có 4 sản phẩm
  selectedPage = 1;
  constructor(private repository: ProductRepository)  {

  }

  get products(): product[] {
    // return this.repository.getProducts();
    // return this.repository.getProducts(this.selectedCategory);
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

}
