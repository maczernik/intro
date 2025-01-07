import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { WithSubscriptionComponent } from 'src/app/intro-rxjs/unsubscribe/components/with-subscription/with-subscription.component';

@Component({
  imports: [
    CommonModule,
    WithSubscriptionComponent,
  ],
  selector: 'in-unsubscribe',
  standalone: true,
  styleUrls: ['./unsubscribe.component.scss'],
  templateUrl: './unsubscribe.component.html',
})
export class UnsubscribeComponent {
  protected isActive = true;
  protected nr = 1;

  protected create(): void {
    this.isActive = true;
    this.nr++;
  }
}
