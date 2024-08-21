import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reminders.component.html',
  styleUrl: './reminders.component.css'
})
export class RemindersComponent {
  sampleReminders = [
    { name: 'Reminder 1', status: 'Done' },
    { name: 'Reminder 2', status: 'Pending' },
  ]; // Sample reminders data

}
