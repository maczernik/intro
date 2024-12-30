import { Injectable } from '@angular/core';

@Injectable()
export class ProviderAService {
  constructor() {
    console.log('Provider A instance created.');
  }

  public getPointDescription(): string {
    return 'Red point';
  }
}
