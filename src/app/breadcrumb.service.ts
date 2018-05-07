import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class BreadcrumbService {

  private breadcrumb$$: ReplaySubject<string> = new ReplaySubject(1);

  public constructor() { }

  public get breadcrumb$(): Observable<string> {
    return this.breadcrumb$$.asObservable();
  }

  public setBreadcrumb(breadcrumb: string): void {
    this.breadcrumb$$.next(breadcrumb);
  }
}
