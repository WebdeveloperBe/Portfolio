import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  hiddenMenuIsAktive = false;

  toggleMenu() {
    this.hiddenMenuIsAktive = !this.hiddenMenuIsAktive
    console.log(this.hiddenMenuIsAktive);
    if (this.hiddenMenuIsAktive == true){
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'unset';
    } else {
      document.body.style.overflowY = 'unset';
      document.body.style.overflowX = 'hidden';
    }
  }

  onLinkClick(event: Event): void {
    // Entferne die 'clicked' Klasse von allen Links
    const links = document.querySelectorAll('a.link');
    links.forEach(link => link.classList.remove('clicked'));

    // Füge die 'clicked' Klasse zum geklickten Link hinzu
    const target = event.currentTarget as HTMLElement;
    target.classList.add('clicked');
  }

  translate = inject(TranslationService);
}