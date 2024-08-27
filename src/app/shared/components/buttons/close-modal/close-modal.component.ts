import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-close-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './close-modal.component.html',
  styleUrls: ['./close-modal.component.css'],
})
export class CloseModalButtonComponent {
  @Output() onClose = new EventEmitter<void>(); 

  handleClick() {
    this.onClose.emit();
  }
}
