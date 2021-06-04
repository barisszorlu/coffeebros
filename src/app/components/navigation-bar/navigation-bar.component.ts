import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  @Output() readonly langChange = new EventEmitter<number>();
  @Input() currentLangId: string;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    if (window.innerWidth > 1024) {
      this.router.navigate(['home']);
    }
  }

  onLangChange(): void {
    this.currentLangId = this.currentLangId === '1' ? '2' : '1';
    this.langChange.emit(this.currentLangId === '1' ? 2 : 1);
  }

  onNavClick(id: string): void {
    this.router.navigate([`home/${id}`]);
  }
}
