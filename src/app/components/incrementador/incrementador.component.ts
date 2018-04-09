import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // Nos permite referenciar un elemento del DOM
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  // Nos permite comunicar información al componente padre
  @Output() cambioValor: EventEmitter<number> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  onChanges(newValue: number) {
    // tslint:disable-next-line:prefer-const
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso =  newValue;
    }
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value =  this.progreso;
    this.cambioValor.emit(this.progreso);

    // Esta última línea del focon no ha funcionado muy bien.
    this.txtProgress.nativeElement.focus();
  }
  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    if (this.progreso > 100) {
      this.progreso = 100;
    }
    if (this.progreso < 0) {
      this.progreso = 0;
    }
    this.cambioValor.emit(this.progreso);
  }

}
