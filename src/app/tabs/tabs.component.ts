import { AfterContentInit, Component, ContentChild, OnInit, OnDestroy } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Tab } from '../tab/tab.interface';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.scss' ]
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChild(TabComponent) tab: TabComponent;
  public tabs: Tab[] = [];
  private tabClickSubscription: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.tabClickSubscription) {
      this.tabClickSubscription.unsubscribe();
    }
  }

  ngAfterContentInit() {
    if (this.tab) {
      console.log(this.tab);
      this.addTab(this.tab);
      this.tabClickSubscription = this.tab.onClick.subscribe(() => console.log('Click en el tab'));
    }
  }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: Tab) {
    for (const tab of this.tabs) {
      tab.isActive = false;
    }
    tab.isActive = true;
  }


}
