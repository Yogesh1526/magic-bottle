import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ADDRESS,
  EMAIL,
  EXPANSION,
  FEATURES,
  FOUNDER,
  LEGAL_NAME,
  LETTER,
  MENU,
  MISSION,
  MODELS,
  PHONE_PRIMARY,
  PHONE_PRIMARY_LABEL,
  REACH,
  STORY,
  VISION,
} from '../data/site.data';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'app-about',
  imports: [RouterLink, IconComponent],
  template: `
    <section class="sheet-hero">
      <div class="wrap sheet-hero-grid">
        <div>
          <p class="pill">Pune · since 2017 · {{ legalName }}</p>
          <h1>The story behind the brand.</h1>
          <p class="lede">Milkshakes and American snacks, founded in Pune in 2017, written so another city can open the same counter. Fee ₹0. Royalty 0%.</p>
        </div>
        <img class="float-model" src="brand/model-classic.png" alt="Classic Café terrace in navy and yellow" />
      </div>
    </section>

    <section class="band">
      <div class="wrap about-split">
        <article class="letter">
          <p class="kicker">Dear potential franchisee</p>
          @for (para of letter; track para) {
            <p>{{ para }}</p>
          }
          <footer>
            <strong>{{ founder.name }}</strong>
            <span>{{ founder.role }}</span>
            <span>{{ founder.company }}</span>
          </footer>
        </article>
        <div class="story-copy">
          <p class="kicker">Since 2017</p>
          <h2>A Pune café, built to travel.</h2>
          @for (para of story; track para) {
            <p>{{ para }}</p>
          }
          <a class="btn btn-ink" routerLink="/franchise" fragment="brochure">Open the brochure</a>
        </div>
      </div>
    </section>

    <section class="band band-paper">
      <div class="wrap">
        <div class="vision-grid">
          <article>
            <p class="kicker">Vision</p>
            <p>{{ vision }}</p>
          </article>
          <article>
            <p class="kicker">Mission</p>
            <p>{{ mission }}</p>
          </article>
        </div>
        <article class="expansion">
          <p class="kicker">Expansion plan</p>
          <h2>{{ expansion }}</h2>
          <div class="stat-row">
            @for (item of reach; track item.label) {
              <div>
                <strong>{{ item.figure }}</strong>
                <span>{{ item.label }}</span>
              </div>
            }
          </div>
        </article>
      </div>
    </section>

    <section class="band">
      <div class="wrap principle-grid">
        @for (item of principles; track item.title) {
          <article>
            <span class="fact-ico"><app-icon [name]="item.icon" /></span>
            <h2>{{ item.title }}</h2>
            <p>{{ item.copy }}</p>
          </article>
        }
      </div>
    </section>

    <section class="band band-paper">
      <div class="wrap about-split">
        <div>
          <p class="kicker">The public story</p>
          <h2>Worth the queue. Clean enough to sit. Room left on the ticket.</h2>
          <p>The company profile lists the franchise fee as ₹0, included in the total investment, and royalty as 0%. The plan is 100 franchises across India in three years. That only works if a new shop opens on the same menu.</p>
          <a class="btn btn-ink" routerLink="/franchise">See the three models</a>
        </div>
        <img src="brand/model-shakes.png" alt="Shakes Café glass counter" />
      </div>
    </section>

    <section class="band">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">Shake’n snack heaven</p>
          <h2>The menu in the company profile.</h2>
          <p>Prices are the ones printed in the brochure. Taxes extra. Parcel charge on snacks is ₹20. Add-ons on the card run ₹20–₹40.</p>
        </div>
        <div class="menu-board">
          @for (group of menu; track group.title) {
            <article>
              <header>
                <h3>{{ group.title }}</h3>
                @if (group.note) { <span>{{ group.note }}</span> }
              </header>
              <ul>
                @for (item of group.items; track item.name) {
                  <li><span>{{ item.name }}</span><strong>{{ item.price }}</strong></li>
                }
              </ul>
            </article>
          }
        </div>
        <div class="menu-spreads">
          <img src="brand/brochure-pages/page-08.jpg" alt="Shakes, coolers, coffee and ice cream menu" />
          <img src="brand/brochure-pages/page-09.jpg" alt="Sandwiches, momos, burgers, pasta and fries menu" />
        </div>
      </div>
    </section>

    <section class="band band-ink">
      <div class="wrap">
        <div class="section-head light">
          <p class="kicker">Beside the opening</p>
          <h2>Our key features.</h2>
        </div>
        <div class="bring">
          @for (item of features; track item.title) {
            <article>
              <h3>{{ item.title }}</h3>
              <p>{{ item.copy }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="band">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">The three rooms</p>
          <h2>Kiosk, Shakes, Classic.</h2>
        </div>
        <div class="mini-models">
          @for (model of models; track model.id) {
            <a routerLink="/franchise" [fragment]="model.id">
              <img [src]="model.image" [alt]="model.name" />
              <div>
                <strong>{{ model.name }}</strong>
                <span>{{ model.area }} · {{ model.investmentLabel }}</span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <section class="band band-paper">
      <div class="wrap timeline">
        <p class="kicker">The path</p>
        <ol>
          <li><span>2017</span><div><h2>The first café</h2><p>Pune. Milkshakes, and the snacks that keep a table sitting.</p></div></li>
          <li><span>Now</span><div><h2>Three models, written down</h2><p>Kiosk from ₹9 lakh, Shakes Café from ₹12 lakh, Classic Café from ₹15 lakh. Fee ₹0. Royalty 0% for lifetime. Term 3 yrs.</p></div></li>
          <li><span>Next</span><div><h2>100 franchises</h2><p>{{ expansion }} The profile lists 4+ states, 15+ cities, and 25+ upcoming stores on the way to 100+.</p></div></li>
        </ol>
      </div>
    </section>

    <section class="band band-ink">
      <div class="wrap address-band">
        <div>
          <p class="kicker">Registered address</p>
          <h2>{{ legalName }}</h2>
          @for (line of address; track line) {
            <p>{{ line }}</p>
          }
        </div>
        <div class="channel-stack">
          <a class="channel" [href]="'tel:' + phone">
            <span class="fact-ico"><app-icon name="phone" /></span>
            <span><small>Call</small>{{ phoneLabel }}</span>
          </a>
          <a class="channel" [href]="'mailto:' + email">
            <span class="fact-ico"><app-icon name="mail" /></span>
            <span><small>Mail</small>{{ email }}</span>
          </a>
          <a class="btn btn-solid" routerLink="/contact">Get started</a>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly address = ADDRESS;
  readonly phone = PHONE_PRIMARY;
  readonly phoneLabel = PHONE_PRIMARY_LABEL;
  readonly email = EMAIL;
  readonly models = MODELS;
  readonly legalName = LEGAL_NAME;
  readonly founder = FOUNDER;
  readonly letter = LETTER;
  readonly story = STORY;
  readonly vision = VISION;
  readonly mission = MISSION;
  readonly expansion = EXPANSION;
  readonly reach = REACH;
  readonly features = FEATURES;
  readonly menu = MENU;
  readonly principles = [
    { icon: 'cup', title: 'One recipe', copy: 'The glass has to be worth the queue in every city, not only in Pune.' },
    { icon: 'tag', title: 'Fee ₹0', copy: 'Published on all three models. Confirm it on the signed sheet.' },
    { icon: 'percent', title: 'Royalty 0%', copy: 'Published as free for lifetime. Not a percentage of the bill.' },
    { icon: 'shop', title: 'You run it', copy: 'FOFO. Franchisee owned, franchisee operated, for a 3-year term.' },
  ];
}
