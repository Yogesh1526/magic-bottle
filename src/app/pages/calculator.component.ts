import { Component, computed, signal } from '@angular/core';
import { MODELS, ModelId, SHEET } from '../data/site.data';

@Component({
  selector: 'app-calculator',
  template: `
    <div class="calc">
      <form class="calc-controls">
        <p class="kicker">Inputs</p>
        <h3>Set the shop you are costing.</h3>
        <div class="seg" role="radiogroup" aria-label="Format">
          @for (item of models; track item.id) {
            <button
              type="button"
              role="radio"
              [attr.aria-checked]="modelId() === item.id"
              [class.on]="modelId() === item.id"
              (click)="pick(item.id)">
              {{ item.name }}
            </button>
          }
        </div>
        <label>
          Monthly rent (₹)
          <input type="number" min="0" max="300000" [value]="rent()" (input)="setNum('rent', $event)" />
        </label>
        <label>
          Staff on the floor
          <input type="number" min="1" max="12" [value]="staff()" (input)="setNum('staff', $event)" />
        </label>
        <label>
          Average bill (₹)
          <input type="number" min="50" max="999" [value]="ticket()" (input)="setNum('ticket', $event)" />
        </label>
        <label>
          Bills per day
          <input type="number" min="1" max="300" [value]="bills()" (input)="setNum('bills', $event)" />
        </label>
        <ul class="assumptions">
          <li>Ingredient cost {{ cogsPct }}% of sales</li>
          <li>Other costs {{ otherPct }}% of sales</li>
          <li>₹15,000 per person / month</li>
          <li>{{ days }} open days in the month</li>
        </ul>
      </form>

      <article class="sheet" aria-live="polite">
        <header class="sheet-head">
          <div>
            <p class="kicker">Owner’s money sheet</p>
            <h3>{{ model().name }}</h3>
          </div>
          <p class="sheet-invest">{{ inr(model().investment) }}<span>published investment</span></p>
        </header>
        <dl>
          <div><dt>Monthly sales</dt><dd>{{ inr(sales()) }}</dd></div>
          <div><dt>Ingredients</dt><dd>{{ inr(cogs()) }}</dd></div>
          <div class="gross"><dt>Gross after ingredients</dt><dd>{{ inr(gross()) }}</dd></div>
          <div><dt>Rent</dt><dd>{{ inr(rent()) }}</dd></div>
          <div><dt>Staff</dt><dd>{{ inr(staffCost()) }}</dd></div>
          <div><dt>Other</dt><dd>{{ inr(other()) }}</dd></div>
        </dl>
        <div class="surplus">
          <p>Illustrative monthly surplus</p>
          <strong [class.short]="surplus() <= 0">{{ surplus() > 0 ? inr(surplus()) : 'Below cost' }}</strong>
          <span>
            @if (payback(); as months) {
              About {{ months }} months to cover {{ inr(model().investment) }}.
              Published range for this format: {{ model().payback }}.
            } @else {
              At these inputs the sheet does not cover rent, staff, and ingredients.
            }
          </span>
        </div>
        <p class="sheet-note">Illustration only. Defaults are set so a healthy month lands near the payback already printed on themagicbottle.co.in. Change the inputs and the result moves. This is not a forecast and not a promise of return.</p>
      </article>
    </div>
  `,
})
export class CalculatorComponent {
  readonly models = MODELS;
  readonly days = SHEET.days;
  readonly cogsPct = SHEET.cogs * 100;
  readonly otherPct = SHEET.other * 100;

  readonly modelId = signal<ModelId>('kiosk');
  readonly rent = signal(MODELS[0].rent);
  readonly staff = signal(MODELS[0].staff);
  readonly ticket = signal(MODELS[0].ticket);
  readonly bills = signal(MODELS[0].bills);

  readonly model = computed(() => this.models.find((item) => item.id === this.modelId()) ?? this.models[0]);
  readonly sales = computed(() => this.bills() * this.ticket() * SHEET.days);
  readonly cogs = computed(() => Math.round(this.sales() * SHEET.cogs));
  readonly gross = computed(() => this.sales() - this.cogs());
  readonly staffCost = computed(() => this.staff() * SHEET.salary);
  readonly other = computed(() => Math.round(this.sales() * SHEET.other));
  readonly surplus = computed(() => this.gross() - this.rent() - this.staffCost() - this.other());
  readonly payback = computed(() => {
    const surplus = this.surplus();
    if (surplus <= 0) {
      return null;
    }
    return (this.model().investment / surplus).toFixed(1);
  });

  pick(id: ModelId): void {
    const model = this.models.find((item) => item.id === id);
    if (!model) {
      return;
    }
    this.modelId.set(id);
    this.rent.set(model.rent);
    this.staff.set(model.staff);
    this.ticket.set(model.ticket);
    this.bills.set(model.bills);
  }

  setNum(field: 'rent' | 'staff' | 'ticket' | 'bills', event: Event): void {
    const raw = Number((event.target as HTMLInputElement).value);
    const max = { rent: 300000, staff: 12, ticket: 999, bills: 300 }[field];
    if (!Number.isFinite(raw)) {
      return;
    }
    this[field].set(Math.min(max, Math.max(0, Math.round(raw))));
  }

  inr(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }
}
