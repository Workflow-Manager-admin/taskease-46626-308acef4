import { Component } from '@angular/core';
import { TaskeaseMainComponent } from './taskease-main/taskease-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskeaseMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
