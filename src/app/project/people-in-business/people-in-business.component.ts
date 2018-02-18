import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'portfolio-people-in-business',
  templateUrl: './people-in-business.component.html',
  styleUrls: ['./people-in-business.component.css']
})
export class ProjectPeopleInBusinessComponent implements OnInit, OnDestroy {

  public constructor(private breadcrumbService: BreadcrumbService) {

  }

  public ngOnInit(): void {
    setTimeout(() => this.breadcrumbService.setBreadcrumb('project.peopleinbusiness.title'));
  }

  public ngOnDestroy(): void {
    this.breadcrumbService.setBreadcrumb(null);
  }
}
