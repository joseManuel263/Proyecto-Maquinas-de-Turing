import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-turing-simulation',
  templateUrl: './turing-simulation.component.html'
})
export class TuringSimulationComponent {
  @Input() results: string[] = [];
}