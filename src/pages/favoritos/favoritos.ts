import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Animales2Page } from '../animales2/animales2';
import { VjuegoPage } from '../vjuego/vjuego';
import { Compus2Page } from '../compus2/compus2';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  items = [];
  animalesPage = Animales2Page;
  vjuegoPage = VjuegoPage;
  compuPage = Compus2Page;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public fav: FavoritosProvider) {
    this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  verFav(vjuego)
  {
    this.navCtrl.push(this.vjuegoPage, {vjuego: vjuego})
  }
}
