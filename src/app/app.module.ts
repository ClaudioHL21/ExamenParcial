import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import { VjuegoPage } from '../pages/vjuego/vjuego';
import { FavPage } from '../pages/fav/fav';
import { TabsPage } from '../pages/tabs/tabs';
import { AnimalesPage } from '../pages/animales/animales';
import { Animales2Page } from '../pages/animales2/animales2';
import { CompuPage } from '../pages/compu/compu';
import { Compus2Page } from '../pages/compus2/compus2';
import { BuscarPage } from '../pages/buscar/buscar';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FavoritosProvider } from '../providers/favoritos/favoritos';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VjuegoPage,
    FavPage,
    TabsPage,
    AnimalesPage,
    Animales2Page,
    CompuPage,
    Compus2Page,
    BuscarPage,
    FavoritosPage
  

  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VjuegoPage,
    FavPage,
    TabsPage,
    AnimalesPage,
    Animales2Page,
    CompuPage,
    Compus2Page,
    BuscarPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
