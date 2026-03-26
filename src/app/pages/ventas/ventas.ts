import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {

  FormularioVentas: FormGroup;
  detalleVenta: any[] = [];

  constructor(private form: FormBuilder, private router: Router) {

    this.FormularioVentas = this.form.group({
      fechaCaducidad: ['', Validators.required],
      fechaVenta: ['', Validators.required],
      Cliente: ['', Validators.required],
      Factura: ['', Validators.required],
      Medicamento: ['', Validators.required],
      Cantidad: ['', Validators.required],
      Codigo: ['', Validators.required],
      Precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      Laboratorio: ['', Validators.required],
      Total: ['']
    });

  }

  agregarProducto() {

    if (this.FormularioVentas.invalid) {
      console.log('Formulario inválido');
      return;
    }

    const producto = this.FormularioVentas.value;

    producto.Total = producto.Cantidad * producto.Precio;

    this.detalleVenta.push(producto);

    console.log('Producto agregado:', producto);
  }

  quitarProducto() {
    this.detalleVenta.pop();
  }

  confirmarVenta() {
    console.log('Venta confirmada:', this.detalleVenta);
  }

  imprimirVenta() {
    window.print();
  }

  limpiarFormulario() {
    this.FormularioVentas.reset();
    this.detalleVenta = [];
  }

  irAdministrador() {
    this.router.navigate(['/admin']);
  }

  salir() {
    this.router.navigate(['/login']);
  }

}