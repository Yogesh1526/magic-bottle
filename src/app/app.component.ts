import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import {
  ADDRESS,
  BROCHURE_PDF,
  EMAIL,
  PHONE_PRIMARY,
  PHONE_PRIMARY_LABEL,
  PHONE_SECONDARY,
  PHONE_SECONDARY_LABEL,
  WHATSAPP,
} from './data/site.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly menuOpen = signal(false);
  readonly email = EMAIL;
  readonly whatsapp = WHATSAPP;
  readonly phonePrimary = PHONE_PRIMARY;
  readonly phoneSecondary = PHONE_SECONDARY;
  readonly phonePrimaryLabel = PHONE_PRIMARY_LABEL;
  readonly phoneSecondaryLabel = PHONE_SECONDARY_LABEL;
  readonly address = ADDRESS;
  readonly brochurePdf = BROCHURE_PDF;
  readonly year = new Date().getFullYear();

  constructor() {
    inject(Router).events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntilDestroyed(inject(DestroyRef)),
    ).subscribe(() => this.menuOpen.set(false));
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
