import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando4Component } from './probando4.component';

describe('Probando4Component', () => {
  let component: Probando4Component;
  let fixture: ComponentFixture<Probando4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando4Component]
    });
    fixture = TestBed.createComponent(Probando4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
