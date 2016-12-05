import { Directive, ElementRef } from '@angular/core';
import { TranslateService } from 'ng2-translate'

@Directive({
  selector: '[archive]'
})
export class ArchiveDirective {

  constructor($element: ElementRef, $translate: TranslateService) {
    $translate.get('MOVED_TO_ARCHIVE').subscribe(function(text) {
      $element.nativeElement.title = text;
      $element.nativeElement.classList.add('archive');
    });
  }

}
