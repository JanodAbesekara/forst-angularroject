import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'Home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
