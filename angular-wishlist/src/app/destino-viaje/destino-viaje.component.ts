import { Component, OnInit, Input, HostBinding, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.models';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input('idx') posicion: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() { 
    this.destino = new DestinoViaje('', '');
    this.clicked = new EventEmitter();
    this.posicion = 0;
  }

  ngOnInit(): void {
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }

}
