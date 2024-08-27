import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/buttons/button/button.component';
import { AppointmentModalComponent } from '../../shared/components/modal/appointment-modal/appointment-modal.component';

interface Appointment {
  doctorName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'done';
  imageUrl: string;
}

@Component({
  selector: 'app-appointment-scheduling',
  standalone: true,
  imports: [CommonModule, ButtonComponent, AppointmentModalComponent],
  templateUrl: './appointment-scheduling.component.html',
  styleUrls: ['./appointment-scheduling.component.css']
})
export class AppointmentSchedulingComponent implements OnInit {
  appointments: Appointment[] = [];

  doctors = [
    { id: 1, name: 'Dr. Jose Rizal' },
    { id: 2, name: 'Dr. Juan Luna' },
    { id: 3, name: 'Dr. Maria Clara' },
  ];

  isModalOpen: boolean = false;

  ngOnInit() {
    this.updateAppointmentStatuses();
  }

  getUpcomingAppointments() {
    return this.appointments.filter(appointment => appointment.status === 'upcoming');
  }

  updateAppointmentStatuses() {
    const today = new Date();
    this.appointments.forEach(appointment => {
      const appointmentDate = new Date(appointment.date);
      if (appointmentDate < today) {
        appointment.status = 'done';
      }
    });
  }

  handleNewAppointment() {
    console.log('New appointment creation triggered!');
  }

  handleCancelAppointment(appointment: any) {
    console.log('Cancel appointment:', appointment);
  }

  handleEditAppointment(appointment: any) {
    console.log('Edit appointment:', appointment);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleAction(action: { doctorId: number; date: string; time: string }) {
    console.log('Received Action:', action);

    const doctor = this.doctors.find(doc => doc.id === action.doctorId);
    const doctorName = doctor ? doctor.name : 'Unknown Doctor';

    if (action) {
      this.appointments.push({
        doctorName: doctorName,
        date: action.date,
        time: action.time,
        status: 'upcoming',
        imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg', // Update image URL as needed
      });
      this.updateAppointmentStatuses();
      this.closeModal();
    }
  }
}
