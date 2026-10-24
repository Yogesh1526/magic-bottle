import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ADDRESS,
  EMAIL,
  MODELS,
  PHONE_PRIMARY,
  PHONE_PRIMARY_LABEL,
  PHONE_SECONDARY,
  PHONE_SECONDARY_LABEL,
  WHATSAPP,
} from '../data/site.data';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, IconComponent],
  template: `
    <section class="sheet-hero slim">
      <div class="wrap">
        <p class="pill">Get started</p>
        <h1>Tell us the city. We’ll talk format.</h1>
        <p class="lede">This demo keeps the enquiry in your browser. On the live site it emails the Pune desk and lands in the lead sheet.</p>
      </div>
    </section>

    <section class="band band-tight">
      <div class="wrap contact-stage">
        <aside class="desk">
          <p class="kicker">Pune desk</p>
          <h2>Talk to the people who open the shops.</h2>
          <a class="channel" [href]="'tel:' + phone">
            <span class="fact-ico"><app-icon name="phone" /></span>
            <span><small>Call</small>{{ phoneLabel }}</span>
          </a>
          <a class="channel" [href]="'tel:' + phoneAlt">
            <span class="fact-ico"><app-icon name="phone" /></span>
            <span><small>Alternate</small>{{ phoneAltLabel }}</span>
          </a>
          <a class="channel" [href]="'mailto:' + email">
            <span class="fact-ico"><app-icon name="mail" /></span>
            <span><small>Mail</small>{{ email }}</span>
          </a>
          <a class="channel" [href]="whatsapp" target="_blank" rel="noopener">
            <span class="fact-ico"><app-icon name="chat" /></span>
            <span><small>WhatsApp</small>Message the desk</span>
          </a>
          <p class="desk-address">
            <app-icon name="pin" />
            <span>
              @for (line of address; track line) {
                {{ line }}<br />
              }
            </span>
          </p>
        </aside>

        @if (sent()) {
          <div class="thanks" role="status">
            <span class="fact-ico"><app-icon name="check" /></span>
            <p class="kicker">Received in this browser</p>
            <h2>Thanks, {{ name.trim() }}.</h2>
            <p>Nothing was emailed. On the live site this enquiry for {{ model }} in {{ city.trim() }} would land with the Pune team.</p>
            <button class="btn btn-ink" type="button" (click)="reset()">Write another</button>
          </div>
        } @else {
          <form class="enquiry" (submit)="send($event)" novalidate>
            <p class="kicker">Your enquiry</p>
            <h2>Which model are you costing?</h2>
            <div class="format-picks">
              @for (item of models; track item.id) {
                <button type="button" [class.on]="model === item.name" (click)="pick(item.name, item.investmentLabel)">
                  <img [src]="item.image" [alt]="" />
                  <span>{{ item.name }}</span>
                  <strong>{{ item.investmentLabel }}</strong>
                </button>
              }
            </div>
            <label>
              Name
              <input name="name" [(ngModel)]="name" autocomplete="name" [class.bad]="show('name')" />
              @if (show('name')) { <small>Add your name.</small> }
            </label>
            <div class="pair">
              <label>
                Mobile
                <input name="phone" [(ngModel)]="phoneNumber" inputmode="numeric" autocomplete="tel" placeholder="10-digit mobile" [class.bad]="show('phone')" />
                @if (show('phone')) { <small>Use a 10-digit Indian mobile.</small> }
              </label>
              <label>
                City
                <input name="city" [(ngModel)]="city" autocomplete="address-level2" [class.bad]="show('city')" />
                @if (show('city')) { <small>Which city is the shop in?</small> }
              </label>
            </div>
            <label>
              Investment range
              <select name="range" [(ngModel)]="range">
                <option>Around ₹9 lakh</option>
                <option>Around ₹12 lakh</option>
                <option>Around ₹15 lakh</option>
                <option>Still deciding</option>
              </select>
            </label>
            <label>
              Note
              <textarea name="message" rows="4" [(ngModel)]="message" placeholder="Site size, timeline, or a question."></textarea>
            </label>
            <button class="btn btn-solid" type="submit">Send enquiry</button>
          </form>
        }
      </div>
    </section>

    <section class="band band-paper">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">After you write</p>
          <h2>What the desk does next.</h2>
        </div>
        <ol class="path three">
          @for (step of next; track step.title; let i = $index) {
            <li>
              <span class="fact-ico"><app-icon [name]="step.icon" /></span>
              <strong>0{{ i + 1 }} {{ step.title }}</strong>
              <p>{{ step.copy }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly models = MODELS;
  readonly address = ADDRESS;
  readonly email = EMAIL;
  readonly phone = PHONE_PRIMARY;
  readonly phoneLabel = PHONE_PRIMARY_LABEL;
  readonly phoneAlt = PHONE_SECONDARY;
  readonly phoneAltLabel = PHONE_SECONDARY_LABEL;
  readonly whatsapp = WHATSAPP;
  readonly next = [
    { icon: 'chat', title: 'A reply', copy: 'The Pune desk calls or messages on the number you leave.' },
    { icon: 'list', title: 'The model', copy: 'Kiosk, Shakes Café, or Classic — walked against your city and your site.' },
    { icon: 'pin', title: 'The site', copy: 'If the numbers still make sense, someone looks at the property with you.' },
  ];

  name = '';
  phoneNumber = '';
  city = '';
  model = MODELS[0].name;
  range = 'Around ₹9 lakh';
  message = '';
  readonly attempted = signal(false);
  readonly sent = signal(false);

  pick(name: string, investment: string): void {
    this.model = name;
    const range = investment.includes('12') ? 'Around ₹12 lakh' : investment.includes('15') ? 'Around ₹15 lakh' : 'Around ₹9 lakh';
    this.range = range;
  }

  send(event: Event): void {
    event.preventDefault();
    this.attempted.set(true);
    if (!this.valid()) {
      return;
    }
    this.sent.set(true);
  }

  reset(): void {
    this.name = '';
    this.phoneNumber = '';
    this.city = '';
    this.model = MODELS[0].name;
    this.range = 'Around ₹9 lakh';
    this.message = '';
    this.attempted.set(false);
    this.sent.set(false);
  }

  show(field: 'name' | 'phone' | 'city'): boolean {
    if (!this.attempted()) {
      return false;
    }
    if (field === 'name') {
      return this.name.trim().length < 2;
    }
    if (field === 'city') {
      return this.city.trim().length < 2;
    }
    return !/^[6-9]\d{9}$/.test(this.phoneNumber.replace(/\s/g, ''));
  }

  private valid(): boolean {
    return this.name.trim().length >= 2
      && this.city.trim().length >= 2
      && /^[6-9]\d{9}$/.test(this.phoneNumber.replace(/\s/g, ''));
  }
}
