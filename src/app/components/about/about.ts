import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  title = 'Software Engineer';
  summary = 'Experienced Software Engineer with Expertise in .NET Core, Azure Integration, Web APIs, and SQL Server – Delivering Scalable and Secure Enterprise Applications';
  contactInfo = {
    email: 'sauvikbiswas94@gmail.com',
    phone: '9875585915',
    location: 'Bangalore',
    linkedin: 'linkedin.com/in/sauvikbiswas94',
    github: 'github.com/sauvik94'
  };

  typedOptions = {
    strings: [this.title],
    typeSpeed: 50,
    showCursor: false
  };
}