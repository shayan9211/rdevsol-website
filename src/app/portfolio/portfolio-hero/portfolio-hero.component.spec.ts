import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeroComponent } from './portfolio-hero.component';

describe('PortfolioHeroComponent', () => {
  let component: PortfolioHeroComponent;
  let fixture: ComponentFixture<PortfolioHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioHeroComponent]
    });
    fixture = TestBed.createComponent(PortfolioHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
