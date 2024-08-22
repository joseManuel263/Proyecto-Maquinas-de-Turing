import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuringSimulationComponent } from './turing-simulation.component';

describe('TuringSimulationComponent', () => {
  let component: TuringSimulationComponent;
  let fixture: ComponentFixture<TuringSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuringSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuringSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
