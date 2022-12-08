import { makeAutoObservable } from "mobx";

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

 class TodoStore {
   list: Todo[] = [];

   constructor() {
     makeAutoObservable(this);
   }

   add(title: string) {
     if (title.length < 3) {
       return;
     }

     this.list.push({
       id: Date.now(),
       title,
       isDone: false,
     });
   }

   toggle(todo: Todo) {
     todo.isDone = !todo.isDone;
   }

   remove(id: number) {
     this.list = this.list.filter((todo) => todo.id !== id);
   }
 }

export default TodoStore;