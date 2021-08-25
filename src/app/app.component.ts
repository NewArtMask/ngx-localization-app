import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '@ngx-translate/core';
  changeColorSandwich = false;
  changeColorHome = false;
  changeColorUsers = false;
  changeColorLanguages = false;
  menuVisible = false;
  dropdownVisible = false;
  languages: string[] = [
    'de',
    'en',
    'ua'
  ];

  constructor(public translate: TranslateService) { }

  onChange(event: Event) {
    this.title = (event.target as HTMLInputElement).value;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
