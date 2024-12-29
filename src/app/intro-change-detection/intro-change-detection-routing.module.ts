import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroChangeDetectionComponent } from 'src/app/intro-change-detection/intro-change-detection.component';

const routes: Routes = [
  {
    component: IntroChangeDetectionComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class IntroChangeDetectionRoutingModule {}
