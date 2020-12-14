import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  constructor(public server: HeroService) {}

  @Input() public todo: any;

  ngOnInit(): void {}
}
