import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Category } from '../../models/category.model';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit, OnChanges {
  @Input() categories: Category[];
  @Input() menus: Menu[];

  panels: { [key: number]: Menu[] } = {};
  activeCategory: Category;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.categories || changes.menus) {
      this.initPanels();
    }
  }

  onTabChange(category: Category): void {
    this.activeCategory = { ...category };
  }

  private initPanels(): void {
    if (this.categories) {
      this.categories.forEach((category) => this.mapPanel(category));
      const allCategory: Category = {
        creDate: '',
        idCategory: -1,
        idCategoryDetail: -1,
        idLanguage: 1,
        image: '',
        name: 'Tümü'
      };
      this.categories.splice(0, 0, allCategory);
      this.mapAll(this.categories[0]);
      this.activeCategory = this.categories[0];
    }
  }

  private mapAll(category: Category): void {
    this.panels[category.idCategory] = this.menus;
  }

  private mapPanel(category: Category): void {
    this.panels[category.idCategory] = this.menus.filter(
      (menu) => menu.idCategory === category.idCategory
    );
  }
}
