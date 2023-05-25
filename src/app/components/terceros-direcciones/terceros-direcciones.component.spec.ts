import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerosDireccionesComponent } from './terceros-direcciones.component';

describe('TercerosDireccionesComponent', () => {
  let component: TercerosDireccionesComponent;
  let fixture: ComponentFixture<TercerosDireccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercerosDireccionesComponent]
    });
    fixture = TestBed.createComponent(TercerosDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
