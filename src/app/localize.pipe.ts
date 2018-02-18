import { Pipe, PipeTransform } from '@angular/core';
import { LocaleService } from './locale.service';
import { LanguageService } from './language.service';

@Pipe({
  name: 'localize',
  pure: false
})
export class LocalizePipe implements PipeTransform {

  private translation: string;
  private language: string;
  private cache: {
    language?: string,
    key?: string
  } = {};

  public constructor(private localeService: LocaleService, languageService: LanguageService) {
    languageService.language$.subscribe((lang: string) => this.language = lang);
  }

  public transform(key: string): string {

    if (this.cache.language !== this.language || this.cache.key !== key) {
      this.localeService.translate$(key)
        .subscribe((translation: TranslationValue) => {
          this.translation = translation.toString();
          this.cache = {
            language: this.language,
            key
          }
        });
    }

    return this.translation;
  }

}
