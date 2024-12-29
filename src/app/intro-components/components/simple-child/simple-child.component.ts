import { Component } from '@angular/core';

@Component({
  selector: 'in-simple-child',
  standalone: true,
  styleUrls: ['./simple-child.component.scss'],
  templateUrl: './simple-child.component.html',
})
export class SimpleChildComponent {
  public value = 0;
}
