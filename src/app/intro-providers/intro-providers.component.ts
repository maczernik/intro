import { Component } from '@angular/core';

import { ProviderRootService } from 'src/app/intro-providers/services/provider-root.service';

@Component({
  selector: 'in-intro-providers',
  styleUrls: ['./intro-providers.component.scss'],
  templateUrl: './intro-providers.component.html',
})
export class IntroProvidersComponent {
  constructor(private readonly providerRootService: ProviderRootService) {}
}
