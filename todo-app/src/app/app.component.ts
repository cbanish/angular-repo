import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  todos=[
    {label:'To pay Bill', done:false,priority:3},
  {label:'To clean', done:false,priority:2},
  {label:'To fix bulb', done:true,priority:1}
];


addTodo(value){

  let newTodo={label:value, 
  done:false,
  priority:4

  }
  this.todos.push(newTodo);
}

deleteTodo(todo){

  this.todos=this.todos.filter(t=> t.label != todo.label);
}


}
