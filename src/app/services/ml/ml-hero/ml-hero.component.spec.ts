import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlHeroComponent } from './ml-hero.component';

describe('MlHeroComponent', () => {
  let component: MlHeroComponent;
  let fixture: ComponentFixture<MlHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MlHeroComponent]
    });
    fixture = TestBed.createComponent(MlHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
