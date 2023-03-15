import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';


import { ProductRepository } from 'src/model/product.repository';
import { MovieComponent } from './movie/movie.component';

import { DirectiveComponent } from './directive/directive.component';
import { Cart } from 'src/model/cart.module';


// import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [AppComponent, Test1Component, Test2Component, MovieComponent,DirectiveComponent,],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
  ],
  providers: [ProductRepository,Test2Component,Cart ],
  bootstrap: [AppComponent],
})
export class AppModule {}
