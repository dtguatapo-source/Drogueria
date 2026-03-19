import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario = '';
  password = '';
  mensajeError = '';

  constructor(private router: Router) {}

  // método de validación (más limpio)
  validarCampos(): boolean {
    return this.usuario.trim() !== '' && this.password.trim() !== '';
  }

  // simulación de usuario
  esUsuarioValido(): boolean {
    return this.usuario === 'admin' && this.password === '1234';
  }

  entrar() {
       
   if (this.usuario === '' || this.password === '') {
    this.mensajeError = 'Complete todos los campos';
    return;
  }

  if (this.usuario === 'admin' && this.password === '1234') {
    this.mensajeError = '';
    this.router.navigate(['/dashboard']);
  } else {
    this.mensajeError = 'Usuario o contraseña incorrectos';
  }
}
  

}