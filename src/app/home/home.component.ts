import { Component, OnInit } from '@angular/core';
import { CarteleraService } from '../_services';
import { Cartelera } from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
