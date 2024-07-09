import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [SkillsComponent, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  posts: {
    name: string;
    image: string;
  }[] = [
    {
      name: 'Angular',
      image: './assets/img/skillSet/angular.png',
    },
    {
      name: 'TypeScript',
      image: './assets/img/skillSet/typeScript.png',
    },
    {
      name: 'JavaScript',
      image: './assets/img/skillSet/javaScript.png',
    },
    {
      name: 'HTML',
      image: './assets/img/skillSet/html.png',
    },
    {
      name: 'Scrum',
      image: './assets/img/skillSet/scrum.png',
    },
    {
      name: 'Firebase',
      image: './assets/img/skillSet/firebase.png',
    },
    {
      name: 'GIT',
      image: './assets/img/skillSet/git.png',
    },
    {
      name: 'CSS',
      image: './assets/img/skillSet/css.png',
    },
    {
      name: 'Rest-Api',
      image: './assets/img/skillSet/restApi.png',
    },
    {
      name: 'Material-Design',
      image: './assets/img/skillSet/materialDesign.png',
    },
  ];
}
