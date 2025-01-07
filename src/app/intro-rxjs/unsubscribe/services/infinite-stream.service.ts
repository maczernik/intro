import { Injectable } from '@angular/core';
import { interval, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfiniteStreamService {
  public stream$ = interval(2000).pipe(
    shareReplay({ bufferSize: 1, refCount: true }),
  );
}
