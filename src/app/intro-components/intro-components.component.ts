import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InputValue } from 'src/app/intro-components/components/lifecycle-logs/lifecycle-logs.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'in-intro-components',
  styleUrls: ['./intro-components.component.scss'],
  templateUrl: './intro-components.component.html',
})
export class IntroComponentsComponent {
  protected inputValue: InputValue = {
    id: 1,
    value: 1,
  };

  protected increaseValue(): void {
    const newInputValue: InputValue = {
      ...this.inputValue,
      value: this.inputValue.value + 1,
    };

    this.inputValue = newInputValue;
  }
}
