import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { fechaService } from '../../services/fecha.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  fechaCalcular;
  fechaInicio;

  constructor( private _fecha:fechaService, private nav:NavController) {

  }

  calcular(){
    this._fecha.calcularFecha( this.fechaInicio, this.fechaCalcular );
    this.nav.parent.select(1);
  }


}
