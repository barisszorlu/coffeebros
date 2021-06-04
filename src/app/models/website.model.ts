import { About } from './about.model';
import { Category } from './category.model';
import { Contact } from './contact.model';
import { Menu } from './menu.model';
import { SliderDetail } from './slider.model';

export class WebsiteModel {
  aboutModel: About;
  categoryModel: Category[];
  contactModel: Contact;
  menuModel: Menu[];
  sliderModel: SliderDetail[];
}
