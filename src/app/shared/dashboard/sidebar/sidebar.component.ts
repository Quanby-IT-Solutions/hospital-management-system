import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule], // Add CommonModule to imports
})
export class SidebarComponent {
  constructor(private router: Router) {}
  @Input()
  role!: string;

  getSidebarItems() {
    if (this.role === 'Patient') {
      return [
        { name: 'Dashboard', link: '/dashboard/patient' },
        { name: 'Health Record', link: '/dashboard/patient/health-record' },
        { name: 'Medications', link: '/dashboard/patient/medications' },
        { name: 'Appointment Scheduling', link: '/dashboard/patient/appointment-scheduling' },
        { name: 'Messaging', link: '/dashboard/patient/messaging' },
        { name: 'Chatbot', link: '/dashboard/patient/chatbot' },
        { name: 'Forum', link: '/dashboard/patient/forum' },
        { name: 'Educational Resources', link: '/dashboard/patient/educational-resources' },
        { name: 'Self-Assessment Tools', link: '/dashboard/patient/self-assessment-tools' },
      ];
    } else if (this.role === 'Caregiver') {
      return [
        { name: 'Dashboard', link: '/dashboard/caregiver' },
        { name: 'Courses', link: '/dashboard/caregiver/courses' },
        { name: 'Workshops', link: '/dashboard/caregiver/workshops' },
        { name: 'Appointment Scheduling', link: '/dashboard/caregiver/appointment-scheduling' },
        { name: 'Forum', link: '/dashboard/caregiver/forum' },
        { name: 'Educational Resources', link: '/dashboard/caregiver/educational-resources' },
      ];
    } else if (this.role === 'GCU Portal') {
      return [
        { name: 'Dashboard', link: '/dashboard/gcu-portal' },
        { name: 'Decision Support', link: '/dashboard/gcu-portal/decision-support' },
        { name: 'Analytics and Reporting', link: '/dashboard/gcu-portal/analytics-and-reporting' },
        { name: 'Virtual Room', link: '/dashboard/gcu-portal/virtual-room' },
        { name: 'Telehealth Integration', link: '/dashboard/gcu-portal/telehealth-integration' },
        { name: 'Messaging', link: '/dashboard/gcu-portal/messaging' },
        { name: 'Calendar and Scheduling', link: '/dashboard/gcu-portal/calendar-and-scheduling' },
      ];
    } else if (this.role === 'Impact Dashboard') {
      return [
        { name: 'Dashboard', link: '/dashboard/impact-dashboard' },
        { name: 'Event Calendar', link: '/dashboard/impact-dashboard/event-calendar' },
        { name: 'Resource Directory', link: '/dashboard/impact-dashboard/resource-directory' },
        { name: 'Volunteer Opportunities', link: '/dashboard/impact-dashboard/volunteer-opportunities' },
        { name: 'Forum', link: '/dashboard/impact-dashboard/forum' },
        { name: 'Educational Resources', link: '/dashboard/impact-dashboard/educational-resources' },
      ];
    } else if (this.role === 'Admin Portal') {
      return [
        { name: 'Dashboard', link: '/dashboard/admin-portal' },
        { name: 'Profile Management', link: '/dashboard/admin-portal/user-management/profile-management' },
        { name: 'Permissions', link: '/dashboard/admin-portal/user-management/permissions' },
        { name: 'Patient Enrollment', link: '/dashboard/admin-portal/program-management/patient-enrollment' },
        { name: 'Resource Allocation', link: '/dashboard/admin-portal/program-management/resource-allocation' },
        { name: 'Staff Scheduling', link: '/dashboard/admin-portal/program-management/staff-scheduling' },
        { name: 'Performance Monitoring', link: '/dashboard/admin-portal/program-management/performance-monitoring' },
        { name: 'Forum', link: '/dashboard/admin-portal/forum' },
        { name: 'Course', link: '/dashboard/admin-portal/educational-resources/course' },
        { name: 'Learners Progress', link: '/dashboard/admin-portal/educational-resources/learners-progress' },
        { name: 'Educational Resources Forum', link: '/dashboard/admin-portal/educational-resources/forum' },
      ];
    }
    return [];
  }

  logout() {
    this.router.navigate(['']);
  }
}
