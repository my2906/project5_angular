import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectiveComponent } from './directive/directive.component';
import { MovieComponent } from './movie/movie.component';
import { StoreComponent } from './store/store.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  {path:'test1',component:Test1Component},
  {path:'test2',component:Test2Component},
  {path:'test3',component:MovieComponent},
  {path:'store',component:StoreComponent},
  {path:'directive',component:DirectiveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
