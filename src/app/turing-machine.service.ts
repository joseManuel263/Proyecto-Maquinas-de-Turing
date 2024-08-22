import { Injectable } from '@angular/core';

interface Transition {
  currentState: string;
  readSymbol: string;
  nextState: string;
  writeSymbol: string;
  moveDirection: 'L' | 'R';
}

interface TuringMachineConfig {
  states: string[];
  alphabet: string[];
  transitions: Transition[];
  initialState: string;
  acceptanceStates: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TuringMachineService {
  simulate(config: TuringMachineConfig, input: string): any[] {
    const tape = input.split('');
    let headPosition = 0;
    let currentState = config.initialState;
    const executionSteps: any[] = [];

    while (true) {
      const currentSymbol = tape[headPosition] || '_'; // Lee el símbolo en la posición actual
      const transition = config.transitions.find(
        t => t.currentState === currentState && t.readSymbol === currentSymbol
      );

      if (!transition) {
        break; // No hay transición posible, la máquina se detiene.
      }

      // Aplica la transición
      tape[headPosition] = transition.writeSymbol; // Escribe el nuevo símbolo en la cinta
      currentState = transition.nextState; // Cambia al siguiente estado
      headPosition += transition.moveDirection === 'R' ? 1 : -1; // Mueve el cabezal

      // Guarda el estado intermedio
      executionSteps.push({
        tape: tape.slice(), // Copia de la cinta actual
        headPosition,
        currentState,
        transition
      });

      // Verifica si estamos en un estado de aceptación
      if (config.acceptanceStates.includes(currentState)) {
        executionSteps.push({ accepted: true }); // Marca como aceptado
        break;
      }
    }

    if (!executionSteps.some(step => step.accepted)) {
      executionSteps.push({ accepted: false }); // Marca como rechazado si no hay estados de aceptación alcanzados
    }

    return executionSteps;
  }
}
