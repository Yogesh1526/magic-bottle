import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  constructor() {
    const el = inject(ElementRef).nativeElement as HTMLElement;
    el.classList.add('reveal');
    afterNextRender(() => {
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (motion) {
        el.classList.add('in');
        return;
      }
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.classList.add('in');
          observer.disconnect();
        }
      }, { threshold: 0.16 });
      observer.observe(el);
    });
  }
}
