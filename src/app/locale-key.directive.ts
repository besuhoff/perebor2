import { Directive, Input, DoCheck, ElementRef, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { LocaleService } from './locale.service';

@Directive({
  selector: '[localeKey]'
})
export class LocaleKeyDirective implements DoCheck, OnInit {

  private translation: TranslationValue;
  private key$$: ReplaySubject<string> = new ReplaySubject<string>(1);

  @Input() set localeKey(key: string) {
    this.key$$.next(key);
  }

  public constructor(private localeService: LocaleService, private element: ElementRef) { }

  public ngOnInit() {
    this.key$$
      .pipe(mergeMap((key: string) => this.localeService.translate$(key)))
      .subscribe((translation: TranslationValue) => this.translation = translation);
  }

  public ngDoCheck() {
    const nativeElement: HTMLElement = this.element.nativeElement;

    if (this.translation instanceof Array) {
      const iterator = document.createNodeIterator(nativeElement, NodeFilter.SHOW_TEXT);
      const matcher: RegExp = /^\[(\d+)]$/;

      for (let node: Node = iterator.nextNode(); node; node = iterator.nextNode()) {
        let text = '';

        if (!node['_localeData']) {
          const matches = node.textContent.match(matcher);

          if (matches) {
            text = this.translation[+matches[1]];
            node['_localeData'] = {
              index: +matches[1]
            };

            node.nodeValue = '';
          }
        }

        if (node['_localeData']) {
          const html = this.translation[node['_localeData'].index];

          if (!node['_localeData'].element) {
            const spanElement: HTMLSpanElement = document.createElement('span');
            spanElement.innerHTML = html;
            node['_localeData'].element = spanElement;
            node.after(spanElement);
          } else {
            node['_localeData'].element.innerHTML = html;
          }
        }
      }
    } else if (typeof(this.translation) === 'string') {
      nativeElement.innerHTML = this.translation.toString();
    }
  }
}
