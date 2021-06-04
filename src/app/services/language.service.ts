import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from '../app.constant';
import { Packet } from '../models/packet.model';
import { WebsiteModel } from '../models/website.model';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private static readonly WEBSITE_API = 'GetWebSite';
  private static readonly NOTE_API = 'AddNote';
  private static readonly PACKET_API = 'PacketList';

  constructor(private readonly httpClient: HttpClient) {}

  get(language: number): Observable<WebsiteModel> {
    return this.httpClient.get<WebsiteModel>(
      `${AppConstant.API_URL}/${LanguageService.WEBSITE_API}?idLanguage=${language}`
    );
  }

  getPacket(language: number): Observable<Packet[]> {
    return this.httpClient.get<Packet[]>(
      `${AppConstant.API_URL}/${LanguageService.PACKET_API}?idLanguage=${language}`
    );
  }

  sendNote(user: {
    name: string;
    email: string;
    message: string;
    credate?: string;
  }): Observable<boolean> {
    user.credate = '';
    return this.httpClient.post<boolean>(
      `${AppConstant.API_URL}/${LanguageService.NOTE_API}`,
      user
    );
  }
}
