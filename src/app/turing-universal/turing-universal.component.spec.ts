import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuringUniversalComponent } from './turing-universal.component';

describe('TuringUniversalComponent', () => {
  let component: TuringUniversalComponent;
  let fixture: ComponentFixture<TuringUniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuringUniversalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuringUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
