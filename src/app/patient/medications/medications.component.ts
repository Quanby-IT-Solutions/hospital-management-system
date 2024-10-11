import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-medications',
  standalone: true,
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css'],
  imports: [CommonModule],
})
export class MedicationsComponent {
  // Dummy medication data
  medications = [
    {
      name: 'Medicine',
      dosage: '100 mg',
      time: '8:00 am',
      instructions: 'Take One before eating',
      status: '12/30 pill took',
      reminders: 'Reminders',
      actions: { taken: false, skipped: false }
    },
    {
      name: 'Vitamins',
      dosage: '100 mg',
      time: '8:00 am',
      instructions: 'Take One before eating',
      status: '12/30 pill took',
      reminders: 'Reminders',
      actions: { taken: true, skipped: false }
    },
    {
      name: 'Medicine',
      dosage: '100 mg',
      time: '8:00 am',
      instructions: 'Take One before eating',
      status: '12/30 pill took',
      reminders: 'Reminders',
      actions: { taken: false, skipped: true }
    },
    {
      name: 'Medicine',
      dosage: '100 mg',
      time: '8:00 am',
      instructions: 'Take One before eating',
      status: '12/30 pill took',
      reminders: 'Reminders',
      actions: { taken: false, skipped: false }
    }
  ];

  // Method to handle marking medication as taken
  markAsTaken(index: number) {
    this.medications[index].actions.taken = true;
    this.medications[index].actions.skipped = false;
  }

  // Method to handle skipping medication
  skipMedication(index: number) {
    this.medications[index].actions.taken = false;
    this.medications[index].actions.skipped = true;
  }
}
