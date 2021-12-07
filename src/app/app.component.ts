import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  data: string[] = [];

  addlist(item: string){
    console.log(item)
    this.data.push(item);
  }


}
