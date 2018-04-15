import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  // Para tener acceso al documento
  constructor( public _ajustes: SettingService) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiaColor(color: string, link: any) {
    
    this.aplicarCheck(link);
    
    this._ajustes.aplicarTema(color);
    
  }

  aplicarCheck(link: any) {
    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    
    // tslint:disable-next-line:prefer-const
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    // Con forin no funciona 
    // for (const ref in selectores) {
    //   if (object.hasOwnProperty(ref)) {
    //     const element = object[ref];
    //     element.classList.remove('working');
    //   }
    // }
    link.classList.add('working');
  }

  colocarCheck () {
    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    // tslint:disable-next-line:prefer-const
    let tema = this._ajustes.ajustes.tema;
    // tslint:disable-next-line:prefer-const
    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
      
    }
  }

}
