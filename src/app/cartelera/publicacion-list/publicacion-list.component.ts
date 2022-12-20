import { Component, OnInit } from '@angular/core';
import { Publicacion, User, Cartelera } from 'src/app/_models';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, PublicacionService, CarteleraService } from 'src/app/_services';

@Component({
  selector: 'app-publicacion-list',
  templateUrl: './publicacion-list.component.html',
  styleUrls: ['./publicacion-list.component.scss']
})
export class PublicacionListComponent implements OnInit {

  publicaciones: Publicacion[];
  cartelera_actual: Cartelera;
  error: string = '';
  loading: boolean = false;
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private carteleraService: CarteleraService,
    private publicacionService: PublicacionService, private activatedRoute: ActivatedRoute
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.loading = true;
        this.publicacionService.getPublicaciones(params['id'])
            .subscribe(
                data => {
                    this.loading = false;
                    this.publicaciones = data;
                },
                error => {
                    this.error = 'No se pudieron cargar las publicaciones';
                    this.loading = false;
                    console.error(error);
                }
            );
      }
    });

  }

}
