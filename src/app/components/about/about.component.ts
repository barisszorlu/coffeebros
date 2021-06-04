import { Component, Input, OnInit } from '@angular/core';
import { About } from '../../models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input() about: About;

  constructor() {}

  ngOnInit(): void {}
}
