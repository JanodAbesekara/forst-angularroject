import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autofill',
  standalone: true,
  imports: [],
  templateUrl: './autofill.component.html',
  styleUrl: './autofill.component.css',
})
export class AutofillComponent implements OnInit {
  fullText: string = 'Janod  Abesekara';
  displayedText: string = '';
  currentIndex: number = 0;

  ngOnInit(): void {
    this.startAutoFill();
  }

  startAutoFill(): void {
    const interval = setInterval(() => {
      if (this.currentIndex < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Adjust the speed by changing the interval (in milliseconds)
  }

  stopAutoFill(): void {
    this.displayedText = this.fullText;
  }
}
