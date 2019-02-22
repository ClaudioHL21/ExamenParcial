import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavPage } from '../fav/fav';
import { HomePage } from '../home/home';
import { AnimalesPage } from '../animales/animales';
import { CompuPage } from '../compu/compu';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = HomePage;
  tab2 = AnimalesPage;
  tab3 = CompuPage;
  tab4 = FavoritosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
