import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss'],
})
export class FooterBarComponent implements OnInit, OnChanges {
  @Input() contact: Contact;

  facebookUrl: SafeResourceUrl;
  instagramUrl: SafeResourceUrl;
  yemekUrl: SafeResourceUrl = "https://www.yemeksepeti.com/waffle-art-merkez-kemalpasa-mah-canakkale?status=closed";

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contact && changes.contact.currentValue) {
      this.facebookUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.contact.facebook
      );
      this.instagramUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.contact.instagram
      );
    }
  }
}
