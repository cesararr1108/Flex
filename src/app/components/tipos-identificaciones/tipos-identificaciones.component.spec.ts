import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposIdentificacionesComponent } from './tipos-identificaciones.component';

describe('TiposIdentificacionesComponent', () => {
  let component: TiposIdentificacionesComponent;
  let fixture: ComponentFixture<TiposIdentificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposIdentificacionesComponent]
    });
    fixture = TestBed.createComponent(TiposIdentificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
