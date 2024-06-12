import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AgGridModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
