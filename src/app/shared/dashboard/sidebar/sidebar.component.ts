import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class SidebarComponent {
  constructor(private router: Router) {}

  @Input()
  role!: string;

  getSidebarItems() {
    if (this.role === 'Patient') {
      return [
        { name: 'Dashboard', link: '/dashboard/patient', icon: 'fas fa-home' },
        { name: 'Health Record', link: '/dashboard/patient/health-record', icon: 'fas fa-notes-medical' },
        { name: 'Medications', link: '/dashboard/patient/medications', icon: 'fas fa-pills' },
        { name: 'Appointment Scheduling', link: '/dashboard/patient/appointment-scheduling', icon: 'fas fa-calendar-alt' },
        { name: 'Messaging', link: '/dashboard/patient/messaging', icon: 'fas fa-envelope' },
        { name: 'Chatbot', link: '/dashboard/patient/chatbot', icon: 'fas fa-comments' },
        { name: 'Forum', link: '/dashboard/patient/forum', icon: 'fas fa-users' },
        { name: 'Educational Resources', link: '/dashboard/patient/educational-resources', icon: 'fas fa-book' },
        { name: 'Self-Assessment Tools', link: '/dashboard/patient/self-assessment-tools', icon: 'fas fa-chart-line' },
      ];
    } else if (this.role === 'Caregiver') {
      return [
        { name: 'Dashboard', link: '/dashboard/caregiver', icon: 'fas fa-home' },
        { name: 'Courses', link: '/dashboard/caregiver/courses', icon: 'fas fa-graduation-cap' },
        { name: 'Workshops', link: '/dashboard/caregiver/workshops', icon: 'fas fa-chalkboard-teacher' },
        { name: 'Appointment Scheduling', link: '/dashboard/caregiver/appointment-scheduling', icon: 'fas fa-calendar-alt' },
        { name: 'Forum', link: '/dashboard/caregiver/forum', icon: 'fas fa-users' },
        { name: 'Educational Resources', link: '/dashboard/caregiver/educational-resources', icon: 'fas fa-book' },
      ];
    } else if (this.role === 'GCU Portal') {
      return [
        { name: 'Dashboard', link: '/dashboard/gcu-portal', icon: 'fas fa-home' },
        { name: 'Decision Support', link: '/dashboard/gcu-portal/decision-support', icon: 'fas fa-balance-scale' },
        { name: 'Analytics and Reporting', link: '/dashboard/gcu-portal/analytics-and-reporting', icon: 'fas fa-chart-bar' },
        { name: 'Virtual Room', link: '/dashboard/gcu-portal/virtual-room', icon: 'fas fa-video' },
        { name: 'Telehealth Integration', link: '/dashboard/gcu-portal/telehealth-integration', icon: 'fas fa-stethoscope' },
        { name: 'Messaging', link: '/dashboard/gcu-portal/messaging', icon: 'fas fa-envelope' },
        { name: 'Calendar and Scheduling', link: '/dashboard/gcu-portal/calendar-and-scheduling', icon: 'fas fa-calendar-alt' },
      ];
    } else if (this.role === 'Impact Dashboard') {
      return [
        { name: 'Dashboard', link: '/dashboard/impact-dashboard', icon: 'fas fa-home' },
        { name: 'Event Calendar', link: '/dashboard/impact-dashboard/event-calendar', icon: 'fas fa-calendar-alt' },
        { name: 'Resource Directory', link: '/dashboard/impact-dashboard/resource-directory', icon: 'fas fa-folder-open' },
        { name: 'Volunteer Opportunities', link: '/dashboard/impact-dashboard/volunteer-opportunities', icon: 'fas fa-hand-holding-heart' },
        { name: 'Forum', link: '/dashboard/impact-dashboard/forum', icon: 'fas fa-users' },
        { name: 'Educational Resources', link: '/dashboard/impact-dashboard/educational-resources', icon: 'fas fa-book' },
      ];
    } else if (this.role === 'Admin Portal') {
      return [
        { name: 'Dashboard', link: '/dashboard/admin-portal', icon: 'fas fa-home' },
        { name: 'Profile Management', link: '/dashboard/admin-portal/user-management/profile-management', icon: 'fas fa-user-cog' },
        { name: 'Permissions', link: '/dashboard/admin-portal/user-management/permissions', icon: 'fas fa-user-shield' },
        { name: 'Patient Enrollment', link: '/dashboard/admin-portal/program-management/patient-enrollment', icon: 'fas fa-user-plus' },
        { name: 'Resource Allocation', link: '/dashboard/admin-portal/program-management/resource-allocation', icon: 'fas fa-tasks' },
        { name: 'Staff Scheduling', link: '/dashboard/admin-portal/program-management/staff-scheduling', icon: 'fas fa-calendar-alt' },
        { name: 'Performance Monitoring', link: '/dashboard/admin-portal/program-management/performance-monitoring', icon: 'fas fa-chart-line' },
        { name: 'Forum', link: '/dashboard/admin-portal/forum', icon: 'fas fa-users' },
        { name: 'Course', link: '/dashboard/admin-portal/educational-resources/course', icon: 'fas fa-book' },
        { name: 'Learners Progress', link: '/dashboard/admin-portal/educational-resources/learners-progress', icon: 'fas fa-chart-bar' },
        { name: 'Educational Resources Forum', link: '/dashboard/admin-portal/educational-resources/forum', icon: 'fas fa-comments' },
      ];
    }
    return [];
  }

   isActive(url: string): boolean {
    return this.router.url === url;
  }

  isDashboardDefault(url: string): boolean {
    // Check if the current route is the default dashboard route
    return url === '/dashboard/patient' && this.router.url === '/dashboard/patient';
  }




  logout() {
    this.router.navigate(['']);
  }
}
