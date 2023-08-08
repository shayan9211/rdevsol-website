import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettercloudComponent } from './bettercloud.component';

describe('BettercloudComponent', () => {
  let component: BettercloudComponent;
  let fixture: ComponentFixture<BettercloudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BettercloudComponent]
    });
    fixture = TestBed.createComponent(BettercloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
