import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevComponent } from './web-dev.component';

describe('WebDevComponent', () => {
  let component: WebDevComponent;
  let fixture: ComponentFixture<WebDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDevComponent]
    });
    fixture = TestBed.createComponent(WebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
