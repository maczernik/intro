import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponentsComponent } from 'src/app/intro-components/intro-components.component';

const routes: Routes = [
  {
    component: IntroComponentsComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class IntroComponentsRoutingModule {}
