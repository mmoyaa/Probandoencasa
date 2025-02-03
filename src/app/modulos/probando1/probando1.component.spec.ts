import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando1Component } from './probando1.component';

describe('Probando1Component', () => {
  let component: Probando1Component;
  let fixture: ComponentFixture<Probando1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando1Component]
    });
    fixture = TestBed.createComponent(Probando1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
