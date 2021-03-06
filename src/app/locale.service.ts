import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { map } from 'rxjs/operators';

@Injectable()
export class LocaleService {

  public translate$(keyPath: string) {
    return this.languageService.locale$.pipe(map((locale: Locale) => {
      let result = '';
      let key: string[] = keyPath.split('.');
      let translation: Translation | TranslationValue = locale[key[0]];
      const lastKey: string = key[key.length - 1];

      for (let i = 1; translation && i < key.length - 1; i++) {
        translation = translation[key[i]];
      }

      if (translation && (typeof(translation[lastKey]) === 'string' || translation[lastKey] instanceof Array)) {
        result = translation[lastKey];
      }

      return result;
    }));
  }

  public constructor(private languageService: LanguageService) { }
}
