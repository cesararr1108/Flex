import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesPagoComponent } from './condiciones-pago.component';

describe('CondicionesPagoComponent', () => {
  let component: CondicionesPagoComponent;
  let fixture: ComponentFixture<CondicionesPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondicionesPagoComponent]
    });
    fixture = TestBed.createComponent(CondicionesPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
