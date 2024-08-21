import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeHeaderComponent } from '../../shared/components/dashboard/welcome-header/welcome-header.component';
import { BodyContentComponent } from '../../shared/components/dashboard/body-content/body-content.component';
import { RemindersComponent } from '../../shared/components/dashboard/reminders/reminders.component';
import { CalendarComponent } from '../../shared/components/dashboard/calendar/calendar.component';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    WelcomeHeaderComponent,
    BodyContentComponent,
    RemindersComponent,
    CalendarComponent,
  ],
})
export class PatientDashboardComponent {}
