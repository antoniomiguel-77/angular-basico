import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  name:String = "António Miguel";
  price:number = 1200.14;
  quantity:number = 12;
  total:number = this.price * this.quantity;
}
