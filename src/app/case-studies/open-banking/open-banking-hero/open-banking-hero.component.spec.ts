import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBankingHeroComponent } from './open-banking-hero.component';

describe('OpenBankingHeroComponent', () => {
  let component: OpenBankingHeroComponent;
  let fixture: ComponentFixture<OpenBankingHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenBankingHeroComponent]
    });
    fixture = TestBed.createComponent(OpenBankingHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
