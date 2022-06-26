import { Component, OnInit } from '@angular/core';
import { AuthenticationService, PublicacionService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { Cartelera, Publicacion, User, Comentario } from 'src/app/_models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publicacion-view',
  templateUrl: './publicacion-view.component.html',
  styleUrls: ['./publicacion-view.component.scss']
})
export class PublicacionViewComponent implements OnInit {

  cartelera_actual: Cartelera;
  publicacion: Publicacion;
  suscriptores: User[];
  currentUser: User;
  comentario = new Comentario();
  comentarios: Comentario[];
  
  constructor(private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id_cartelera'] && params['id_publicacion']) {
        this.publicacionService.getPublicacion(params['id_cartelera'],
        params['id_publicacion']).subscribe(
          data => { this.publicacion = data; }
        );
      }
      this.cargarComentarios();
    });
  }

  cargarComentarios() {
    this.activatedRoute.params.subscribe((params) => {
      this.publicacionService.getComentarios(params['id_cartelera'],
          params['id_publicacion']).subscribe(
            data => { this.comentarios = data; }
          );
    });
  }

  nuevoComent(formulario: NgForm) {
    if(formulario.valid) {
      this.activatedRoute.params.subscribe((params) => {
        if (params['id_cartelera'] && params['id_publicacion']) {
          this.publicacionService.postComentario(params['id_cartelera'],
          params['id_publicacion'], this.comentario).subscribe(
            data => { 
              formulario.reset;
              this.cargarComentarios();
            }
          );          
        }      
      });
    }
  }

  commentariosSortedBy(prop: string) {
    return this.comentarios.sort((a, b) => a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
  
}
