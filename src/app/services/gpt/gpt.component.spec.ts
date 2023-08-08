import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPTComponent } from './gpt.component';

describe('GPTComponent', () => {
  let component: GPTComponent;
  let fixture: ComponentFixture<GPTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GPTComponent]
    });
    fixture = TestBed.createComponent(GPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
