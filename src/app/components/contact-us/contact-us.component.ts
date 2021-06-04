import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { LanguageService } from '../../services/language.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  @Input() contact: Contact;

  user = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private readonly languageService: LanguageService) {}

  ngOnInit(): void {}

  onSend(): void {
    if (this.user.name && this.user.email && this.user.message) {
      if (this.user.name.length > 30 || this.user.email.length > 30) {
        alert('Ad ve E-posta 30 karakter veya 30 karakterden küçük olmalıdır.');
        return;
      }

      if (this.user.message.length > 500) {
        alert('Mesaj 500 karakter veya 500 karakterden küçük olmalıdır.');
        return;
      }

      this.languageService.sendNote(this.user).subscribe((response) => {
        if (response) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            // title: ' başarılı.',
            showConfirmButton: false,
            timer: 800,
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Hata oluştu. Lütfen daha sonra deneyiniz.',
            showConfirmButton: false,
            timer: 800,
          });
        }
      });
    } else {
      alert('Lütfen boş alan bırakmayınız.');
    }
  }
}
