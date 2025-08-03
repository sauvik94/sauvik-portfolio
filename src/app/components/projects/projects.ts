import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Restaurant Locator',
      date: '09/2018',
      technologies: ['Python', 'Django'],
      description: 'Locates restaurants in a predefined radius'
    }
  ];
}