import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumansComponent } from './humans.component';

describe('HumansComponent', () => {
  let component: HumansComponent;
  let fixture: ComponentFixture<HumansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumansComponent]
    });
    fixture = TestBed.createComponent(HumansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
