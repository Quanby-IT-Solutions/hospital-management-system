import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = 'Click me'; 
  @Input() btnColor: 'orange' | 'red' | 'teal' | 'white' | 'transparent'= 'teal'; 
  @Input() fontSize: 'sm' | 'md' | 'lg' = 'md'; 
  @Input() width: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'; 
  @Input() class: string = ''; 
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;  
  @Input() textColor: 'white' | 'black' | 'orange' | 'red' | 'teal' = 'white';
  @Output() onClick = new EventEmitter<void>(); 

  getSizeClasses() {
    switch (this.fontSize) {
      case 'sm':
        return 'text-sm'; 
      case 'md':
        return 'text-base'; 
      case 'lg':
        return 'text-lg'; 
      default:
        return 'text-base';
    }
  }

  getColorClasses() {
    if (this.disabled) {
      return 'bg-gray-300';  // Optional: You can set a different color when disabled
    }

    switch (this.btnColor) {
      case 'orange':
        return 'bg-secondary-color hover:bg-secondary-color-light';
      case 'red':
        return 'bg-warning-color hover:bg-warning-color-light';
      case 'teal':
        return 'bg-primary-color hover:bg-primary-color-light';  
      case 'white':
        return 'bg-white';
      case 'transparent':
        return 'bg-transparent';
      default:
        return '';
    }
  }

  getWidthClasses() {
    switch(this.width) {
      case 'sm':
        return 'w-32';
      case 'md':
        return 'w-40'; 
      case 'lg':
        return 'w-48'; 
      case 'xl':
        return 'w-56'; 
      case '2xl':
        return 'w-64'; 
      default:
        return 'w-40'; 
    }
  }

  getPaddingClasses() {
    switch(this.padding) {
      case 'sm': 
        return 'py-2';
      case 'md':
        return 'py-3';
      case 'lg': 
        return 'py-4';
      default:
        return 'py-2';
    }
  }

  getTextColorClasses(){
    switch(this.textColor) {
      case 'black':
        return 'text-black';
      case 'white':
        return 'text-white';
      case 'orange':
        return 'text-secondary-color';
      case 'red':
        return 'text-warning-color ';
      case 'teal':
        return 'text-primary-color';  
      default: 
        return '';
    }

  }

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();  // Emit the click event only if not disabled
    }
  }
}
