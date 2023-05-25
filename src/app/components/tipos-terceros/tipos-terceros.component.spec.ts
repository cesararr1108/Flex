import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposTercerosComponent } from './tipos-terceros.component';

describe('TiposTercerosComponent', () => {
  let component: TiposTercerosComponent;
  let fixture: ComponentFixture<TiposTercerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposTercerosComponent]
    });
    fixture = TestBed.createComponent(TiposTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
