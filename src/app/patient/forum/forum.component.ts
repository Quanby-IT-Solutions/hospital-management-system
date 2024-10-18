import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Post {
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  imageUrl?: string;
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent {
  posts: Post[] = [
    {
      author: 'Lean Jedfrey Deduque',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: '1 hour ago',
      likes: 111,
      comments: 24,
    },
    {
      author: 'Lean Jedfrey Deduque',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      timestamp: '1 hour ago',
      likes: 89,
      comments: 15,
    },
  ];

  newPostContent: string = '';

  publishPost() {
    if (this.newPostContent.trim()) {
      this.posts.unshift({
        author: 'Lean Jedfrey Deduque',
        content: this.newPostContent,
        timestamp: 'Just now',
        likes: 0,
        comments: 0,
      });
      this.newPostContent = '';
    }
  }
}
