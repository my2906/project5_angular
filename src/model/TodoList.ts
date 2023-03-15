import { TodoItem } from './TodoItem';
export class TodoList {
  constructor(public user: string, private todoItems: TodoItem[] = []) {}
  get items(): readonly TodoItem[] {
    return this.todoItems;
  }

  
}
