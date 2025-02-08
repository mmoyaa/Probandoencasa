import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando3Component } from './probando3.component';

describe('Probando3Component', () => {
  let component: Probando3Component;
  let fixture: ComponentFixture<Probando3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando3Component]
    });
    fixture = TestBed.createComponent(Probando3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
