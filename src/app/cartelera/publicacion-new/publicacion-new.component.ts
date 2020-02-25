import { Component, OnInit } from '@angular/core';
import { CarteleraService, AuthenticationService } from 'src/app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { Publicacion, User } from 'src/app/_models';

@Component({
  selector: 'app-publicacion-new',
  templateUrl: './publicacion-new.component.html',
  styleUrls: ['./publicacion-new.component.scss']
})
export class PublicacionNewComponent implements OnInit {

  submitted = false;
  error = '';
  model = new Publicacion();
  cartelera_actual = -1;
  currentUser: User;
  
  constructor(private carteleraService: CarteleraService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id_cartelera']) {
        this.cartelera_actual = params['id_cartelera']; 
      }
    });
  }

  onSubmit() {
    this.carteleraService.agregarPublicacion(this.cartelera_actual, this.model).subscribe(
      cartelera => {
        this.model = new Publicacion();
          this.router.navigate(['/cartelera/'+this.cartelera_actual]);
      });
  }

  goBack(): void{
      this.router.navigate(['/cartelera/'+this.cartelera_actual]);
  }

}
