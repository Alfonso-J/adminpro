import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingService {

  ajustes: Ajustes = {
       temaUrl: 'assets/css/colors/default.css',
       tema: 'default'
  };
  constructor(@Inject( DOCUMENT ) private _document ) { 
    this.cargarAjustes();
  }

  guardarAjustes () {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes) );
  }

  cargarAjustes () {
    // tslint:disable-next-line:prefer-const
    let _ajustes = localStorage.getItem('ajustes');
    
    console.log(_ajustes);

    if (_ajustes) {
      this.ajustes = JSON.parse(_ajustes);
    } else {
      
    }
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema (tema: string) {
    // tslint:disable-next-line:prefer-const
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}
interface Ajustes {
  temaUrl: string;
  tema: string;
}
