import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'portfolio-justprivat',
  templateUrl: './justprivat.component.html',
  styleUrls: ['./justprivat.component.css']
})
export class ProjectJustprivatComponent implements OnInit, OnDestroy {

  public constructor(private breadcrumbService: BreadcrumbService) {

  }

  public ngOnInit(): void {
    setTimeout(() => this.breadcrumbService.setBreadcrumb('project.justprivat.title'));
  }

  public ngOnDestroy(): void {
    this.breadcrumbService.setBreadcrumb(null);
  }
}
