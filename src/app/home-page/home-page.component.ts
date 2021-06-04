import { AfterViewInit, Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as script from '../app-main.js';
import { About } from '../models/about.model';
import { Category } from '../models/category.model';
import { Contact } from '../models/contact.model';
import { Menu } from '../models/menu.model';
import { Slider, SliderDetail } from '../models/slider.model';
import { WebsiteModel } from '../models/website.model.js';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  about: About;
  categories: Category[];
  contact: Contact;
  menus: Menu[];
  // slider: Slider;
  mapUrl: SafeResourceUrl;
  sliderDetails: SliderDetail[];

  isPageLoaded = false;

  constructor(
    private readonly language: LanguageService,
    public readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // if (localStorage.getItem('scriptloaded') == '1') {
    //   this.getTranslations(1);
    // }else{
    //   localStorage.setItem('scriptloaded','1');
    //   window.location.reload();
    // }
  }

  ngAfterViewInit(){
    this.getTranslations(1);
  }

  onLangChange(langId: number): void {
    this.isPageLoaded = false;
    this.getTranslations(langId);
  }

  private async getTranslations(langId: number) {
    await this.language.get(langId).subscribe( 
      (model) =>  this.updateData(model, langId),
      (error) => {
        console.error(error);
        this.isPageLoaded = true;
        setTimeout(() => script.application.load(), 250);
      }
    );
  }

  private updateData(model: WebsiteModel, langId: number): void {
    this.about = model.aboutModel;
    this.categories = model.categoryModel;
    this.contact = model.contactModel;
    debugger;
    this.menus = model.menuModel;
    // this.slider = model.sliderModel;
    this.sliderDetails = model.sliderModel;
    this.isPageLoaded = true;
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

    // this.sliderDetails = [...this.sliderDetails];
    // this.addFakeSlider();

    setTimeout(() => script.application.load(), 250);
  }

  // private addFakeSlider(): void {
  //   const fakeSlider: SliderDetail = {
  //     idSlider: 1,
  //     description: 'hello 1',
  //     title: 'hello 1',
  //     idLanguage: 1,
  //     idSliderDetail: 1,
  //     image: 'assets/images/about_img_1.jpg'
  //   };
  //   this.sliderDetails.push(fakeSlider);
  //   fakeSlider.idSlider = 2;
  //   this.sliderDetails.push(fakeSlider);
  //   fakeSlider.idSlider = 3;
  //   this.sliderDetails.push(fakeSlider);
  // }
}
