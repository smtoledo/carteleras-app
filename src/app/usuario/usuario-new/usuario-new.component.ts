import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { UsuarioService } from 'src/app/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.scss']
})
export class UsuarioNewComponent implements OnInit {

  submitted = false;
  error = '';
  perfiles: string[];
  model = new User();


  constructor(private usuarioService: UsuarioService, 
    private router: Router) { 
      this.perfiles = ['ADMINISTRADOR', 'DOCENTE', 'ALUMNO']
    }

  ngOnInit() {
  }

  onSubmit() {
    this.usuarioService.crearUsuario(this.model).subscribe(
      cartelera => {
        this.model = new User();
        this.router.navigate(['/usuario/list']);
      });
  }

  goBack(): void{
    this.router.navigate(['/usuario/list']);
  }

}
