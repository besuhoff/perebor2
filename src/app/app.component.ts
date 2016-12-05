import { Component } from '@angular/core';
import {LanguageService} from "./language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private languageService: LanguageService) {
    languageService.initLanguage();
  }
}
