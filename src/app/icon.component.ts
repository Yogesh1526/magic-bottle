import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      @switch (name()) {
        @case ('area') {
          <path d="M4 9.5h10.5V20H4z" />
          <path d="M9 9.5V4h11v11h-5.5" />
        }
        @case ('rupee') {
          <circle cx="12" cy="12" r="8.2" />
          <text x="12" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" stroke="none">₹</text>
        }
        @case ('tag') {
          <path d="M12 4H5v7l7.5 7.5a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8z" />
          <circle cx="8.2" cy="8.2" r="1" fill="currentColor" stroke="none" />
        }
        @case ('percent') {
          <circle cx="7.5" cy="7.5" r="2.2" />
          <circle cx="16.5" cy="16.5" r="2.2" />
          <path d="M18 6 6 18" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4.5l3 2" />
        }
        @case ('shop') {
          <path d="M4 10 6 5h12l2 5" />
          <path d="M5 10h14v9H5z" />
          <path d="M10 19v-5h4v5" />
        }
        @case ('file') {
          <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
          <path d="M14 3.5V8h4M9 13h6M9 16.5h4" />
        }
        @case ('phone') {
          <path d="M8 4h3l1.2 3.2-1.8 1.1a12 12 0 0 0 5.3 5.3l1.1-1.8L20 13v3a2 2 0 0 1-2.2 2A15 15 0 0 1 6 6.2 2 2 0 0 1 8 4z" />
        }
        @case ('mail') {
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m4 7 8 6 8-6" />
        }
        @case ('pin') {
          <path d="M12 21s6.5-5.2 6.5-10A6.5 6.5 0 0 0 5.5 11c0 4.8 6.5 10 6.5 10z" />
          <circle cx="12" cy="11" r="2" />
        }
        @case ('chat') {
          <path d="M6 16.5 4 20l3.8-1.2A8.5 8.5 0 1 0 6 16.5z" />
        }
        @case ('play') {
          <circle cx="12" cy="12" r="8" />
          <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
        }
        @case ('users') {
          <circle cx="9" cy="9" r="2.4" />
          <path d="M4.8 18a4.2 4.2 0 0 1 8.4 0" />
          <circle cx="16" cy="9.5" r="2" />
          <path d="M15.2 14.2A3.6 3.6 0 0 1 20 18" />
        }
        @case ('spark') {
          <path d="M12 3.5 13.4 8 18 9.2 13.4 10.6 12 15.2 10.6 10.6 6 9.2 10.6 8z" />
          <path d="M17.5 14.5 18.2 16.6 20.3 17.3 18.2 18 17.5 20.1 16.8 18 14.7 17.3 16.8 16.6z" />
        }
        @case ('door') {
          <path d="M6 20V5.5A1.5 1.5 0 0 1 7.5 4h8A1.5 1.5 0 0 1 17 5.5V20" />
          <path d="M4 20h16M14 12h.5" />
        }
        @case ('list') {
          <path d="M9 7h10M9 12h10M9 17h10" />
          <path d="M5 7h.5M5 12h.5M5 17h.5" />
        }
        @case ('cup') {
          <path d="M7 7h8v6a4 4 0 0 1-8 0z" />
          <path d="M15 8h2a2.5 2.5 0 0 1 0 5h-2M8 19h8M9 19c.3 1.2 1.2 2 3 2s2.7-.8 3-2" />
        }
        @case ('burger') {
          <path d="M5 10c0-2.6 3-4.5 7-4.5S19 7.4 19 10z" />
          <path d="M5 10h14M6 13h12M7 16.5c0 1.2 2 2 5 2s5-.8 5-2" />
        }
        @case ('fries') {
          <path d="M8 10 7 20h10l-1-10z" />
          <path d="M9 10V6M12 10V4M15 10V6.5" />
        }
        @case ('drink') {
          <path d="M8 4h8l-1 8a3 3 0 0 1-6 0z" />
          <path d="M12 15v3M9 20h6" />
        }
        @case ('coffee') {
          <path d="M6 8h9v5a4 4 0 0 1-4 4H9a4 4 0 0 1-3-4z" />
          <path d="M15 9h2.2a2.2 2.2 0 0 1 0 4.4H15M7 20h10" />
        }
        @case ('ice') {
          <path d="M8 4h8l1 6H7z" />
          <path d="M7.5 10h9l-.8 9H8.3z" />
        }
        @case ('check') {
          <circle cx="12" cy="12" r="8" />
          <path d="m8.5 12.2 2.4 2.4 4.6-5" />
        }
      }
    </svg>
  `,
  styles: `
    :host { display: inline-grid; width: 1em; height: 1em; }
    svg { width: 100%; height: 100%; }
  `,
})
export class IconComponent {
  readonly name = input.required<string>();
}
