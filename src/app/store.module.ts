import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { product } from "src/model/product";
import { StoreComponent } from "./store/store.component";
// import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
@NgModule({
 imports: [ BrowserModule, FormsModule],
 declarations: [StoreComponent,],
 exports: [StoreComponent]
})
export class StoreModule { }
