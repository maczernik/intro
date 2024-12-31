import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TemplateSnackComponent } from 'src/app/intro-components/components/template/components/template-snack.component';

@Component({
  imports: [
    CommonModule,
    TemplateSnackComponent,
  ],
  selector: 'in-template',
  standalone: true,
  styleUrls: ['./template.component.scss'],
  templateUrl: './template.component.html',
})
export class TemplateComponent {
  protected componentVariable = 'Test text';
}
