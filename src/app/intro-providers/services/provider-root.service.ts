import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProviderRootService {
  constructor() {
    console.log('ProviderRootService instance created.');
  }
}
