import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerosZonasComponent } from './terceros-zonas.component';

describe('TercerosZonasComponent', () => {
  let component: TercerosZonasComponent;
  let fixture: ComponentFixture<TercerosZonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercerosZonasComponent]
    });
    fixture = TestBed.createComponent(TercerosZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
