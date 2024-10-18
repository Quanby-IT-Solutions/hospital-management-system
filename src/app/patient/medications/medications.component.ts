import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Medication {
  name: string;
  dosage: string;
  time: string;
  status: 'taken' | 'skipped' | 'pending';
  instructions: string[];
}

@Component({
  selector: 'app-medications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent {
  searchQuery: string = '';
  medications: Medication[] = [
    {
      name: 'Medicine',
      dosage: '100 mg',
      time: '8:00 am',
      status: 'taken',
      instructions: ['Take 2 pills', 'Take One before eating'],
    },
    {
      name: 'Vitamins',
      dosage: '100 mg',
      time: '8:00 am',
      status: 'pending',
      instructions: ['Take 2 pills', 'Take One before eating'],
    },
    {
      name: 'Medicine',
      dosage: '100 mg',
      time: '8:00 am',
      status: 'skipped',
      instructions: ['Take 2 pills', 'Take One before eating'],
    },
    {
      name: 'Medicine',
      dosage: '100 mg',
      time: '8:00 am',
      status: 'taken',
      instructions: ['Take 2 pills', 'Take One before eating'],
    },
  ];

  filterMedications() {
    return this.medications.filter(med =>
      med.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  markAsTaken(medication: Medication) {
    medication.status = 'taken';
  }

  markAsSkipped(medication: Medication) {
    medication.status = 'skipped';
  }
}
