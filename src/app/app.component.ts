import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedModel: string = 'nondeterministic';

  // Método que se ejecuta al seleccionar un modelo del menú desplegable
  onModelSelect() {
    if (this.selectedModel === 'nondeterministic') {
      // Acciones adicionales para la máquina no determinista
      console.log("Máquina No Determinista seleccionada.");
      // Aquí puedes resetear o inicializar variables específicas para la máquina no determinista
      // Ejemplo:
      // this.initializeNondeterministicMachine();
    } else if (this.selectedModel === 'universal') {
      // Acciones adicionales para la máquina universal
      console.log("Máquina Universal seleccionada.");
      // Aquí puedes resetear o inicializar variables específicas para la máquina universal
      // Ejemplo:
      // this.initializeUniversalMachine();
    }
  }

  // Ejemplo de un método de inicialización (opcional)
  // Esto podría resetear configuraciones o preparar la interfaz para la máquina seleccionada
  initializeNondeterministicMachine() {
    // Código para inicializar la máquina no determinista
    console.log("Inicializando la Máquina No Determinista...");
    // Resetea variables, carga configuraciones por defecto, etc.
  }

  initializeUniversalMachine() {
    // Código para inicializar la máquina universal
    console.log("Inicializando la Máquina Universal...");
    // Resetea variables, carga configuraciones por defecto, etc.
  }
}
