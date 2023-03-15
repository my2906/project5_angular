import { product } from "./product";
import { Test2Component } from "src/app/test2/test2.component";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class ProductRepository{
  private products:product[]=[];
  private category:string[]=[];
  constructor (private dataSource: Test2Component)
  {
    dataSource.getProducts().subscribe(data=>{
      this.products=data;
      this.category=data.map(p=>p.category??"(Node)")
      .filter((c,index,array)=>array.indexOf(c)==index).sort();}
      );}

      getProducts(category?:string):product[]{
        return this.products.filter(p=>category==undefined||category==p.category);
      }
      getProduct(id:number):product|undefined{
        return this.products.find(p=>p.id==id);
      }
      getCategories():string[]
      {
        return this.category;
      }
  }

