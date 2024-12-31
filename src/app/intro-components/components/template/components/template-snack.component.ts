import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'in-template-snack',
  standalone: true,
  styleUrls: ['./template-snack.component.scss'],
  template: '<div class="snack">{{ componentInput }}</div>',
})
export class TemplateSnackComponent {
  @Input() public componentInput = 'Unchanged text';
}
