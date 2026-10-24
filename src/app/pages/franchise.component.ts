import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BROCHURE_PAGES, BROCHURE_PDF, EMAIL, FAQS, MODELS, STEPS, SUPPORT, WHATSAPP } from '../data/site.data';
import { IconComponent } from '../icon.component';
import { CalculatorComponent } from './calculator.component';

@Component({
  selector: 'app-franchise',
  imports: [RouterLink, CalculatorComponent, IconComponent],
  template: `
    <section class="sheet-hero">
      <div class="wrap sheet-hero-grid">
        <div>
          <p class="pill rise">Three models · FOFO · Pune since 2017</p>
          <h1 class="rise d1">The shop, with the numbers on it.</h1>
          <p class="lede rise d2">Fee ₹0. Royalty 0%, free for lifetime. Average payback and the 3-year term are the figures already published for each model.</p>
          <div class="hero-actions rise d3">
            <a class="btn btn-ink" href="#models">Compare the models</a>
            <a class="btn btn-line dark" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
        <img class="float-model" src="brand/model-shakes.png" alt="Shakes Café, glass front, navy and yellow" />
      </div>
    </section>

    <section class="band band-tight">
      <div class="wrap">
        <ol class="path">
          @for (step of steps; track step.n; let i = $index) {
            <li>
              <span class="fact-ico"><app-icon [name]="stepIcons[i]" /></span>
              <strong>{{ step.n }} {{ step.title }}</strong>
              <p>{{ step.copy }}</p>
            </li>
          }
        </ol>
      </div>
    </section>

    <section class="band band-paper" id="models">
      <div class="wrap">
        <div class="section-head row-head">
          <div>
            <p class="kicker">Investment</p>
            <h2>Same recipe. Three rooms.</h2>
          </div>
        </div>
        <div class="jump">
          @for (model of models; track model.id) {
            <a [href]="'#' + model.id">
              <img [src]="model.image" [alt]="" />
              <span>{{ model.name }}</span>
              <strong>{{ model.investmentLabel }}</strong>
            </a>
          }
        </div>
        @for (model of models; track model.id; let i = $index) {
          <article class="model-sheet" [class.flip]="i % 2 === 1" [id]="model.id">
            <div class="model-visual">
              <img [src]="model.image" [alt]="model.name + ' model'" />
              <div class="model-badge">
                <span>Starts at</span>
                <strong>{{ model.investmentLabel }}</strong>
              </div>
            </div>
            <div class="model-facts">
              <p class="kicker">Model 0{{ i + 1 }}</p>
              <h2>{{ model.name }}</h2>
              <p class="model-summary">{{ model.summary }}</p>
              <ul class="fact-list">
                @for (fact of model.facts; track fact.label) {
                  <li>
                    <span class="fact-ico"><app-icon [name]="fact.icon" /></span>
                    <span>{{ fact.label }}</span>
                    <strong>{{ fact.value }}</strong>
                  </li>
                }
              </ul>
            </div>
          </article>
        }
      </div>
    </section>

    <section class="band" id="brochure">
      <div class="wrap brochure-stage">
        <div>
          <p class="kicker">Company profile · 14 pages</p>
          <h2>Open the franchise brochure.</h2>
          <p>The same file from TMB Venture India LLP: the founder’s letter, the menu, the three models, and what the company stands next to. View it here, or download the PDF.</p>
          <div class="hero-actions">
            <button class="btn btn-ink" type="button" (click)="openBrochure(brochure)">View brochure</button>
            <a class="btn btn-line dark" [href]="brochurePdf" download="TMB-Franchise-Brochure.pdf">Download PDF</a>
          </div>
        </div>
        <button class="brochure-cover" type="button" (click)="openBrochure(brochure)">
          <img src="brand/brochure-pages/page-01.jpg" alt="Invest in your future with The Magic Bottle" />
          <span>View all 14 pages</span>
        </button>
      </div>
    </section>

    <section class="band band-paper">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">What you get from us</p>
          <h2>The support written in the profile.</h2>
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
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">What you bring</p>
          <h2>A site, a staff, and the will to be on the floor.</h2>
        </div>
        <div class="bring">
          @for (item of bring; track item.title) {
            <article>
              <span class="fact-ico"><app-icon [name]="item.icon" /></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.copy }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="band band-paper" id="money-sheet">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">Owner’s money sheet</p>
          <h2>A month, written in rupees.</h2>
          <p>Switch format to load that model’s sample rent, staff, bill, and daily count. Then edit any figure. The full build writes this same sheet to Excel. The result is an illustration, not a promised return.</p>
        </div>
        <app-calculator />
      </div>
    </section>

    <section class="band">
      <div class="wrap faq-layout">
        <div class="faq-intro">
          <p class="kicker">Questions</p>
          <h2>Asked before the second call.</h2>
          <button class="btn btn-ink" type="button" (click)="openBrochure(brochure)">Open the brochure</button>
        </div>
        <div class="faqs">
          @for (item of faqs; track item.q; let i = $index) {
            <div class="faq" [class.open]="openFaq() === i">
              <button type="button" [attr.aria-expanded]="openFaq() === i" (click)="toggle(i)">
                {{ item.q }}
                <span aria-hidden="true"></span>
              </button>
              @if (openFaq() === i) {
                <p>{{ item.a }}</p>
              }
            </div>
          }
        </div>
      </div>
    </section>

    <section class="closer closer-short">
      <img src="brand/model-classic.png" alt="" />
      <div class="wrap">
        <div class="closer-card">
          <p class="kicker">Next</p>
          <h2>Tell us the city and the format.</h2>
          <p>The form on this demo stays in your browser. The live site will email {{ email }} and store the lead.</p>
          <div class="hero-actions">
            <a class="btn btn-solid" routerLink="/contact">Start an enquiry</a>
            <a class="btn btn-line" [href]="whatsapp" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>

    <dialog #brochure class="modal brochure-modal">
      <div class="brochure-view">
        <div class="brochure-bar">
          <p>Company profile · page {{ sheet() + 1 }} of {{ brochurePages.length }}</p>
          <div>
            <a [href]="brochurePdf" download="TMB-Franchise-Brochure.pdf">Download</a>
            <a [href]="brochurePdf" target="_blank" rel="noopener">Open PDF</a>
            <button type="button" (click)="brochure.close()">Close</button>
          </div>
        </div>
        <img [src]="brochurePages[sheet()]" [alt]="'Brochure page ' + (sheet() + 1)" />
        <div class="brochure-nav">
          <button class="btn btn-line dark" type="button" (click)="stepSheet(-1)" [disabled]="sheet() === 0">Previous</button>
          <button class="btn btn-ink" type="button" (click)="stepSheet(1)" [disabled]="sheet() === brochurePages.length - 1">Next</button>
        </div>
      </div>
    </dialog>
  `,
})
export class FranchiseComponent {
  readonly steps = STEPS;
  readonly models = MODELS;
  readonly faqs = FAQS;
  readonly brochurePages = BROCHURE_PAGES;
  readonly brochurePdf = BROCHURE_PDF;
  readonly support = SUPPORT;
  readonly whatsapp = WHATSAPP;
  readonly email = EMAIL;
  readonly sheet = signal(0);
  readonly stepIcons = ['chat', 'list', 'pin', 'spark', 'door'];
  readonly bring = [
    { icon: 'check', title: 'The same standard', copy: 'Food that tastes the same on a Tuesday as on a Saturday.' },
    { icon: 'area', title: 'A commercial site', copy: 'From 100 sq. ft for a kiosk, up to 400–500 sq. ft for Classic, with power and water.' },
    { icon: 'rupee', title: 'Capital in the band', copy: 'Starts at ₹9 lakh, ₹12 lakh, or ₹15 lakh, depending on the model.' },
    { icon: 'users', title: 'People on the floor', copy: 'Two or three who will actually work the counter. FOFO means you run it.' },
  ];
  readonly openFaq = signal(0);

  toggle(index: number): void {
    this.openFaq.update((current) => current === index ? -1 : index);
  }

  openBrochure(dialog: HTMLDialogElement): void {
    this.sheet.set(0);
    dialog.showModal();
  }

  stepSheet(delta: number): void {
    this.sheet.update((current) => Math.min(this.brochurePages.length - 1, Math.max(0, current + delta)));
  }
}
