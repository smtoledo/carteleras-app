import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { CarteleraService } from 'src/app/_services/cartelera.service';
import { Cartelera } from 'src/app/_models/Cartelera';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-add-cartelera',
  templateUrl: './add-cartelera.component.html',
  styleUrls: ['./add-cartelera.component.scss']
})
export class AddCarteleraComponent implements OnInit {

  //loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  tiposCartelera: string[];
  model = new Cartelera();

  constructor(private carteleraService: CarteleraService, private location: Location,
    private router: Router) { 
    this.tiposCartelera = ['EDUCATIVA', 'LABORAL'];    
  }

  ngOnInit() {
    //this.tiposCartelera = this.carteleraService.getTiposCartelera();
  }

  onSubmit() {
      this.carteleraService.crearCartelera(this.model).subscribe(
        cartelera => {
          this.model = new Cartelera();
          this.router.navigate(['/home']);
        });
  }

  goBack(): void{
    this.location.back();
  }

}
