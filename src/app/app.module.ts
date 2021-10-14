import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FoodGalleryComponent } from './components/food-gallery/food-gallery.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { MenusComponent } from './components/menus/menus.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NewsAndEventsComponent } from './components/news-and-events/news-and-events.component';
import { OffersAndPromosComponent } from './components/offers-and-promos/offers-and-promos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PacketPageComponent } from './packet-page/packet-page.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    FooterBarComponent,
    ContactUsComponent,
    MenusComponent,
    NewsAndEventsComponent,
    FoodGalleryComponent,
    OffersAndPromosComponent,
    AboutComponent,
    PacketPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgSelectModule  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
