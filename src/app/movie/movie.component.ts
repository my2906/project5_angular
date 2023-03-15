import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:Movie={
    id :1,
    name:"Nhà Bà nữ",
    year:2120
  }
  constructor()
{

}
ngOnInit(): void {

}


}


