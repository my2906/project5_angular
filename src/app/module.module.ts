import { NgModule } from "@angular/core";
import { ProductRepository } from "src/model/product.repository";
import { Test2Component } from "./test2/test2.component";

@NgModule({
 providers: [ProductRepository, Test2Component]
})
export class ModelModule { }
