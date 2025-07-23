import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
estadoPedido = 'pendiente';
}
