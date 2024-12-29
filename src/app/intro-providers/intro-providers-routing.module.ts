import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroProvidersComponent } from 'src/app/intro-providers/intro-providers.component';

const routes: Routes = [
  {
    component: IntroProvidersComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class IntroProvidersRoutingModule {}
