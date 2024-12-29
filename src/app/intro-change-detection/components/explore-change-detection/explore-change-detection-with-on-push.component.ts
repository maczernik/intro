/* eslint-disable no-console */
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ExploreChangeDetectionComponent } from 'src/app/intro-change-detection/components/explore-change-detection/explore-change-detection.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'in-on-push-detection-with-on-push',
  standalone: true,
  styleUrls: ['./explore-change-detection.component.scss'],
  templateUrl: './explore-change-detection.component.html',
})
export class ExploreChangeDetectionWithOnPushComponent extends ExploreChangeDetectionComponent {
  protected override prefix = 'Component with on push';
}
