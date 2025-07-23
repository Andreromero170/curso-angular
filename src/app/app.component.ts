import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from '../componentes/formulario/formulario.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,FormularioComponent,NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
  nombre: string = 'Andre';  // propiedad usada en el HTML
  estado_boton: boolean = false;
  imagen:string = "messi.png";
  mostrarNombre() {
    this.estado_boton = true;
  }

  // lista simple de productos
    productos = ['Manzanas', 'Naranjas', 'Peras'];

//lista de productos con objetos
    productos2 = [
  { id: 1, nombre: 'Manzanas', precio: 1.5 },
  { id: 2, nombre: 'Naranjas', precio: 2.0 },
  { id: 3, nombre: 'Peras', precio: 1.8 }
];


}
