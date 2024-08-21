import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class CalendarComponent implements OnInit {
  daysInMonth: number[] = [];
  today: Date = new Date();
  selectedDate: Date = new Date();
  events: { [key: number]: { name: string; color: string }[] } = {};

  ngOnInit() {
    this.initializeCalendar();
    this.initializeEvents();
    this.selectedDate = this.today; // Highlight today's date by default
  }

  initializeCalendar() {
    const days = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }

  initializeEvents() {
    this.events = {
      15: [{ name: 'Doctor Appointment', color: 'primary' }],
      21: [{ name: 'Surgery', color: 'warning' }],
      22: [{ name: 'Meeting', color: 'secondary' }],
      30: [{ name: 'Hello World', color: 'accent' }],
    };
  }

  onDateSelect(day: number) {
    this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), day);
  }

  getEventColor(day: number): string | null {
    const events = this.getEvents(day);
    return events.length ? events[0].color : null;
  }

  getEvents(day: number) {
    return this.events[day] || [];
  }

  isEventDay(day: number): boolean {
    return this.getEvents(day).length > 0;
  }
}
