import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface User {
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink,NgClass,NgFor],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    { name: 'Ana', active: true },
    { name: 'Luis', active: false },
    { name: 'Pedro', active: true }
  ];
}
