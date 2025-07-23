import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  // lista simple de productos
    productos = ['Manzanas', 'Naranjas', 'Peras'];

    //lista de productos con objetos
    productos2 = [
  { id: 1, nombre: 'Manzanas', precio: 1.5 },
  { id: 2, nombre: 'Naranjas', precio: 2.0 },
  { id: 3, nombre: 'Peras', precio: 1.8 }
];
}
