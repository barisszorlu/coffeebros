import { Component, OnInit } from '@angular/core';
import * as script from '../app-main.js';
import { Contact } from '../models/contact.model';
import { Packet } from '../models/packet.model';
import { WebsiteModel } from '../models/website.model';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-packet-page',
  templateUrl: './packet-page.component.html',
  styleUrls: ['./packet-page.component.scss'],
})
export class PacketPageComponent implements OnInit {
  contact: Contact;
  packets: Packet[];

  constructor(private readonly language: LanguageService) {}

  ngOnInit(): void {
    this.language.getPacket(1).subscribe(
      (model) => (this.packets = model),
      (error) => console.error(error)
    );
    this.getTranslations(1);
  }

  onLangChange(langId: number): void {
    this.language.getPacket(langId).subscribe(
      (model) => (this.packets = model),
      (error) => console.error(error)
    );
    this.getTranslations(langId);
  }

  private getTranslations(langId: number): void {
    this.language.get(langId).subscribe(
      (model) => this.updateData(model, langId),
      (error) => {
        console.error(error);
        setTimeout(() => script.application.load(), 250);
      }
    );
  }

  private updateData(model: WebsiteModel, langId: number): void {
    this.contact = model.contactModel;
    setTimeout(() => script.application.load(), 250);
  }
}
