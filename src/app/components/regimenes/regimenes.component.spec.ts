import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimenesComponent } from './regimenes.component';

describe('RegimenesComponent', () => {
  let component: RegimenesComponent;
  let fixture: ComponentFixture<RegimenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegimenesComponent]
    });
    fixture = TestBed.createComponent(RegimenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
