import { Component, OnInit } from '@angular/core';
import { AuthenticationService, PublicacionService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { Cartelera, Publicacion, User } from 'src/app/_models';

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
    });
  }

}
