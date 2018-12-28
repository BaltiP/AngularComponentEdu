import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationExComponent } from './interpolation-ex.component';

describe('InterpolationExComponent', () => {
  let component: InterpolationExComponent;
  let fixture: ComponentFixture<InterpolationExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
