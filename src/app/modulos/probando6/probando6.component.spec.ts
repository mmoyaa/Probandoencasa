import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando6Component } from './probando6.component';

describe('Probando6Component', () => {
  let component: Probando6Component;
  let fixture: ComponentFixture<Probando6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando6Component]
    });
    fixture = TestBed.createComponent(Probando6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
