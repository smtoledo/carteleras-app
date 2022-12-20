import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { User } from 'src/app/_models';
import { UsuarioService } from '../_services';

@Component({
  selector: 'seguidores-list',
  templateUrl: './seguidores-list.component.html',
  styleUrls: ['./seguidores-list.component.scss']
})
export class SeguidoresListComponent implements OnInit {

  idCartelera: string;
	seguidores: User[];
	dialogRef: MatDialog;

  constructor(  @Inject(MAT_DIALOG_DATA) data: any,
                private usuarioService: UsuarioService,
                private router: Router) { 
                  this.idCartelera = data.id;
                  this.dialogRef = data.dialogRef;
  }

  ngOnInit() {
    this.usuarioService.recuperarSuscriptores(this.idCartelera)
      .subscribe(
        (seguidores) => {this.seguidores = seguidores;
        debugger;}
      );
  }

  close() {
		this.dialogRef.closeAll();
	}

}