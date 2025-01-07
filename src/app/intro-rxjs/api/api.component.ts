import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import {
  delay,
  catchError,
  repeat,
  startWith,
  distinctUntilChanged,
  filter,
  take,
  switchMap,
  share,
} from 'rxjs/operators';

@Component({
  selector: 'in-api',
  standalone: true,
  styleUrls: ['./api.component.scss'],
  templateUrl: './api.component.html',
})
export class ApiComponent implements OnInit {
  private apiTrigger = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  public ngOnInit(): void {
    console.warn('Promise vs Stream');

    /** Promise example */
    this.simulateAPIByPromise()
      .then((data) => {
        console.log('Promise:', data);
      })
      .catch((error) => {
        console.log('Promise fetching data error:', error);
      });

    /** RXJS example */
    of(Math.random() > 0.5 ? '001' : new Error('Error.'))
      // of(0.5, 0.5, 0.5, 0.8, 0.9)
      .pipe(
        delay(2000),
        // Change emitted values
        // repeat(3),
        // distinctUntilChanged(),
        // filter((data) => data === 0.5),
        // take(2),
        catchError((e) => {
          return e;
        }),
      )
      .subscribe({
        next: (data) => console.log('Stream:', data),
        // complete: () => console.warn('Control API'),
        error: (error) => console.log('Stream:', error),
      });

    /** API example */
    this.apiTrigger.pipe(switchMap(() => this.getPosts())).subscribe({
      next: (result) => console.log('API result:', result),
      complete: () => console.warn('Control API - finished'),
      error: (error) => console.log('Error:', error),
    });
  }
  private simulateAPIByPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          reject(new Error('Error.'));
        } else {
          resolve('001');
        }
      }, 2000);
    });
  }

  private getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    return this.httpClient.get(url);
  }

  protected triggerAPICall(): void {
    this.apiTrigger.next();
  }
}
