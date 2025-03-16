import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando7Component } from './probando7.component';

describe('Probando7Component', () => {
  let component: Probando7Component;
  let fixture: ComponentFixture<Probando7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando7Component]
    });
    fixture = TestBed.createComponent(Probando7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
