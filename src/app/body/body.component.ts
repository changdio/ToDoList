import { Component, OnInit } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})

export class BodyComponent implements OnInit {
  data: ITodo[] = [];
  constructor() {}

  ngOnInit(): void {}

  addlist(item: string) {
    const todoitem: ITodo = { text: item, creationDate: new Date() };
    this.data.push(todoitem);
  }
}
