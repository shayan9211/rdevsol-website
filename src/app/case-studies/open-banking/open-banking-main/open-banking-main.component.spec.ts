import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBankingMainComponent } from './open-banking-main.component';

describe('OpenBankingMainComponent', () => {
  let component: OpenBankingMainComponent;
  let fixture: ComponentFixture<OpenBankingMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenBankingMainComponent]
    });
    fixture = TestBed.createComponent(OpenBankingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
