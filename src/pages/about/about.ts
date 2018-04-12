import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { fechaService } from '../../services/fecha.services';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  fechaCalcular:Date;
  fechaInicio:Date;
  opcion;

  constructor(public navCtrl: NavController, private _fecha:fechaService) {
    this.opcion = "Jordana";
  }

}
