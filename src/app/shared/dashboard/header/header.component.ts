import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() role: string | undefined;
  currentTime: string | undefined;
  private intervalId: any;

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getProfileImage(): string {
    switch (this.role) {
      case 'Patient':
        return 'assets/img/patient.webp';
      case 'Caregiver':
        return 'assets/img/doctor.jpg';
      case 'GCU Portal':
        return 'assets/img/bini_aiah.png';
      case 'Impact Dashboard':
        return 'assets/img/bini_aiah.png';
      case 'Admin Portal':
        return 'assets/img/bini_aiah.png';
      default:
        return 'assets/img/bini_aiah.png';
    }
  }

 private updateTime() {
  const now = new Date();
  this.currentTime = now.toLocaleString('en-US', { 
    weekday: 'long',
    year: '2-digit', 
    month: 'numeric', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: true 
  }).replace(',', '');
}

}
