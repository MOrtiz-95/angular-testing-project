import { Component } from '@angular/core';

interface Task {text: string}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';

  tasks: Task[]= [];
  selectedTask: string | null= null;
  newTaskText: string | null= null;

  addTask(task: string) {
    const newTask: Task = {
      text: this.newTaskText
    }
    this.tasks.push(newTask)
    this.newTaskText = ""
  }

  deleteTask(task: string) {
  this.selectedTask = null
  this.newTaskText = ""
  }

  editTask(task: Task): void {
    this.selectedTask = { ...task }
    this.newTaskText = task.text
  }

  updateTask(): void {
  }
 
  getTasks(): string[] {
    return [];
  }
}
