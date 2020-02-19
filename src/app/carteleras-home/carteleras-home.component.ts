import { Component, OnInit } from '@angular/core';
import { Cartelera, User } from '../_models';
import { ActivatedRoute, Router } from '@angular/router';
import { CarteleraService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-carteleras-home',
  templateUrl: './carteleras-home.component.html',
  styleUrls: ['./carteleras-home.component.scss']
})
export class CartelerasHomeComponent implements OnInit {

  carteleras: Cartelera[] = [];
  error: string = '';
  loading: boolean = false;
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private carteleraService: CarteleraService, private activatedRoute: ActivatedRoute
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() {

      this.loading = true;
      this.carteleraService.getCartelerasPublicas()
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

  get isLoggedIn() {
    return this.currentUser != null;
  }
}