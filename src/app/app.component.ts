import { Component } from '@angular/core';
import { TodoItem } from 'src/model/TodoItem';
import { TodoList } from 'src/model/TodoList';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'học angular';

}

let hat={
  name: "Mỹ",
  price:100

}
let boots={
  name:'boot',
  price:100
}
console.log(`name: ${hat.name},price:${hat.price}`);
console.log(`name:${boots.name},price:${boots.price}`);


