import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],

})
export class DashboardComponent {
  role: string;

  constructor(private route: ActivatedRoute) {
    this.role = this.route.snapshot.queryParams['role'] || 'Patient'; // Default to Patient if no role is provided
  }
}




