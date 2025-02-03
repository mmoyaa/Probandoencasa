import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando2Component } from './probando2.component';

describe('Probando2Component', () => {
  let component: Probando2Component;
  let fixture: ComponentFixture<Probando2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando2Component]
    });
    fixture = TestBed.createComponent(Probando2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
