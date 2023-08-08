import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpexterWebComponent } from './spexter-web.component';

describe('SpexterWebComponent', () => {
  let component: SpexterWebComponent;
  let fixture: ComponentFixture<SpexterWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpexterWebComponent]
    });
    fixture = TestBed.createComponent(SpexterWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
