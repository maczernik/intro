/* eslint-disable no-console */
import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  EventEmitter,
  Output,
} from '@angular/core';

import { SimpleChildComponent } from 'src/app/intro-components/components/simple-child/simple-child.component';

export interface InputValue {
  id: number;
  value: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    SimpleChildComponent,
  ],
  selector: 'in-lifecycle-logs',
  standalone: true,
  styleUrls: ['./lifecycle-logs.component.scss'],
  templateUrl: './lifecycle-logs.component.html',
})
export class LifecycleLogsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('htmlElement')
  private htmlElement?: ElementRef<HTMLElement> | null;

  @ViewChild(SimpleChildComponent)
  private simpleChildComponent?: SimpleChildComponent | null;

  @Input({ required: true }) public inputValue: InputValue | null = {
    id: 1,
    value: 1,
  };

  @Output() public simpleChange = new EventEmitter<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.log('Constructor()');
  }

  public ngOnChanges(): void {
    this.log('OnChanges.');
  }

  public ngOnInit(): void {
    this.log('OnInit.');
  }

  public ngDoCheck(): void {
    this.log('DoCheck.');
  }

  public ngAfterContentInit(): void {
    this.log('ngAfterContentInit.');
  }

  public ngAfterContentChecked(): void {
    this.log('AfterContentChecked.');
  }

  public ngAfterViewInit(): void {
    this.log('AfterViewInit.');
    if (this.simpleChildComponent) {
      this.simpleChildComponent.value = 10;
      this.changeDetectorRef.detectChanges();
    }
  }

  public ngAfterViewChecked(): void {
    this.log('AfterViewChecked.');
  }

  public ngOnDestroy(): void {
    this.log('OnDestroy.');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private log(message: string): void {
    console.log(
      message,
      this.htmlElement?.nativeElement,
      this.simpleChildComponent,
    );
  }

  protected emitEvent(): void {
    this.simpleChange.emit();
  }
}
