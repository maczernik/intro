import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroRxjsComponent } from 'src/app/intro-rxjs/intro-rxjs.component';

const routes: Routes = [
  {
    component: IntroRxjsComponent,
    path: '',
  },
  {
    loadComponent: () =>
      import('src/app/intro-rxjs/api/api.component').then(
        (m) => m.ApiComponent,
      ),
    path: 'api',
  },
  {
    loadComponent: () =>
      import('src/app/intro-rxjs/unsubscribe/unsubscribe.component').then(
        (m) => m.UnsubscribeComponent,
      ),
    path: 'subscriptions',
  },
  {
    loadComponent: () =>
      import(
        'src/app/intro-rxjs/router-subscriptions/router-subscriptions.component'
      ).then((m) => m.RouterSubscriptionsComponent),
    path: 'router-subscriptions',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class IntroRxjsRoutingModule {}
