import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autofill',
  standalone: true,
  imports: [],
  templateUrl: './autofill.component.html',
  styleUrl: './autofill.component.css',
})
export class AutofillComponent implements OnInit {
  texts: string[] = ['Full Stack Developer', 'Mobile App Developer','UI/UX Designer'];
  fullText: string = '';
  displayedText: string = '';
  currentIndex: number = 0;
  textArrayIndex: number = 0;

  ngOnInit(): void {
    this.setNextText();
  }

  setNextText(): void {
    if (this.textArrayIndex < this.texts.length) {
      this.fullText = this.texts[this.textArrayIndex];
      this.displayedText = '';
      this.currentIndex = 0;
      this.startAutoFill();
      this.textArrayIndex++;
    } else {
      this.textArrayIndex = 0; // Reset to cycle through the texts again
      this.setNextText();
    }
  }

  startAutoFill(): void {
    const interval = setInterval(() => {
      if (this.currentIndex < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => this.setNextText(), 2000); // Adjust the delay before starting the next text
      }
    }, 150); // Adjust the speed by changing the interval (in milliseconds)
  }

  stopAutoFill(): void {
    this.displayedText = this.fullText;
  }
}
