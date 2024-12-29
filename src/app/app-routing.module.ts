import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'components',
  },
  {
    loadChildren: () =>
      import('./intro-components/intro-components.module').then(
        (m) => m.IntroComponentsModule,
      ),
    path: 'components',
  },
  {
    loadChildren: () =>
      import('./intro-providers/intro-providers.module').then(
        (m) => m.IntroProvidersModule,
      ),
    path: 'providers',
  },
  {
    loadChildren: () =>
      import('./intro-providers/intro-providers.module').then(
        (m) => m.IntroProvidersModule,
      ),
    path: 'providers',
  },
  {
    loadChildren: () =>
      import('./intro-components/intro-components.module').then(
        (m) => m.IntroComponentsModule,
      ),
    path: 'components',
  },
  {
    loadChildren: () =>
      import('./intro-rxjs/intro-rxjs.module').then((m) => m.IntroRxjsModule),
    path: 'rxjs',
  },
  {
    loadChildren: () =>
      import('./intro-change-detection/intro-change-detection.module').then(
        (m) => m.IntroChangeDetectionModule,
      ),
    path: 'change-detection',
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule {}
