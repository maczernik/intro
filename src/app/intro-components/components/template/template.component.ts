import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, interval, startWith } from 'rxjs';

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

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  protected asyncVariable$ = interval(5000).pipe(
    startWith(-1),
    map((e) => `${e}`),
  );
}
