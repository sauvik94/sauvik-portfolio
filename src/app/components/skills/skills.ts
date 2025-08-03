import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { SkillCategory } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.skillCategories = this.dataService.getSkills();
  }

  getProgressBarClass(level: number): string {
    if (level >= 90) return 'expert';
    if (level >= 75) return 'advanced';
    if (level >= 50) return 'intermediate';
    return 'beginner';
  }
}