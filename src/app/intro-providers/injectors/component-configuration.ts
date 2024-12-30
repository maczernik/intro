import { InjectionToken } from '@angular/core';

export interface ComponentConfiguration {
  context: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const COMPONENT_CONFIGURATION =
  new InjectionToken<ComponentConfiguration>('components-configuration');
