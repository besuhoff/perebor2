import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    window.scrollTo(0, 0);
  }

}
