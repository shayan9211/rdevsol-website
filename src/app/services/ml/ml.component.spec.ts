import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLComponent } from './ml.component';

describe('MLComponent', () => {
  let component: MLComponent;
  let fixture: ComponentFixture<MLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MLComponent]
    });
    fixture = TestBed.createComponent(MLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
