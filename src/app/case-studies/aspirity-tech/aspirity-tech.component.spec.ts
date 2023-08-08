import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirityTechComponent } from './aspirity-tech.component';

describe('AspirityTechComponent', () => {
  let component: AspirityTechComponent;
  let fixture: ComponentFixture<AspirityTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspirityTechComponent]
    });
    fixture = TestBed.createComponent(AspirityTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
