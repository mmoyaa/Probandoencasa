import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando5Component } from './probando5.component';

describe('Probando5Component', () => {
  let component: Probando5Component;
  let fixture: ComponentFixture<Probando5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando5Component]
    });
    fixture = TestBed.createComponent(Probando5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
