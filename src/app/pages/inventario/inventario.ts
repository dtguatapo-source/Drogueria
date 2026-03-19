import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  imports: [],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {

  constructor(private router: Router) {}

  salir() {
    this.router.navigate(['/login']);
  }

}