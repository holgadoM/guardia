import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class fechaService {

    fechaInicio;
    fechaFinal;

    public arrayTrabaja:moment.Moment[] = [];
    public arrayNoTrabaja:moment.Moment[] = [];

    constructor() { 
        
    }

    calcularFecha(inicio, fechaFin){
        this.arrayTrabaja = [];
        this.arrayNoTrabaja = [];

        try {
            let hoy =  moment(inicio); //add() para instanciar con la fecha correcta

            this.fechaInicio = moment(inicio);
            this.fechaFinal = moment(fechaFin); //add() para instanciar con la fecha correcta

            let flag = true;

            while( this.fechaFinal.diff(hoy,'days') >=0 ){
                if(flag){
                            //console.log("Trabaja: ", hoy);
                    
                            this.arrayTrabaja.push ( moment(hoy) );
                            flag = false;
                            
                        }else{
                            //console.log("NO Trabaja: ", hoy);
                            this.arrayNoTrabaja.push ( moment(hoy) );
                            flag = true;
                        }
                       
                        hoy.add(4,'days');
            }
            


            
            
        } catch (error) {
            console.log(error);
        }
        
        
    }

}