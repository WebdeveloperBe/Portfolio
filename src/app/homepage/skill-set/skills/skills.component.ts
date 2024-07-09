import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  @Input()
  singlepost: {
    name: string;
    image: string;
  } = {
    name: '',
    image: '',
  };

}
