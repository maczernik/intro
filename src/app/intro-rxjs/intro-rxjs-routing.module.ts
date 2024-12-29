import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroRxjsComponent } from 'src/app/intro-rxjs/intro-rxjs.component';

const routes: Routes = [
  {
    component: IntroRxjsComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class IntroRxjsRoutingModule {}
