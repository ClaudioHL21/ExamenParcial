import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
  favoritos = []

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavoritosProvider Provider');
  }

  remove(vjuego)
  {
    let index = this.favoritos.findIndex(item =>
    {
      return item.ad.subject == vjuego.ad.subject &&
      item.ad.user.account.name == vjuego.ad.user.account.name;
    });

    if (index > -1)
  {
    this.favoritos.splice(1);
    const toast = this.toastCtrl.create({
      message: 'Producto eliminado de favoritos',
      duration: 3000,
      position: 'top'
    });
  }

}

existe(vjuego)
{
  this.favoritos.some(item =>
  {
    return item.ad.subject == vjuego.ad.subject &&
    item.ad.user.account.name == vjuego.ad.user.account.name;
  });
}

addFavoritos(vjuego)
  {
    this.favoritos.push(vjuego);
    const toast = this.toastCtrl.create({
      message: 'Producto agregado a favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getFavoritos()
  {
    return this.favoritos;
  }

}