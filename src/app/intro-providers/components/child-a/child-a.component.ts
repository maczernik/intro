import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';

import {
  COMPONENT_CONFIGURATION,
  ComponentConfiguration,
} from 'src/app/intro-providers/injectors/component-configuration';
import { ProviderAService } from 'src/app/intro-providers/services/provider-a.service';
import { ProviderBService } from 'src/app/intro-providers/services/provider-b.service';
import { ProviderRootService } from 'src/app/intro-providers/services/provider-root.service';

@Component({
  imports: [CommonModule],
  providers: [
    ProviderBService,
    ProviderRootService,
  ],
  selector: 'in-child-a',
  standalone: true,
  styleUrls: ['./child-a.component.scss'],
  templateUrl: './child-a.component.html',
})
export class ChildAComponent {
  constructor(
    private readonly providerAService: ProviderAService,
    private readonly providerBService: ProviderBService,
    @Inject(COMPONENT_CONFIGURATION)
    protected readonly componentConfiguration: ComponentConfiguration,
  ) {}
}
