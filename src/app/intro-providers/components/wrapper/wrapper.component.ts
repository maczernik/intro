import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ChildAComponent } from 'src/app/intro-providers/components/child-a/child-a.component';
import { ChildBComponent } from 'src/app/intro-providers/components/child-b/child-b.component';
import { COMPONENT_CONFIGURATION } from 'src/app/intro-providers/injectors/component-configuration';
import { ProviderAService } from 'src/app/intro-providers/services/provider-a.service';
import { ProviderRootService } from 'src/app/intro-providers/services/provider-root.service';

@Component({
  imports: [
    CommonModule,
    ChildAComponent,
    ChildBComponent,
  ],
  providers: [
    ProviderAService,
    {
      provide: COMPONENT_CONFIGURATION,
      useValue: {
        context: 10,
      },
    },
  ],
  selector: 'in-wrapper',
  standalone: true,
  styleUrls: ['./wrapper.component.scss'],
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {
  constructor(
    private readonly providerRootService: ProviderRootService,
    private readonly providerAService: ProviderAService,
  ) {}
}
