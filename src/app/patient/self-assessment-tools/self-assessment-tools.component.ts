import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AssessmentTool {
  title: string;
  measurementTime: string;
  administeredBy: string;
  areasMeasured: string;
  buttonText: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-self-assessment-tools',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './self-assessment-tools.component.html',
  styleUrls: ['./self-assessment-tools.component.css'],
})
export class SelfAssessmentToolsComponent {
  tools: AssessmentTool[] = [
    {
      title: 'Modified Barthel Index',
      measurementTime: '3 - 5 mins',
      administeredBy: 'Healthcare professional, caregiver',
      areasMeasured: 'Activities of Daily Living',
      buttonText: 'Answer Now',
      backgroundColor: 'bg-teal-500',
    },
    {
      title: 'Geriatric Depression Scale',
      measurementTime: '10 - 15 mins',
      administeredBy: 'Clinician, self-administered',
      areasMeasured: 'Depression Symptoms',
      buttonText: 'Start Assessment',
      backgroundColor: 'bg-orange-500',
    },
    {
      title: 'Mini-Mental State Examination (MMSE)',
      measurementTime: '5 - 10 mins',
      administeredBy: 'Healthcare provider',
      areasMeasured: 'Cognitive Function',
      buttonText: 'Take Test',
      backgroundColor: 'bg-green-500',
    },
    {
      title: 'Nutritional Risk Screening',
      measurementTime: '5 - 7 mins',
      administeredBy: 'Dietitian, nurse',
      areasMeasured: 'Nutritional Risk',
      buttonText: 'Assess Now',
      backgroundColor: 'bg-blue-900',
    },
    {
      title: 'Physical Activity Readiness Questionnaire',
      measurementTime: '5 mins',
      administeredBy: 'Self-administered',
      areasMeasured: 'Physical Readiness',
      buttonText: 'Start Now',
      backgroundColor: 'bg-green-700',
    },
    {
      title: 'Pain Assessment in Advanced Dementia (PAINAD)',
      measurementTime: '2 - 5 mins',
      administeredBy: 'Caregiver, nurse',
      areasMeasured: 'Pain Levels',
      buttonText: 'Evaluate Pain',
      backgroundColor: 'bg-orange-600',
    },
    {
      title: 'Falls Risk Assessment',
      measurementTime: '5 - 10 mins',
      administeredBy: 'Physiotherapist',
      areasMeasured: 'Risk of Falling',
      buttonText: 'Check Risk',
      backgroundColor: 'bg-teal-600',
    },
    {
      title: 'Quality of Life Questionnaire',
      measurementTime: '10 - 20 mins',
      administeredBy: 'Self-administered, clinician',
      areasMeasured: 'Quality of Life',
      buttonText: 'Complete Survey',
      backgroundColor: 'bg-purple-500',
    },
  ];

  searchQuery: string = '';

  filterTools() {
    if (!this.searchQuery.trim()) {
      return this.tools;
    }
    return this.tools.filter(tool =>
      tool.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
