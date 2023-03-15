import { Component } from '@angular/core';
import { TodoItem } from 'src/model/TodoItem';
import { TodoList } from 'src/model/TodoList';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {

  private list = new TodoList('Bob', [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ]);
  get username(): string {
    return this.list.user;
  }
  get itemCount(): number {//đếm số phần tử có đc
    return this.list.items.filter((item) => !item.complete).length;
  }
  get items(): readonly TodoItem[] {
    return this.list.items;// trả về giá trị có trong đối tượng todolist
  }
}
