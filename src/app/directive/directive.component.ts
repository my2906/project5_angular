import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Movie } from 'src/model/movie';
import { data } from '../data.module';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  constructo(){

  }
  ngOnInit(): void {

  }
  movies=data;

}
