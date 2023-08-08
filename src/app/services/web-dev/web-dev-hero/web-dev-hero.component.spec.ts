import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevHeroComponent } from './web-dev-hero.component';

describe('WebDevHeroComponent', () => {
  let component: WebDevHeroComponent;
  let fixture: ComponentFixture<WebDevHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDevHeroComponent]
    });
    fixture = TestBed.createComponent(WebDevHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
