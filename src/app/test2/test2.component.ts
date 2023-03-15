import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { product } from 'src/model/product';
import { ProductRepository } from 'src/model/product.repository';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
public product:product[]=[
  new product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
  new product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
  new product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
  new product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
  new product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
  new product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
  new product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
  new product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
  new product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
  new product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
  new product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
  new product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
  new product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
  new product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
  new product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
];
// public category:
getProducts():Observable<product[]>
{
  return from([this.product]);
}
}



