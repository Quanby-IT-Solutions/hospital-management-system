import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent {
  sampleReminders = [
    { name: 'Medicine', dosage: '100 mg', time: '8:00 am' },
    { name: 'Vitamins', dosage: '100 mg', time: '8:00 am' },
    { name: 'Medicine', dosage: '100 mg', time: '8:00 am' }
  ]; // Updated sample reminders data
}
