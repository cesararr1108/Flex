import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaVentasComponent } from './zona-ventas.component';

describe('ZonaVentasComponent', () => {
  let component: ZonaVentasComponent;
  let fixture: ComponentFixture<ZonaVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaVentasComponent]
    });
    fixture = TestBed.createComponent(ZonaVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
