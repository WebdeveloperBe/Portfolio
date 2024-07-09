import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  posts: {
    title: string;
    languages: string;
    description: string;
    image: string;
    url: string;
    url2: string;
  }[] = [
    {
      title: 'Join',
      languages: 'JavaScript | HTML | CSS',
      description: 'myWork.joinText',
      url: 'https://benedikt-messler.developerakademie.net/Join/index.html',
      url2: 'https://github.com/WebdeveloperBe/Join4/tree/main',
      image: './assets/img/myWork/join.svg',
    },
    {
      title: 'El Pollo Loco',
      languages: 'JavaScript | HTML | CSS',
      description: 'myWork.polloLocoText',
      url: 'https://benedikt-messler.developerakademie.net/EL_POLLO_LOCO/index.html',
      url2: 'https://github.com/WebdeveloperBe/Join4/tree/main',
      image: './assets/img/myWork/elPolloLoco.svg',
    },
    {
      title: 'Pokédex',
      languages: 'JavaScript | HTML | CSS | Api',
      description: 'myWork.pokedexText',
      url: 'https://benedikt-messler.developerakademie.net/pokedex/index.html',
      url2: 'https://github.com/WebdeveloperBe/Join4/tree/main',
      image: './assets/img/myWork/pokedex.svg',
    },
  ];
}