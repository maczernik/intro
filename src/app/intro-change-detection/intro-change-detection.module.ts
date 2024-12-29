import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExploreChangeDetectionWithOnPushComponent } from 'src/app/intro-change-detection/components/explore-change-detection/explore-change-detection-with-on-push.component';
import { ExploreChangeDetectionComponent } from 'src/app/intro-change-detection/components/explore-change-detection/explore-change-detection.component';
import { IntroChangeDetectionRoutingModule } from 'src/app/intro-change-detection/intro-change-detection-routing.module';
import { IntroChangeDetectionComponent } from 'src/app/intro-change-detection/intro-change-detection.component';

@NgModule({
  declarations: [
    IntroChangeDetectionComponent,
  ],
  imports: [
    CommonModule,
    IntroChangeDetectionRoutingModule,
    ExploreChangeDetectionComponent,
    ExploreChangeDetectionWithOnPushComponent,
  ],
})
export class IntroChangeDetectionModule {}
