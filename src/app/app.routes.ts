import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./app').then(m => m.AppComponent),
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.AboutComponent) },
      { path: 'experience', loadComponent: () => import('./components/experience/experience').then(m => m.ExperienceComponent) },
      { path: 'skills', loadComponent: () => import('./components/skills/skills').then(m => m.SkillsComponent) },
      { path: 'education', loadComponent: () => import('./components/education/education').then(m => m.EducationComponent) },
      { path: 'projects', loadComponent: () => import('./components/projects/projects').then(m => m.ProjectsComponent) },
      { path: 'contact', loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent) },
    ]
  }
];