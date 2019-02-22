import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { VjuegoPage } from '../vjuego/vjuego';
import { BuscarPage } from '../buscar/buscar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vjuegos = [];
  vjuegoPage = VjuegoPage;
  buscarPage = BuscarPage;

  constructor(public navCtrl: NavController, public http:HttpClient) {
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data => {
     // console.log(JSON.stringify(data));
     if(data.hasOwnProperty('counter_map')){
      console.log(data.counter_map.all);
    }
    if(data.hasOwnProperty('list_ads')){
      this.vjuegos = data.list_ads;
    }
 
    }, error =>{
      console.log(JSON.stringify(error));
    });


  }
  verVjuego(vjuego)
  {
    this.navCtrl.push(this.vjuegoPage, {vjuego: vjuego});
  }

  buscar(any)
  {
    this.navCtrl.push(this.buscarPage, {vjuegos: this.vjuegos});
  }
}
