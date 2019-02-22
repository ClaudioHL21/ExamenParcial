import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the Animales2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animales2',
  templateUrl: 'animales2.html',
})
export class Animales2Page {
  animal = {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public fav: FavoritosProvider ) {
    this.animal = this.navParams.get('animal');
    if (this.animal.ad.hasOwnProperty('images'))
    {
      this.imgs = this.animal.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Animales2Page');
  }

  favoritos (animal)
  {
    this.fav.addFavoritos(this.animal);
  }
}
