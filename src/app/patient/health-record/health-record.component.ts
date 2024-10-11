import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health-record',
  standalone: true,  // Make the component standalone
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css'],
  imports: [CommonModule]  // Import necessary Angular modules directly
})
export class HealthRecordComponent {
  // Patient information (including medications)
  patient = {
    fullName: 'David Guetta',
    dateOfBirth: 'August 10, 2003',
    patientId: 'XX09174',
    bloodType: 'O+',
    address: 'Danao, Albay',
    email: 'DavidG@gmail.com',
    profilePicture: 'assets/img/bini.jpg',
    medications: [
      { name: 'Albuterol HFA', dose: '2 Puffs', frequency: 'Daily' },
      { name: 'Aspirin', dose: '81 mg', frequency: 'Daily' }
    ]
  };

  // Medical history data
  medicalHistory = [
    { condition: 'Allergies', date: '12/08/2024' },
    { condition: 'Diabetes', date: '12/08/2024' }
  ];

  // Last vitals data
  lastVitals = {
    date: '12-08-2024',
    temperature: '37.5',
    heartRate: '93',
    weight: '72',
    oxygenRate: '95',
    bloodPressure: '120/80',
    respiratoryRate: '25'
  };

  // Lab results data
  labResults = [
    { test: 'WBC', result: '72 k/µL', range: '(5.7 - 16.7)' },
    { test: 'Hemoglobin', result: '13.2 g/dL', range: '(12.0 - 16.0)' }
  ];

  // Visit records
  allVisits = [
    {
      date: '12-08-2024',
      status: 'Monthly Checkup',
      doctor: 'Anne Hathaway',
      vitals: 'Temperature: 37.5, Heart Rate: 93, Weight: 72 kg'
    },
    {
      date: '11-08-2024',
      status: 'Emergency Visit',
      doctor: 'Dr. Strange',
      vitals: 'Temperature: 38.0, Heart Rate: 105, Weight: 72 kg'
    }
  ];
}
