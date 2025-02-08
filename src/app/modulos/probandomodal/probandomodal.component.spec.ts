import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbandomodalComponent } from './probandomodal.component';

describe('ProbandomodalComponent', () => {
  let component: ProbandomodalComponent;
  let fixture: ComponentFixture<ProbandomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbandomodalComponent]
    });
    fixture = TestBed.createComponent(ProbandomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
