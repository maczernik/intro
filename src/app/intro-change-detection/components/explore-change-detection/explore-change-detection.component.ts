/* eslint-disable no-console */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface InputValue {
  id: number;
  value: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'in-explore-change-detection',
  standalone: true,
  styleUrls: ['./explore-change-detection.component.scss'],
  templateUrl: './explore-change-detection.component.html',
})
export class ExploreChangeDetectionComponent {
  protected prefix = 'Default component';

  @Input() public inputValue: InputValue = {
    id: 1,
    value: 1,
  };

  protected testDetection(): void {
    console.log(`${this.prefix} Expression triggered by CD.`);
  }
}
