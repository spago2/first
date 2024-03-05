import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';
  liczbaWylosowana = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  
  liczbaZgadywana = 0;
  
  zgadnij(){
    if(this.liczbaZgadywana===this.liczbaWylosowana){
      alert("Super zgadłeś");
    
    
    }else{alert("Nie zgadłeś");}
  }
}

