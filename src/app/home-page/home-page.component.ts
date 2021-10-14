import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as script from '../app-main.js';
import { About } from '../models/about.model';
import { Category } from '../models/category.model';
import { Contact } from '../models/contact.model';
import { Menu } from '../models/menu.model';
import { SliderDetail } from '../models/slider.model';
import { WebsiteModel } from '../models/website.model.js';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  about: About;
  categories: Category[];
  contact: Contact;
  menus: Menu[];
  mapUrl: SafeResourceUrl;
  sliderDetails: SliderDetail[];

  constructor(
    private readonly language: LanguageService,
    public readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getTranslations(1);
  }

  onLangChange(langId: number): void {
    this.getTranslations(langId);
  }

  private async getTranslations(langId: number) {
    await this.language.get(langId).subscribe( 
      (model) =>  this.updateData(model, langId),
      (error) => {
        console.error(error);
        setTimeout(() => script.application.load(), 250);
      }
    );
  }

  private updateData(model: WebsiteModel, langId: number): void {
    this.about = model.aboutModel;
    this.categories = model.categoryModel;
    this.contact = model.contactModel;
    this.menus = model.menuModel;
    this.sliderDetails = model.sliderModel;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.contact?.map
    );

    if (!this.sliderDetails || this.sliderDetails.length <= 0) {
      this.sliderDetails = [
        {
          idSlider: 0,
          description: '',
          idLanguage: langId,
          idSliderDetail: 0,
          image: '',
          title: '',
        },
      ];
    }

    setTimeout(() => script.application.load(), 250);
  }
}
