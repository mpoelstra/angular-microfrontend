import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  username = 'Mark Poelstra';
  totalTasks = 5;

  constructor() { }

  ngOnInit() {
    this.listenForUpdates();
  }

  ngOnDestroy() {
    window.removeEventListener('TotalTasks', this.taskListener, true);
  }

  private listenForUpdates(): void {
    console.log('listenForUpdates');

    // Listen for the event
    window.addEventListener('TotalTasks', this.taskListener.bind(this), true);
  }

  private taskListener(event) {
    console.log('TotalTasks event incoming', event);
    this.totalTasks = event['detail'].totalTasks;
  }
}
