import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() public itemIsArchive: boolean;
  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }

}
