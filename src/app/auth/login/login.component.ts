import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginAsPatient() {
    this.router.navigate(['/dashboard/patient'], { queryParams: { role: 'Patient' } });
  }

  loginAsCaregiver() {
    this.router.navigate(['/dashboard/caregiver'], { queryParams: { role: 'Caregiver' } });
  }

  loginAsGCU() {
    this.router.navigate(['/dashboard/gcu-portal'], { queryParams: { role: 'GCU Portal' } });
  }

  loginAsImpactDashboard() {
    this.router.navigate(['/dashboard/impact-dashboard'], { queryParams: { role: 'Impact Dashboard' } });
  }

  loginAsAdmin() {
    this.router.navigate(['/dashboard/admin-portal'], { queryParams: { role: 'Admin Portal' } });
  }
}
