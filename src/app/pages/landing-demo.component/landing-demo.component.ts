import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// Importación de componentes
import { HeroComponent } from '../../shared/components/hero/hero';
import { NosotrosComponent } from '../../sections/nosotros/nosotros';
import { PromoCarouselComponent } from '../../components/promo-carousel/promo-carousel';

@Component({
  selector: 'app-landing-demo',
  standalone: true,
  imports: [CommonModule, HeroComponent, PromoCarouselComponent, NosotrosComponent],
  templateUrl: './landing-demo.component.html',
  styleUrl: './landing-demo.component.scss',
})
export class LandingDemoComponent implements AfterViewInit, OnDestroy {
  private fragmentSub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
  ) {}

  ngAfterViewInit(): void {
    this.fragmentSub = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.fragmentSub) {
      this.fragmentSub.unsubscribe();
    }
  }
}
