import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { ButtonComponent } from '../../buttons/button/button.component';
import { BackButtonComponent } from "../../buttons/back-button/back-button.component";
import { CloseModalButtonComponent } from "../../buttons/close-modal/close-modal.component";

@Component({
  selector: 'app-appointment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, BackButtonComponent, CloseModalButtonComponent],
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css'],
})
export class AppointmentModalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() action = new EventEmitter<{ doctorId: number; date: string; time: string }>();

  currentStep: number = 1;
  selectedOption: string | null = null;
  selectedDate: Date | null = null;
  selectedTimeSlot: string = '';
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  today: Date = new Date(); 
  showCalendar: boolean = false;
  // selectedDoctorId: number | null = null;
  selectedDoctorId: string = ''; 


  // Sample list of doctors
  doctors = [
    { id: 1, name: 'Dr. Jose Rizal' },
    { id: 2, name: 'Dr. Juan Luna' },
    { id: 3, name: 'Dr. Maria Clara' },
  ];

  dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  get daysInMonth(): number[] {
    const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysArray = Array.from({ length: days }, (_, i) => i + 1);
    return Array.from({ length: firstDayOfMonth }, () => 0).concat(daysArray);
  }

  get currentMonthName(): string {
    return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' });
  }

  isPastDate(day: number): boolean {
    if (day <= 0) return true;
    const selectedDate = new Date(this.currentYear, this.currentMonth, day);
    return selectedDate < this.today;
  }

  isSelectedDate(day: number): boolean {
    if (!this.selectedDate) return false;
    return this.selectedDate.getDate() === day &&
           this.selectedDate.getMonth() === this.currentMonth &&
           this.selectedDate.getFullYear() === this.currentYear;
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  closeCalendar() {
    this.showCalendar = false;
  }

  selectDate(day: number) {
    if (day > 0 && !this.isPastDate(day)) {
      this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
    }
  }

  confirmDate() {
    this.showCalendar = false;
  }

  onClose() {
    this.closeModal.emit();
  }

  onAction(action: string) {
    if (action === 'next' && this.selectedOption) {
      this.currentStep += 1;
    } else if (action === 'back') {
      this.currentStep -= 1;
    } else if (action === 'book' && this.selectedDate && this.selectedTimeSlot && this.selectedDoctorId !== null) {
      const date = `${this.currentYear}-${(this.currentMonth + 1).toString().padStart(2, '0')}-${this.selectedDate.getDate().toString().padStart(2, '0')}`;
      this.action.emit({
        doctorId: Number(this.selectedDoctorId),  // Ensure doctorId is emitted as a number
        date: date,
        time: this.selectedTimeSlot,
      });
      this.closeModal.emit();
    }
  }

  isLastStep(): boolean {
    return this.currentStep === 2;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    } else {
      this.currentMonth -= 1;
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    } else {
      this.currentMonth += 1;
    }
  }
}
