import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'portfolio-fmg',
  templateUrl: './fmg.component.html',
  styleUrls: ['./fmg.component.css']
})
export class ProjectFmgComponent implements OnInit, OnDestroy {

  public constructor(private breadcrumbService: BreadcrumbService) {

  }

  public ngOnInit(): void {
    setTimeout(() => this.breadcrumbService.setBreadcrumb('project.fmg.title'));
  }

  public ngOnDestroy(): void {
    this.breadcrumbService.setBreadcrumb(null);
  }
}
