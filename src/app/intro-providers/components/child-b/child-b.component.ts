import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';

import {
  COMPONENT_CONFIGURATION,
  ComponentConfiguration,
} from 'src/app/intro-providers/injectors/component-configuration';
import { ProviderAService } from 'src/app/intro-providers/services/provider-a.service';
import { ProviderRootService } from 'src/app/intro-providers/services/provider-root.service';

@Component({
  imports: [CommonModule],
  providers: [
    ProviderAService,
    {
      provide: COMPONENT_CONFIGURATION,
      useValue: {
        context: 100,
      },
    },
  ],
  selector: 'in-child-b',
  standalone: true,
  styleUrls: ['./child-b.component.scss'],
  templateUrl: './child-b.component.html',
})
export class ChildBComponent {
  constructor(
    private readonly providerRootService: ProviderRootService,
    private readonly providerAService: ProviderAService,
    @Inject(COMPONENT_CONFIGURATION)
    protected readonly componentConfiguration: ComponentConfiguration,
  ) {}
}
