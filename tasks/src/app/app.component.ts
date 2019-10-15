import { Component, OnInit } from '@angular/core';

interface Task {
  title: string;
  link: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tasks: Task[];

  constructor() {}

  ngOnInit() {
    this.tasks = this.getTasks();
    this.sentNativeEvent();
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;

    this.sentNativeEvent();
  }

  private sentNativeEvent(): void {
    const totalTasks = this.getTotalTasks();

    const payload = {
      totalTasks: totalTasks
    };

    // Dispatch an event (probably doesn't work out of the box in IE11 and below, needs polyfill or use a generic pub/sub lib)
    const evt = new CustomEvent('TotalTasks', {detail: payload});
    console.log(evt);
    window.dispatchEvent(evt);
  }

  private getTotalTasks(): number {
    return this.tasks.filter((task) => {
      return !task.completed;
    }).length;
  }

  private getTasks(): Task[] {
    const tasks = [
      {
        title: 'taak 1',
        link: '#',
        completed: false
      },
      {
        title: 'taak 2',
        link: '#',
        completed: false
      },
      {
        title: 'taak 3',
        link: '#',
        completed: false
      },
      {
        title: 'taak 4',
        link: '#',
        completed: false
      },
      {
        title: 'taak 5',
        link: '#',
        completed: false
      }
    ];

    return tasks;
  }
}
