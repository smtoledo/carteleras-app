import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { UsuarioService } from 'src/app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

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
  id: string;
  isAddMode: boolean;

  constructor(
      private usuarioService: UsuarioService, 
      private route: ActivatedRoute,
      private router: Router) { 
      this.perfiles = ['Administrador', 'Docente', 'Alumno']
    }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.usuarioService.getUsuario(this.id)
        .subscribe(user => this.model = user);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.isAddMode){
      this.createUsuario();
    }else{
      this.updateUsuario();
    }
  }

  createUsuario(){
    debugger;
      this.usuarioService.crearUsuario(this.model).subscribe(
        cartelera => {
          this.model = new User();
          this.router.navigate(['/usuario/list']);
        });
  }


  updateUsuario(){
    debugger;
    this.usuarioService.actualizarUsuario(this.model).subscribe(
      cartelera => {
        this.model = new User();
        this.router.navigate(['/usuario/list']);
      });
}

  goBack(): void{
    this.router.navigate(['/usuario/list']);
  }

}
