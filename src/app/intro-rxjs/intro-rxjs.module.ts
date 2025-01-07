import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApiComponent } from 'src/app/intro-rxjs/api/api.component';
import { IntroRxjsRoutingModule } from 'src/app/intro-rxjs/intro-rxjs-routing.module';
import { IntroRxjsComponent } from 'src/app/intro-rxjs/intro-rxjs.component';

@NgModule({
  declarations: [
    IntroRxjsComponent,
  ],
  imports: [
    CommonModule,
    IntroRxjsRoutingModule,
    ApiComponent,
  ],
})
export class IntroRxjsModule {}
