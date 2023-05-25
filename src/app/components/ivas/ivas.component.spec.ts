import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvasComponent } from './ivas.component';

describe('IvasComponent', () => {
  let component: IvasComponent;
  let fixture: ComponentFixture<IvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IvasComponent]
    });
    fixture = TestBed.createComponent(IvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
