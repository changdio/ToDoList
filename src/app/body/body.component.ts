import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data: {text:string,date:Date}[] = [];

  addlist(item: string){
    console.log(item)
    this.data.push({
      text:item,
      date:new Date()
    });
  }

}
