import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './compras.html',
  styleUrl: './compras.css',
})
export class Compras {

  FormularioCompras: FormGroup;

  constructor(private form: FormBuilder, private router: Router) {

    this.FormularioCompras = this.form.group({
      Fecha: ['', Validators.required],
      Proveedor: ['', Validators.required],
      Factura: ['', Validators.required],
      Codigo: ['', Validators.required],
      Medicamento: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.min(1)]],
      PrecioCompra: ['', Validators.required],
      PrecioVenta: ['', Validators.required],
    });

  }

  guardarCompra() {

    if (this.FormularioCompras.invalid) {
      alert('Complete los datos');
      return;
    }

    const datos = this.FormularioCompras.value;

    if (datos.PrecioVenta < datos.PrecioCompra) {
      alert('Precio de venta menor al de compra');
      return;
    }

    alert('Guardado');
  }

  salir() {
    this.router.navigate(['/login']);
  }

}