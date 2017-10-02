import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  public isAddTimerVisible = false;
  public isEndTimerAlertVisible = false;
  public time = 0;
  public timers: Array<number> = [];

  constructor() {
    this.timers = [ 10, 20, 30 ];
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
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
    this.isEndTimerAlertVisible = true;
  }

  public hideEndTimerAlert() {
    this.isEndTimerAlertVisible = false;
  }

}
