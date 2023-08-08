import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptHeroComponent } from './gpt-hero.component';

describe('GptHeroComponent', () => {
  let component: GptHeroComponent;
  let fixture: ComponentFixture<GptHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GptHeroComponent]
    });
    fixture = TestBed.createComponent(GptHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
