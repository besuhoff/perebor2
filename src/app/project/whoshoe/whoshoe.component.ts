import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'portfolio-whoshoe',
  templateUrl: './whoshoe.component.html',
  styleUrls: ['./whoshoe.component.css']
})
export class ProjectWhoshoeComponent implements OnInit, OnDestroy {

  public constructor(private breadcrumbService: BreadcrumbService) {

  }

  public ngOnInit(): void {
    setTimeout(() => this.breadcrumbService.setBreadcrumb('project.whoshoe.title'));
  }

  public ngOnDestroy(): void {
    this.breadcrumbService.setBreadcrumb(null);
  }

}
