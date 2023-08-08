import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBankingComponent } from './open-banking.component';

describe('OpenBankingComponent', () => {
  let component: OpenBankingComponent;
  let fixture: ComponentFixture<OpenBankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenBankingComponent]
    });
    fixture = TestBed.createComponent(OpenBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
