import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() private itemIsArchive: boolean;
  @Input() private name: string;

  constructor() { }

  ngOnInit() {
  }

}
