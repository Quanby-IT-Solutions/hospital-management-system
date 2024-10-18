import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Article {
  title: string;
  author: string;
  timestamp: string;
  content: string;
  imageUrl: string;
}

@Component({
  selector: 'app-educational-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educational-resources.component.html',
  styleUrls: ['./educational-resources.component.css'],
})
export class EducationalResourcesComponent {
  mainArticle: Article = {
    title: 'How to have a healthy lifestyle: 3 easy steps',
    author: 'Lean Jedfrey Deduque',
    timestamp: '13 minutes ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageUrl: 'https://via.placeholder.com/800x400?text=Main+Article+Image',
  };

  latestNews: Article[] = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      author: '',
      timestamp: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/300x200?text=News+Image+1',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      author: '',
      timestamp: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/300x200?text=News+Image+2',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      author: '',
      timestamp: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/300x200?text=News+Image+3',
    },
  ];
}
