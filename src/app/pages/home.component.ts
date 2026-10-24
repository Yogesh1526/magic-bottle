import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BROCHURE_PDF, MODELS, REACH, SUPPORT } from '../data/site.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="crave">
      <div class="crave-copy">
        <p class="pill rise">Pune since 2017 · milkshakes &amp; more</p>
        <h1>
          <span class="rise">Thick</span>
          <span class="rise d1 ink">shakes.</span>
          <span class="rise d2">Open the counter.</span>
        </h1>
        <p class="lede rise d2">The glass people queue for — then a shop you run. Kiosk from ₹9 lakh. Franchise fee ₹0. Royalty 0%, free for lifetime.</p>
        <div class="hero-actions rise d3">
          <a class="btn btn-ink" routerLink="/franchise">See the formats</a>
          <a class="btn btn-line dark" routerLink="/franchise" fragment="brochure">View brochure</a>
        </div>
      </div>
      <div class="crave-stage">
        <img class="crave-hero" src="brand/shake-portrait.jpg" alt="Vanilla shake, sesame burger and crinkle fries" />
        <img class="orb orb-fries" src="brand/fries.jpg" alt="High fries in a Magic Bottle glass" />
        <img class="orb orb-jar" src="brand/shake-real.jpg" alt="Chilled shake with chocolate drizzle" />
        <div class="orb-price">
          <span>From</span>
          <strong>₹9L</strong>
          <em>Kiosk</em>
        </div>
      </div>
    </section>

    <section class="shapes">
      <div class="wrap shape-grid">
        @for (bite of bites; track bite.name) {
          <figure>
            <img [src]="bite.src" [alt]="bite.name" />
            <figcaption>{{ bite.name }}</figcaption>
          </figure>
        }
      </div>
    </section>

    <div class="shutter" aria-hidden="true">
      <div class="shutter-track">
        @for (label of ribbon; track $index) {
          <span>{{ label }}</span>
        }
      </div>
    </div>

    <section class="band show">
      <div class="wrap">
        <div class="section-head row-head">
          <div>
            <p class="kicker">Formats</p>
            <h2>Pick the room. The recipe stays.</h2>
          </div>
          <a class="text-link" routerLink="/franchise">All three numbers</a>
        </div>
        <div class="bento">
          @for (model of models; track model.id) {
            <a class="tile" [class.hero-tile]="model.id === 'kiosk'" routerLink="/franchise" [fragment]="model.id">
              <img [src]="model.image" [alt]="model.name + ' format'" />
              <div class="tile-copy">
                <p>{{ model.area }}</p>
                <h3>{{ model.name }}</h3>
                <strong>{{ model.investmentLabel }}</strong>
                <span>Payback {{ model.payback }} · Fee ₹0 · Royalty 0%</span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <section class="menu-show">
      <p class="ghost" aria-hidden="true">SHAKE</p>
      <div class="wrap">
        <div class="section-head light">
          <p class="kicker">The counter</p>
          <h2>More than a glass.</h2>
        </div>
        <div class="polaroids">
          @for (plate of plates; track plate.name) {
            <figure>
              <img [src]="plate.src" [alt]="plate.name" />
              <figcaption>{{ plate.name }}</figcaption>
            </figure>
          }
        </div>
        <p class="menu-note">Grilled sandwiches, high fries, burgers, fizzy coolers, hot drinks, ice cream and sundae jars.</p>
      </div>
    </section>

    <section class="band band-paper">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">Before the first shake</p>
          <h2>What you get from us.</h2>
        </div>
        <ol class="help-row">
          @for (item of support; track item.title; let i = $index) {
            <li>
              <span>0{{ i + 1 }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.copy }}</p>
            </li>
          }
        </ol>
      </div>
    </section>

    <section class="band">
      <div class="wrap reach-home">
        <div>
          <p class="kicker">Expansion plan</p>
          <h2>100 franchises across India in 3 years.</h2>
          <p>The company profile lists 4+ states, 15+ cities, and 25+ stores already on the way. Hemant Devpurkar, Founder and CEO, signs the letter inside the brochure.</p>
          <div class="hero-actions">
            <a class="btn btn-ink" routerLink="/franchise" fragment="brochure">View brochure</a>
            <a class="btn btn-line dark" [href]="brochurePdf" download="TMB-Franchise-Brochure.pdf">Download PDF</a>
          </div>
        </div>
        <div class="stat-row">
          @for (item of reach; track item.label) {
            <div>
              <strong>{{ item.figure }}</strong>
              <span>{{ item.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="closer">
      <img src="brand/cafe-interior.jpg" alt="" />
      <div class="wrap">
        <div class="closer-card">
          <p class="kicker">Money sheet</p>
          <h2>Move the rent. Watch the month.</h2>
          <p>The franchise page runs the owner’s sheet in the browser. Excel comes with the PHP build.</p>
          <a class="btn btn-solid" routerLink="/franchise" fragment="money-sheet">Open the sheet</a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  readonly models = MODELS;
  readonly support = SUPPORT;
  readonly brochurePdf = BROCHURE_PDF;
  readonly reach = REACH;
  readonly bites = [
    { name: 'The bottle', src: 'brand/shake-real.jpg' },
    { name: 'The combo', src: 'brand/tray.jpg' },
    { name: 'High fries', src: 'brand/fries.jpg' },
    { name: 'Sundaes', src: 'brand/lineup.png' },
    { name: 'The counter', src: 'brand/spread.png' },
    { name: 'Late tray', src: 'brand/tray-wide.png' },
  ];
  readonly plates = [
    { name: 'The bottle', src: 'brand/shake-real.jpg' },
    { name: 'The combo', src: 'brand/tray-wide.png' },
    { name: 'High fries', src: 'brand/fries.jpg' },
    { name: 'The lineup', src: 'brand/lineup.png' },
  ];
  readonly ribbon = [
    'Thick shakes', 'Ice cream jars', 'High fries', 'Burgers', 'Grilled sandwiches',
    'Fizzy coolers', 'Hot beverages', 'Sundae jars',
    'Thick shakes', 'Ice cream jars', 'High fries', 'Burgers', 'Grilled sandwiches',
    'Fizzy coolers', 'Hot beverages', 'Sundae jars',
  ];
}
