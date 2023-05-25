import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerosContactosComponent } from './terceros-contactos.component';

describe('TercerosContactosComponent', () => {
  let component: TercerosContactosComponent;
  let fixture: ComponentFixture<TercerosContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercerosContactosComponent]
    });
    fixture = TestBed.createComponent(TercerosContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
