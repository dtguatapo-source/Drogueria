import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {

  FormularioInventario: FormGroup;

  constructor(private form: FormBuilder, private router: Router) {

    this.FormularioInventario = this.form.group({
      Id: ['', Validators.required],
      Nombre: ['', Validators.required],
      Laboratorio: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.min(0)]],
      PrecioCompra: ['', Validators.required],
      PrecioVenta: ['', Validators.required],
    });

  }

  registrarProducto() {

    if (this.FormularioInventario.invalid) {
      alert('Complete todos los campos');
      return;
    }

    const datos = this.FormularioInventario.value;

    if (datos.PrecioVenta < datos.PrecioCompra) {
      alert('El precio de venta no puede ser menor al de compra');
      return;
    }

    if (datos.Cantidad < 0) {
      alert('Cantidad inválida');
      return;
    }

    alert('Producto registrado');
  }

  limpiar() {
    this.FormularioInventario.reset();
  }

  salir() {
    this.router.navigate(['/login']);
  }

}