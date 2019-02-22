import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VjuegoPage } from '../vjuego/vjuego';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  vjuegos = [];
  items = [];
  vjuegoPage = VjuegoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vjuegos = this.navParams.get('vjuegos')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev)
  {
    console.log(ev.target.value);

    this.items = this.vjuegos.filter(vjuego => {
      return vjuego.ad.subject.toLowerCase().includes( ev.target.value.toLowerCase())
    });
  }

  verVjuego(vjuego)
  {
    this.navCtrl.push(this.vjuegoPage, {vjuego: vjuego});
  }

}
