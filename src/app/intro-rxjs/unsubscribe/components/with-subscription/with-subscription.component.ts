/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable rxjs/finnish */
import { Component, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription, take, takeUntil } from 'rxjs';

import { InfiniteStreamService } from 'src/app/intro-rxjs/unsubscribe/services/infinite-stream.service';

@Component({
  providers: [
    InfiniteStreamService,
  ],
  selector: 'in-with-subscription',
  standalone: true,
  styleUrls: ['./with-subscription.component.scss'],
  templateUrl: './with-subscription.component.html',
})
export class WithSubscriptionComponent implements OnDestroy {
  @Input() public nr!: number;

  // private singleSubscription: Subscription;
  // private multiSubscriptions = new Subscription();

  private destroyed$ = new Subject<void>();

  constructor(public infiniteStreamService: InfiniteStreamService) {
    // No Unsubscribe
    infiniteStreamService.stream$.subscribe((value) => {
      console.log(`Value of component ${this.nr}:`, value);
    });
    // Single subscription unsubscribe
    // this.singleSubscription = infiniteStreamService.stream$.subscribe(
    //   (value) => {
    //     console.log(`Value of component ${this.nr}:`, value);
    //   },
    // );
    // Multi subscription unsubscribe
    // const sub = infiniteStreamService.stream$.subscribe((value) => {
    //   console.log(`Value of component ${this.nr}:`, value);
    // });
    // this.multiSubscriptions.add(sub);
    // Single take(1)
    // infiniteStreamService.stream$.pipe(take(1)).subscribe((value) => {
    //   console.log(`Value of component ${this.nr}:`, value);
    // });
    // Until destroyed
    // infiniteStreamService.stream$
    //   .pipe(takeUntil(this.destroyed$))
    //   .subscribe((value) => {
    //     console.log(`Value of component ${this.nr}:`, value);
    //   });

    // Until destroyed by Directive

    // Add dependency and example
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnDestroy(): void {
    this.destroyed$.next();
    // this.singleSubscription.unsubscribe();
    // this.multiSubscriptions.unsubscribe();
  }
}
