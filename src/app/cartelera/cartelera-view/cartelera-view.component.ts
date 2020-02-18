import { Component, OnInit } from '@angular/core';
import { CarteleraService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { Cartelera, Publicacion } from 'src/app/_models';

@Component({
  selector: 'app-cartelera-view',
  templateUrl: './cartelera-view.component.html',
  styleUrls: ['./cartelera-view.component.scss']
})
export class CarteleraViewComponent implements OnInit {

  cartelera_actual: Cartelera;
  publicaciones: Publicacion[];

  constructor(private carteleraService: CarteleraService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.carteleraService.getCartelera(params['id']).subscribe(
          data => { this.cartelera_actual = data; }
        );
      }
    });
  }

}
