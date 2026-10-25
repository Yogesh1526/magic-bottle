import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as L from 'leaflet';
import { MAHARASHTRA } from '../data/maharashtra';
import { BROCHURE_PAGES, BROCHURE_PDF, EMAIL, FAQS, MODELS, OUTLETS, Outlet, STEPS, SUPPORT, WHATSAPP } from '../data/site.data';
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
                <strong>{{ model.investmentLabel.split(' ')[0] }}</strong>
                <em>lakh</em>
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

    <section class="band band-paper" id="location">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">Where it is</p>
          <h2>Headquarters and the Pune counters.</h2>
        </div>
        <div class="outlet-layout">
          <ol class="outlet-list">
            @for (spot of outlets; track spot.id) {
              <li [class.on]="activeOutlet() === spot.id">
                <button type="button" (click)="chooseOutlet(spot.id)">
                  <small><b>{{ spot.n }}</b> {{ spot.hq ? 'Head office' : 'Outlet' }}</small>
                  <strong>{{ spot.area }}</strong>
                  <span>{{ spot.address }}</span>
                </button>
                @if (activeOutlet() === spot.id) {
                  <a class="text-link" [href]="spot.maps" target="_blank" rel="noopener">Directions</a>
                }
              </li>
            }
          </ol>
          <div class="map-shell mh-map">
            <div class="state-pane">
              <p class="map-kicker">Maharashtra</p>
              <div #stateMap class="state-map" role="application" aria-label="Map of Maharashtra"></div>
            </div>
            <div class="pune-lens">
              <p class="map-kicker">Pune <span>7 counters</span></p>
              <div #cityMap class="lens-map" role="application" aria-label="The Magic Bottle outlets in Pune"></div>
            </div>
          </div>
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
  readonly outlets = OUTLETS;
  readonly activeOutlet = signal('hq');
  readonly sheet = signal(0);
  private readonly stateMap = viewChild<ElementRef<HTMLDivElement>>('stateMap');
  private readonly cityMap = viewChild<ElementRef<HTMLDivElement>>('cityMap');
  private readonly destroyRef = inject(DestroyRef);
  private state?: L.Map;
  private city?: L.Map;
  private stateBounds?: L.LatLngBounds;
  private citySpots?: L.LatLngBoundsExpression;
  private readonly markers = new Map<string, L.Marker>();
  readonly stepIcons = ['chat', 'list', 'pin', 'spark', 'door'];
  readonly bring = [
    { icon: 'check', title: 'The same standard', copy: 'Food that tastes the same on a Tuesday as on a Saturday.' },
    { icon: 'area', title: 'A commercial site', copy: 'From 100 sq. ft for a kiosk, up to 400–500 sq. ft for Classic, with power and water.' },
    { icon: 'rupee', title: 'Capital in the band', copy: 'Starts at ₹9 lakh, ₹12 lakh, or ₹15 lakh, depending on the model.' },
    { icon: 'users', title: 'People on the floor', copy: 'Two or three who will actually work the counter. FOFO means you run it.' },
  ];
  readonly openFaq = signal(0);

  constructor() {
    afterNextRender(() => this.mountMap());
    this.destroyRef.onDestroy(() => {
      this.state?.remove();
      this.city?.remove();
    });
  }

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

  chooseOutlet(id: string): void {
    this.activeOutlet.set(id);
    this.paintPins();
    const marker = this.markers.get(id);
    if (!this.city || !marker) {
      return;
    }
    this.city.panTo(marker.getLatLng(), { animate: true, duration: 0.45 });
    marker.openPopup();
  }

  private mountMap(): void {
    if (this.state || this.city) {
      return;
    }
    this.mountState();
    this.mountCity();
    const refit = () => {
      for (const host of [this.stateMap()?.nativeElement, this.cityMap()?.nativeElement]) {
        if (!host) {
          continue;
        }
        host.style.height = '';
        host.style.width = '';
      }
      this.state?.invalidateSize();
      this.city?.invalidateSize();
      if (this.state && this.stateBounds) {
        this.state.fitBounds(this.stateBounds, { padding: [40, 36] });
      }
      if (this.city && this.citySpots) {
        this.city.fitBounds(this.citySpots, { padding: [36, 48] });
      }
    };
    window.setTimeout(refit, 80);
    const onResize = () => {
      this.state?.invalidateSize();
      this.city?.invalidateSize();
    };
    window.addEventListener('resize', onResize);
    this.destroyRef.onDestroy(() => window.removeEventListener('resize', onResize));
  }

  private ensureBox(host: HTMLElement, fallback: number): void {
    if (host.clientHeight > 20 && host.clientWidth > 20) {
      return;
    }
    host.style.height = `${fallback}px`;
    host.style.width = '100%';
  }

  private mountState(): void {
    const host = this.stateMap()?.nativeElement;
    if (!host) {
      return;
    }
    this.ensureBox(host, 420);
    const map = L.map(host, {
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: true,
      center: [19.4, 76.6],
      zoom: 6,
    });
    map.attributionControl.setPrefix('');
    map.attributionControl.addAttribution('© OpenStreetMap');
    const shape = {
      type: 'Feature' as const,
      properties: {},
      geometry: { type: 'Polygon' as const, coordinates: [MAHARASHTRA] },
    };
    L.geoJSON(shape, {
      style: { color: '#ffd000', weight: 7, opacity: 0.28, fill: false },
    }).addTo(map);
    const land = L.geoJSON(shape, {
      style: { color: '#e8ebf0', weight: 1.4, fillColor: '#3c4450', fillOpacity: 1 },
    }).addTo(map);
    const places = [
      { name: 'Mumbai', lat: 19.076, lng: 72.878 },
      { name: 'Nashik', lat: 19.997, lng: 73.789 },
      { name: 'Nagpur', lat: 21.146, lng: 79.088 },
    ];
    for (const place of places) {
      L.marker([place.lat, place.lng], {
        interactive: false,
        keyboard: false,
        icon: L.divIcon({
          className: 'mh-place',
          html: place.name,
          iconSize: [72, 16],
          iconAnchor: place.name === 'Mumbai' ? [78, 22] : [36, 8],
        }),
      }).addTo(map);
    }
    const pune = this.outlets.reduce(
      (sum, spot) => [sum[0] + spot.lat / this.outlets.length, sum[1] + spot.lng / this.outlets.length] as L.LatLngTuple,
      [0, 0] as L.LatLngTuple,
    );
    L.circleMarker(pune, {
      radius: 7,
      color: '#1c2430',
      weight: 2,
      fillColor: '#ffd000',
      fillOpacity: 1,
      interactive: false,
    }).addTo(map);
    L.marker(pune, {
      interactive: false,
      icon: L.divIcon({
        className: 'mh-pune',
        html: 'Pune',
        iconSize: [48, 16],
        iconAnchor: [-8, 28],
      }),
    }).addTo(map);
    this.stateBounds = land.getBounds();
    map.fitBounds(this.stateBounds, { padding: [40, 36] });
    this.state = map;
  }

  private mountCity(): void {
    const host = this.cityMap()?.nativeElement;
    if (!host) {
      return;
    }
    this.ensureBox(host, 320);
    const map = L.map(host, {
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false,
      center: [18.52, 73.82],
      zoom: 11,
    });
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    const spots = this.outlets.map((spot) => [spot.lat, spot.lng] as L.LatLngTuple);
    const center = spots.reduce(
      (sum, spot) => [sum[0] + spot[0] / spots.length, sum[1] + spot[1] / spots.length] as L.LatLngTuple,
      [0, 0] as L.LatLngTuple,
    );
    L.circle(center, {
      radius: 18000,
      color: '#ffd000',
      weight: 1,
      opacity: 0.45,
      fillColor: '#ffd000',
      fillOpacity: 0.05,
    }).addTo(map);
    for (const spot of this.outlets) {
      const marker = L.marker([spot.lat, spot.lng], { icon: this.iconFor(spot, false) });
      marker.bindPopup(
        `<strong>${spot.area}</strong><span>${spot.address}</span>`,
        { className: 'mb-popup', closeButton: false, offset: [0, -8] },
      );
      const side = spot.id === 'hq' || spot.id === 'balewadi' || spot.id === 'vadgaon' ? 'left' : 'right';
      marker.bindTooltip(this.shortName(spot), {
        permanent: true,
        direction: side,
        offset: side === 'left' ? [-8, -16] : [8, -16],
        className: 'pin-name',
        opacity: 1,
      });
      marker.on('click', () => this.chooseOutlet(spot.id));
      marker.addTo(map);
      this.markers.set(spot.id, marker);
    }
    this.citySpots = spots;
    map.fitBounds(spots, { padding: [36, 48] });
    this.city = map;
    this.paintPins();
  }

  private shortName(spot: Outlet): string {
    if (spot.hq) {
      return 'Sus';
    }
    return spot.area.startsWith('Vadgaon') ? 'Vadgaon' : spot.area;
  }

  private paintPins(): void {
    for (const spot of this.outlets) {
      this.markers.get(spot.id)?.setIcon(this.iconFor(spot, spot.id === this.activeOutlet()));
    }
  }

  private iconFor(spot: Outlet, selected: boolean): L.DivIcon {
    const fill = selected ? '#ffd000' : '#ffffff';
    return L.divIcon({
      className: 'mb-pin-wrap',
      iconSize: [34, 44],
      iconAnchor: [17, 42],
      popupAnchor: [0, -38],
      html: `<svg width="34" height="44" viewBox="0 0 34 44" aria-hidden="true"><path d="M17 42.2C17 42.2 2.2 26.2 2.2 16.2a14.8 14.8 0 1 1 29.6 0C31.8 26.2 17 42.2 17 42.2z" fill="${fill}" stroke="#1c2430" stroke-width="1.6"/><text x="17" y="21" text-anchor="middle" font-family="Manrope,sans-serif" font-size="13" font-weight="800" fill="#1c2430">${spot.n}</text></svg>`,
    });
  }
}
