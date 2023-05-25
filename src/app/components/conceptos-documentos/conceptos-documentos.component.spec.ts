import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptosDocumentosComponent } from './conceptos-documentos.component';

describe('ConceptosDocumentosComponent', () => {
  let component: ConceptosDocumentosComponent;
  let fixture: ComponentFixture<ConceptosDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConceptosDocumentosComponent]
    });
    fixture = TestBed.createComponent(ConceptosDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
