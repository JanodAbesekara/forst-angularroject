import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AgGridModule,MatGridListModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
