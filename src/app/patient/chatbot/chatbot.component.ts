import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: 'user' | 'bot';
  content: string;
  time: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  currentTime: string | undefined;
  private intervalId: any;


  messages: Message[] = [
    { sender: 'bot', content: 'Hello! How can I assist you today?', time: '4:30 pm' },
    { sender: 'user', content: 'Can you tell me more about the symptoms of a cold?', time: '4:35 pm' },
  ];

  newMessage: string = '';

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleString('en-US', { 
      weekday: 'long',
      year: '2-digit', 
      month: 'numeric', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: true 
    }).replace(',', '');
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      // Add the user's message
      this.messages.push({
        sender: 'user',
        content: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });

      // Simulate a bot response (add your own logic here)
      setTimeout(() => {
        this.messages.push({
          sender: 'bot',
          content: 'Sure! Common symptoms include a runny nose, sore throat, and mild fever.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
      }, 1000);

      // Clear the input
      this.newMessage = '';
    }
  }
}
