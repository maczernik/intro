import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LifecycleLogsComponent } from 'src/app/intro-components/components/lifecycle-logs/lifecycle-logs.component';
import { TemplateComponent } from 'src/app/intro-components/components/template/template.component';
import { IntroComponentsRoutingModule } from 'src/app/intro-components/intro-components-routing.module';
import { IntroComponentsComponent } from 'src/app/intro-components/intro-components.component';

@NgModule({
  declarations: [
    IntroComponentsComponent,
  ],
  imports: [
    CommonModule,
    IntroComponentsRoutingModule,
    LifecycleLogsComponent,
    TemplateComponent,
  ],
})
export class IntroComponentsModule {}
