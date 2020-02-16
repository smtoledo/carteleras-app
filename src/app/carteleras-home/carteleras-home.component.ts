import { Component, OnInit } from '@angular/core';
import { Cartelera } from '../_models';
import { CarteleraService } from '../_services';

@Component({
  selector: 'app-carteleras-home',
  templateUrl: './carteleras-home.component.html',
  styleUrls: ['./carteleras-home.component.scss']
})
export class CartelerasHomeComponent implements OnInit {

  carteleras: Cartelera[] = [];
  error: string = '';
  loading: boolean = false;

  constructor(private carteleraService: CarteleraService) { }

  ngOnInit() {

      this.loading = true;
      this.carteleraService.getAll()
          .subscribe(
              data => {
                  this.loading = false;
                  this.carteleras = data;
              },
              error => {
                  this.error = 'No se pudieron cargar las carteleras';
                  this.loading = false;
                  console.error(error);
              }
          )
  }


}
