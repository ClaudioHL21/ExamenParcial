import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the VjuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vjuego',
  templateUrl: 'vjuego.html',
})
export class VjuegoPage {
  vjuego = {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public fav: FavoritosProvider) {
    this.vjuego = this.navParams.get('vjuego');
    if (this.vjuego.ad.hasOwnProperty('images'))
    {
      this.imgs = this.vjuego.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VjuegoPage');
  }
  favoritos (vjuego)
  {
    this.fav.addFavoritos(this.vjuego);
  }

}
