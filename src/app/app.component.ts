import {
  AfterContentInit, AfterViewInit, Component,
  ComponentFactoryResolver, ComponentRef, ElementRef, Renderer2, ViewChild, ViewContainerRef
} from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterContentInit, AfterViewInit {

  public isAddTimerVisible = false;
  public time = 0;
  public timers: Array<number> = [];
  @ViewChild('timerInput') timeInput: ElementRef;
  @ViewChild('alert', { read: ViewContainerRef }) alertContainer: ViewContainerRef;
  public simpleAlert: ComponentRef<SimpleAlertViewComponent> = null;

  constructor(private renderer: Renderer2,
              private resolver: ComponentFactoryResolver) {
    this.timers = [ 5, 10, 20 ];
  }

  ngAfterViewInit() {
    console.log(this.timeInput);

    this.renderer.setAttribute(this.timeInput.nativeElement, 'placeholder', 'enter seconds');
    this.renderer.addClass(this.timeInput.nativeElement, 'time-in');

  }

  ngAfterContentInit() {
    const alertFactory = this.resolver.resolveComponentFactory(SimpleAlertViewComponent);
    this.simpleAlert = this.alertContainer.createComponent(alertFactory);
    this.simpleAlert.instance.title = 'Mi titulo';
    this.simpleAlert.instance.message = 'Mi mensaje!';
    this.simpleAlert.instance.onDismiss.subscribe(() => console.log('dismiss'));
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
    setTimeout(() => {
      this.renderer.selectRootElement(this.timeInput.nativeElement).focus();
    });
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }

  public logCountdownEnd() {

  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }

  public showEndTimerAlert() {
    // this.alerts.first.show();
    this.simpleAlert.instance.show();
  }


}
