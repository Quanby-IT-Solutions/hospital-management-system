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
  events: { [key: string]: { [key: number]: { name: string; color: string }[] } } = {};
  transitionClass = '';
  currentMonth!: number;
  currentYear!: number;

  ngOnInit() {
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.initializeCalendar();
    this.initializeEvents();
  }

  initializeCalendar() {
    const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }

  initializeEvents() {
    this.events = {
      '2024-08': {
        15: [{ name: 'Doctor Appointment', color: 'primary' }],
        21: [{ name: 'Surgery', color: 'warning' }],
        22: [{ name: 'Meeting', color: 'secondary' }],
        30: [{ name: 'Hello World', color: 'accent' }],
      },
      '2024-09': {
        5: [{ name: 'Project Kickoff', color: 'primary' }],
        12: [{ name: 'Team Meeting', color: 'secondary' }],
        20: [{ name: 'Client Presentation', color: 'accent' }],
        28: [{ name: 'Monthly Review', color: 'warning' }],
      },
      '2024-10': {
        10: [{ name: 'Product Launch', color: 'primary' }],
        17: [{ name: 'Conference', color: 'accent' }],
        25: [{ name: 'Training Session', color: 'secondary' }],
        31: [{ name: 'Halloween Party', color: 'warning' }],
      },
    };
    this.updateMonthDisplay();
  }

  updateMonthDisplay() {
    this.initializeCalendar();
    this.selectedDate = new Date(this.currentYear, this.currentMonth, this.selectedDate.getDate());
  }

  onDateSelect(day: number) {
    this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
  }

  previousMonth() {
    this.transitionClass = 'slide-out-left';
    setTimeout(() => {
      this.currentMonth -= 1;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      }
      this.updateMonthDisplay();
      this.transitionClass = 'slide-in-right';
    }, 200);
    setTimeout(() => this.transitionClass = '', 400);
  }

  nextMonth() {
    this.transitionClass = 'slide-out-right';
    setTimeout(() => {
      this.currentMonth += 1;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
      }
      this.updateMonthDisplay();
      this.transitionClass = 'slide-in-left';
    }, 200);
    setTimeout(() => this.transitionClass = '', 400);
  }

  getEventColor(day: number): string | null {
    const monthKey = this.getMonthKey();
    const events = this.getEvents(day, monthKey);
    return events.length ? events[0].color : null;
  }

  isEventDay(day: number): boolean {
    const monthKey = this.getMonthKey();
    return this.getEvents(day, monthKey).length > 0;
  }

  getMonthName(): string {
    return this.selectedDate.toLocaleString('default', { month: 'long' });
  }
  
  getDayOfWeek(day: number): string {
    const date = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), day);
    return date.toLocaleString('default', { weekday: 'short' });
  }
  

  getEvents(day: number, monthKey: string) {
    return this.events[monthKey]?.[day] || [];
  }


  getMonthKey(): string {
    return `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}`;
  }
}
