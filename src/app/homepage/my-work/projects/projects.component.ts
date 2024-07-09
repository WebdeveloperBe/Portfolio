import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() index!: number;

  @Input()
  singlepost: {
    title: string;
    languages: string;
    description: string;
    url: string;
    url2: string;
    image: string;
  } = {
    title: '',
    languages: '',
    description: '',
    url: '',
    url2: '',
    image: '',
  };
}