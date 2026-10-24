import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EXPANSION, FILMS, FOUNDER, LETTER, MODELS, REACH, STORIES } from '../data/site.data';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'app-stories',
  imports: [RouterLink, IconComponent],
  template: `
    <section class="sheet-hero">
      <div class="wrap sheet-hero-grid">
        <div>
          <p class="pill">The story behind the brand · Pune, 2017</p>
          <h1>A letter from the founder.</h1>
          <p class="lede">{{ founder.name }}, {{ founder.role }} of {{ founder.company }}. The partner films below are still sample layouts. No owner is quoted.</p>
        </div>
        <img class="float-model" src="brand/model-classic.png" alt="Classic Café with terrace seating" />
      </div>
    </section>

    <section class="band">
      <div class="wrap story-layout">
        <article class="letter">
          <p class="kicker">Dear potential franchisee</p>
          @for (para of letter; track para) {
            <p>{{ para }}</p>
          }
          <footer>
            <strong>{{ founder.name }}</strong>
            <span>{{ founder.role }} · {{ founder.company }}</span>
          </footer>
        </article>
        <aside class="reach-card">
          <p class="kicker">Upcoming locations</p>
          <h2>{{ expansion }}</h2>
          <div class="stat-row tight">
            @for (item of reach; track item.label) {
              <div>
                <strong>{{ item.figure }}</strong>
                <span>{{ item.label }}</span>
              </div>
            }
          </div>
          <a class="btn btn-ink" routerLink="/franchise" fragment="brochure">View the brochure</a>
        </aside>
      </div>
    </section>

    <section class="band band-paper">
      <div class="wrap">
        <div class="section-head">
          <p class="kicker">One frame per model</p>
          <h2>Sample frames. No partner is named.</h2>
        </div>
        <div class="story-board">
          @for (story of stories; track story.format; let i = $index) {
            <article>
              <div class="story-shot">
                <img [src]="models[i].image" [alt]="models[i].name" />
                <span class="play-badge"><app-icon name="play" /> {{ story.film }}</span>
              </div>
              <p class="sample">Sample · {{ story.format }}</p>
              <h2>{{ story.quote }}</h2>
              <p>{{ story.detail }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="band">
      <div class="wrap">
        <div class="section-head row-head">
          <div>
            <p class="kicker">Four films in the brief</p>
            <h2>Founders, kitchen, plant, then the owners.</h2>
          </div>
          <p class="section-aside">Scripts are in the project. Shooting is a separate day. The live page embeds them from YouTube.</p>
        </div>
        <div class="film-board">
          @for (film of films; track film.title; let i = $index) {
            <article>
              <div class="film-still">
                <img [src]="stills[i]" [alt]="film.title" />
                <span class="play-badge"><app-icon name="play" /> {{ film.length }}</span>
              </div>
              <h3>{{ film.title }}</h3>
              <p>{{ film.copy }}</p>
            </article>
          }
          <article class="film-note">
            <span class="fact-ico"><app-icon name="chat" /></span>
            <h3>Owner on camera</h3>
            <p>A consenting partner, in their own shop, for about a minute. Nothing here pretends that film already exists.</p>
            <a class="text-link" routerLink="/contact">Offer a shop for a testimonial day</a>
          </article>
        </div>
      </div>
    </section>

    <section class="band band-ink">
      <div class="wrap">
        <div class="section-head light">
          <p class="kicker">A service day · sample</p>
          <h2>What the camera would follow.</h2>
        </div>
        <ol class="day-line">
          @for (beat of day; track beat.time) {
            <li>
              <strong>{{ beat.time }}</strong>
              <h3>{{ beat.title }}</h3>
              <p>{{ beat.copy }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class StoriesComponent {
  readonly founder = FOUNDER;
  readonly letter = LETTER;
  readonly expansion = EXPANSION;
  readonly reach = REACH;
  readonly stories = STORIES;
  readonly films = FILMS;
  readonly models = MODELS;
  readonly stills = ['brand/cafe-interior.jpg', 'brand/tray.jpg', 'brand/shake-real.jpg'];
  readonly day = [
    { time: '08:30', title: 'Open the line', copy: 'Cold hold, blender check, the first jars on the pass.' },
    { time: '12:30', title: 'Lunch rush', copy: 'Shakes, high fries, and the burger that lifts the ticket.' },
    { time: '16:00', title: 'The after-school queue', copy: 'The hour the kiosk is built around.' },
    { time: '21:30', title: 'The same close', copy: 'Clean-down, counted the same way in every format.' },
  ];
}
