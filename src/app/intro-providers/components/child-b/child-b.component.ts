import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ProviderAService } from 'src/app/intro-providers/services/provider-a.service';
import { ProviderRootService } from 'src/app/intro-providers/services/provider-root.service';

@Component({
  imports: [CommonModule],
  providers: [
    ProviderAService,
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
  ) {}
}
