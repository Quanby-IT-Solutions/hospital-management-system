import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { HealthRecordComponent } from './patient/health-record/health-record.component';
import { CoursesComponent } from './caregiver/courses/courses.component';
import { MedicationsComponent } from './patient/medications/medications.component';
import { AppointmentSchedulingComponent } from './patient/appointment-scheduling/appointment-scheduling.component';
import { MessagingComponent } from './patient/messaging/messaging.component';
import { ChatbotComponent } from './patient/chatbot/chatbot.component';
import { ForumComponent } from './patient/forum/forum.component';
import { EducationalResourcesComponent } from './patient/educational-resources/educational-resources.component';
import { SelfAssessmentToolsComponent } from './patient/self-assessment-tools/self-assessment-tools.component';
import { WorkshopsComponent } from './caregiver/workshops/workshops.component';
import { CaregiverAppointmentSchedulingComponent } from './caregiver/appointment-scheduling/appointment-scheduling.component';
import { CaregiverForumComponent } from './caregiver/forum/forum.component';
import { CaregiverEducationalResourcesComponent } from './caregiver/educational-resources/educational-resources.component';
import { LoginComponent } from './auth/login/login.component';
import { PatientDashboardComponent } from './patient/dashboard/dashboard.component';
import { CaregiverDashboardComponent } from './caregiver/dashboard/dashboard.component';
import { GcuPortalDashboardComponent } from './gcu-portal/dashboard/dashboard.component';
import { DecisionSupportComponent } from './gcu-portal/decision-support/decision-support.component';
import { AnalyticsAndReportingComponent } from './gcu-portal/analytics-and-reporting/analytics-and-reporting.component';
import { VirtualRoomComponent } from './gcu-portal/virtual-room/virtual-room.component';
import { TelehealthIntegrationComponent } from './gcu-portal/telehealth-integration/telehealth-integration.component';
import { GcuMessagingComponent } from './gcu-portal/messaging/messaging.component';
import { CalendarAndSchedulingComponent } from './gcu-portal/calendar-and-scheduling/calendar-and-scheduling.component';
import { ImpactDashboardComponent } from './impact-dashboard/dashboard/dashboard.component';
import { EventCalendarComponent } from './impact-dashboard/event-calendar/event-calendar.component';
import { ResourceDirectoryComponent } from './impact-dashboard/resource-directory/resource-directory.component';
import { VolunteerOpportunitiesComponent } from './impact-dashboard/volunteer-opportunities/volunteer-opportunities.component';
import { ImpactForumComponent } from './impact-dashboard/forum/forum.component';
import { ImpactEducationalResourcesComponent } from './impact-dashboard/educational-resources/educational-resources.component';
import { AdminDashboardComponent } from './admin-portal/dashboard/dashboard.component';
import { ProfileManagementComponent } from './admin-portal/user-management/profile-management/profile-management.component';
import { PermissionsComponent } from './admin-portal/user-management/permissions/permissions.component';
import { PatientEnrollmentComponent } from './admin-portal/program-management/patient-enrollment/patient-enrollment.component';
import { ResourceAllocationComponent } from './admin-portal/program-management/resource-allocation/resource-allocation.component';
import { StaffSchedulingComponent } from './admin-portal/program-management/staff-scheduling/staff-scheduling.component';
import { PerformanceMonitoringComponent } from './admin-portal/program-management/performance-monitoring/performance-monitoring.component';
import { AdminForumComponent } from './admin-portal/forum/forum.component';
import { CourseComponent } from './admin-portal/educational-resources/course/course.component';
import { LearnersProgressComponent } from './admin-portal/educational-resources/learners-progress/learners-progress.component';
import { AdminEducationalResourcesForumComponent } from './admin-portal/educational-resources/forum/forum.component';

export const routes: Routes = [
    { path: 'auth/login', component: LoginComponent }, // Login route
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [

        // patient 
        { path: 'patient', component: PatientDashboardComponent }, 
        { path: 'patient/health-record', component: HealthRecordComponent },
        { path: 'patient/medications', component: MedicationsComponent },
        { path: 'patient/appointment-scheduling', component: AppointmentSchedulingComponent },
        { path: 'patient/messaging', component: MessagingComponent },
        { path: 'patient/chatbot', component: ChatbotComponent },
        { path: 'patient/forum', component: ForumComponent },
        { path: 'patient/educational-resources', component: EducationalResourcesComponent },
        { path: 'patient/self-assessment-tools', component: SelfAssessmentToolsComponent },


        // caregiver
        { path: 'caregiver', component: CaregiverDashboardComponent }, 
        { path: 'caregiver/courses', component: CoursesComponent },
        { path: 'caregiver/workshops', component: WorkshopsComponent },
        { path: 'caregiver/appointment-scheduling', component: CaregiverAppointmentSchedulingComponent },
        { path: 'caregiver/forum', component: CaregiverForumComponent },
        { path: 'caregiver/educational-resources', component: CaregiverEducationalResourcesComponent },
     
        
        // gcu portal
        { path: 'gcu-portal', component: GcuPortalDashboardComponent },
        { path: 'gcu-portal/decision-support', component: DecisionSupportComponent },
        { path: 'gcu-portal/analytics-and-reporting', component: AnalyticsAndReportingComponent },
        { path: 'gcu-portal/virtual-room', component: VirtualRoomComponent },
        { path: 'gcu-portal/telehealth-integration', component: TelehealthIntegrationComponent },
        { path: 'gcu-portal/messaging', component: GcuMessagingComponent },
        { path: 'gcu-portal/calendar-and-scheduling', component: CalendarAndSchedulingComponent },
    

        // impact dashboard
        { path: 'impact-dashboard', component: ImpactDashboardComponent },
        { path: 'impact-dashboard/event-calendar', component: EventCalendarComponent },
        { path: 'impact-dashboard/resource-directory', component: ResourceDirectoryComponent },
        { path: 'impact-dashboard/volunteer-opportunities', component: VolunteerOpportunitiesComponent },
        { path: 'impact-dashboard/forum', component: ImpactForumComponent },
        { path: 'impact-dashboard/educational-resources', component: ImpactEducationalResourcesComponent },

        
        //admin
        { path: 'admin-portal', component: AdminDashboardComponent },
        { path: 'admin-portal/user-management/profile-management', component: ProfileManagementComponent },
        { path: 'admin-portal/user-management/permissions', component: PermissionsComponent },
        { path: 'admin-portal/program-management/patient-enrollment', component: PatientEnrollmentComponent },
        { path: 'admin-portal/program-management/resource-allocation', component: ResourceAllocationComponent },
        { path: 'admin-portal/program-management/staff-scheduling', component: StaffSchedulingComponent },
        { path: 'admin-portal/program-management/performance-monitoring', component: PerformanceMonitoringComponent },
        { path: 'admin-portal/forum', component: AdminForumComponent },
        { path: 'admin-portal/educational-resources/course', component: CourseComponent },
        { path: 'admin-portal/educational-resources/learners-progress', component: LearnersProgressComponent },
        { path: 'admin-portal/educational-resources/forum', component: AdminEducationalResourcesForumComponent },

    ]
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth/login' }
  ];




