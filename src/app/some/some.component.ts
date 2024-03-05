import { Component } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent {
  tasks = [
    {
      name: 'zadanie 1',
      done: false
    },
    {
      name: 'zadanie 2',
      done: false
    }
  ]

  newTask = {
    name: '',
    done: false
  };

  dodajZadanie() {
    if(this.newTask.name===''){return}
    this.tasks.push(this.newTask);
    
    this.clear();
  }

  wszystkieWykonane() {
    const isDone = (currentValue:any) => currentValue.done;
    return this.tasks.every(isDone);

  }


  clear() {
    this.newTask = {
      name: '',
      done: false
    };
  }
}
