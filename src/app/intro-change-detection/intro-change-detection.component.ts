import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { InputValue } from 'src/app/intro-change-detection/components/explore-change-detection/explore-change-detection.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'in-intro-change-detection',
  styleUrls: ['./intro-change-detection.component.scss'],
  templateUrl: './intro-change-detection.component.html',
})
export class IntroChangeDetectionComponent {
  @Output() public exploreChangeDetectionEvent = new EventEmitter<string>();

  protected inputValue: InputValue = {
    id: 1,
    value: 1,
  };

  protected increaseValue(): void {
    this.inputValue.value++;
  }

  protected increaseValueByNewReference(): void {
    const newInputValue: InputValue = {
      ...this.inputValue,
      value: this.inputValue.value + 1,
    };

    this.inputValue = newInputValue;
  }

  protected emitEvent(): void {
    this.exploreChangeDetectionEvent.emit('CD run');
  }
}
