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
    this.tasks.push(this.newTask);
    this.clear();
  }

  clear() {
    this.newTask = {
      name: '',
      done: false
    };
  }
}
