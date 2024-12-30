import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WrapperComponent } from 'src/app/intro-providers/components/wrapper/wrapper.component';
import { IntroProvidersRoutingModule } from 'src/app/intro-providers/intro-providers-routing.module';
import { IntroProvidersComponent } from 'src/app/intro-providers/intro-providers.component';

@NgModule({
  declarations: [
    IntroProvidersComponent,
  ],
  imports: [
    CommonModule,
    IntroProvidersRoutingModule,
    WrapperComponent,
  ],
})
export class IntroProvidersModule {}
