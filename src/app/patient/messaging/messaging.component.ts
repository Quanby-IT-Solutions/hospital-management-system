import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: string;
  content: string;
  time: string;
  isUser: boolean;
}

@Component({
  selector: 'app-messaging',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css'],
})
export class MessagingComponent {
  conversations = [
    { id: 1, name: 'Cheska Trinidad', message: 'Hello, How are you doing?', time: '4:30 pm' },
    { id: 2, name: 'Cheska Trinidad', message: 'Hello, How are you doing?', time: '4:30 pm' },
    // Add more conversations if needed
  ];

  selectedConversation = {
    name: 'Cheska Trinidad',
    messages: [
      { sender: 'Cheska Trinidad', content: 'Hello, How are you doing? I\'m Doctor Anna and I live in the forest', time: '4:30 pm', isUser: false },
      { sender: 'You', content: 'Hi! My name is Olaf and I like warm hugs. I love the cold weather', time: '6:30 pm', isUser: true },
    ],
  };

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.selectedConversation.messages.push({
        sender: 'You',
        content: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true,
      });
      this.newMessage = '';
    }
  }
}
