import { Component } from '@angular/core';
export interface inicio {
  descripcion:string
   imagen?: string
 }

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  inicios:inicio[]=[
    {
      descripcion:"Proyecto que simula UTM",
      imagen: "assets/maquina.jpg"
    }

  ]


}
