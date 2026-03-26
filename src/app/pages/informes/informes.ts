import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-informes',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './informes.html',
  styleUrl: './informes.css',
})
export class Informes {

  FormularioInformes: FormGroup;
  constructor(private form: FormBuilder, private router: Router) {
    this.FormularioInformes = this.form.group({

      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required]
    })
}

buscarVentas() {
    if (this.FormularioInformes.invalid) {
      console.log('Formulario inválido');
      return;
    }
     const { fechaInicial, fechaFinal } = this.FormularioInformes.value;

    console.log('Buscando entre:', fechaInicial, fechaFinal);
  }
   exportarExcel() {
    console.log('Exportando a Excel...');
  }
  
  irAdmin() {
    this.router.navigate(['/admin']);
  }

  salir() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }

  volverInicio() {
    this.router.navigate(['/']);
  }
}
