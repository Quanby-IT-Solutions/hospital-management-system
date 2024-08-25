import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/buttons/button/button.component';

interface Appointment {
  name: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'past';
  imageUrl: string;
}

@Component({
  selector: 'app-appointment-scheduling',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './appointment-scheduling.component.html',
  styleUrls: ['./appointment-scheduling.component.css']
})
export class AppointmentSchedulingComponent {
  appointments: Appointment[] = [
    {
      name: 'Dr. Baby Boy Nebres',
      date: 'August 13, 2024',
      time: '10:30 am',
      location: 'Daraga Albay',
      status: 'upcoming',
      imageUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      name: 'Dr. Jose Rizal',
      date: 'August 21, 2024',
      time: '10:30 am',
      location: 'Washington Albay',
      status: 'upcoming',
      imageUrl: 'https://randomuser.me/api/portraits/men/42.jpg',
    },

  ];

  getUpcomingAppointments() {
    return this.appointments.filter(appointment => appointment.status === 'upcoming');
  }

  getPastAppointments() {
    return this.appointments.filter(appointment => appointment.status === 'past');
  }

  handleNewAppointment() {
    console.log('New appointment creation triggered!');
    // Add your logic here
  }

  handleCancelAppointment(appointment: any) {
    console.log('Cancel appointment:', appointment);
    // Add your logic here
  }

  handleEditAppointment(appointment: any) {
    console.log('Edit appointment:', appointment);
    // Add your logic here
  }
}
