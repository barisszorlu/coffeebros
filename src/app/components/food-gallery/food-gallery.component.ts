import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-food-gallery',
  templateUrl: './food-gallery.component.html',
  styleUrls: ['./food-gallery.component.scss'],
})
export class FoodGalleryComponent implements OnInit {
  @Input() menus: Menu[];

  constructor() {}

  ngOnInit(): void {}
}
