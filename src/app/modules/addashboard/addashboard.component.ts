import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-addashboard',
  templateUrl: './addashboard.component.html',
  styleUrls: ['./addashboard.component.css']
})
export class AddashboardComponent implements OnInit {

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() {
  }


  ngOnInit(): void {
  }

}
