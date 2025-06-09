import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'taskease-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './taskease-main.component.html',
  styleUrl: './taskease-main.component.css'
})
export class TaskeaseMainComponent {
  /** The list of tasks (ToDo items). */
  tasks: { text: string; completed: boolean }[] = [];

  /** The new task string from the input field. */
  newTask: string = '';

  // PUBLIC_INTERFACE
  /**
   * Add a task to the list if not empty
   */
  addTask() {
    const taskText = this.newTask.trim();
    if (taskText.length > 0) {
      this.tasks.unshift({ text: taskText, completed: false });
      this.newTask = '';
    }
  }

  // PUBLIC_INTERFACE
  /**
   * Remove a task by its index.
   * @param idx index of the task to remove
   */
  deleteTask(idx: number) {
    this.tasks.splice(idx, 1);
  }

  // PUBLIC_INTERFACE
  /**
   * Mark a task as completed or not completed (toggle).
   * @param idx Index of the task
   */
  toggleCompletion(idx: number) {
    this.tasks[idx].completed = !this.tasks[idx].completed;
  }

  // PUBLIC_INTERFACE
  /**
   * Handle 'Enter' in input to add task.
   */
  handleInputKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }
}
