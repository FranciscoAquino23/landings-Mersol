import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDemoComponent } from './landing-demo.component';

describe('LandingDemoComponent', () => {
  let component: LandingDemoComponent;
  let fixture: ComponentFixture<LandingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
