import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuringInputComponent } from './turing-input.component';

describe('TuringInputComponent', () => {
  let component: TuringInputComponent;
  let fixture: ComponentFixture<TuringInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuringInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuringInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
