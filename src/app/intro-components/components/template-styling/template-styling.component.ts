import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'in-template-styling',
  standalone: true,
  styleUrls: ['./template-styling.component.scss'],
  templateUrl: './template-styling.component.html',
})
export class TemplateStylingComponent {}
