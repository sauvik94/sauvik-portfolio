import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent {
  education = {
    degree: 'M.Tech',
    institution: 'Indian Institute of Technology (Indian School of Mines), Dhanbad',
    duration: '07/2016 - 05/2018',
    grade: '7.32'
  };

  certifications = [   
    {
      name: 'CMC Ltd. (Tata Consultancy Services)',
      duration: '01/2016 - 04/2016',
      description: 'Music Streaming web application - C#, ASP.NET'
    },
    {
      name: 'Angular - The Complete Guide (2025 Edition) - Udemy',
      duration: '07/2025 - 07/2025',
      link: 'https://www.udemy.com/certificate/UC-0b4f2068-25e4-4857-8cf7-28837b681e00/'
    },
    {
      name: 'HackerRank',
      duration: '07/2020 - Present',
      description: 'Python Credential',
      link: 'https://www.hackerrank.com/certificates/94fd940d878c'
    },
    {
      name: 'Bharat Sanchar Nigam Limited(NSCBTTC, BSNL)',
      duration: '05/2015 - 06/2015',
      description: 'Telecom Internship - It was an internship in administration part of telecom Support Infrastructure.'
    }
  ];
}