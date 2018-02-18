import { Directive, ElementRef } from '@angular/core';
import { LocaleService } from './locale.service';

@Directive({
  selector: '[archive]'
})
export class ArchiveDirective {

  constructor($element: ElementRef, locale: LocaleService) {
    $element.nativeElement.classList.add('archive');

    locale.translate$('base.archived').subscribe(function(text) {
      $element.nativeElement.title = text;
    });
  }

}
