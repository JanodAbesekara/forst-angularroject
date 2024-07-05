import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  from_name: string = '';
  from_email: string = '';
  subject: string = '';
  message: string = '';

  send() {
    emailjs
      .send('service_d1u7w98', 'template_hehhwgn', {
        from_name: this.from_name,
        to_name: 'Janod',
        From_email: this.from_email,
        Subject: this.subject,
        message: this.message,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.error('FAILED...', err);
        }
      );
  }
}
