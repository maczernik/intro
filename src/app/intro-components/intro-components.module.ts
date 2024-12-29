import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntroComponentsRoutingModule } from 'src/app/intro-components/intro-components-routing.module';
import { IntroComponentsComponent } from 'src/app/intro-components/intro-components.component';

@NgModule({
  declarations: [
    IntroComponentsComponent,
  ],
  imports: [
    CommonModule,
    IntroComponentsRoutingModule,
  ],
})
export class IntroComponentsModule {}
