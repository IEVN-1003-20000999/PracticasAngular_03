import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  compra: Compra = new Compra();
  total: number = 0;
  compra_permitida: boolean = true;

  calcular(): void {
    this.compra_permitida = this.compra.ComPermitida();

    if (!this.compra_permitida) {
      return;
    }

    this.total = this.compra.total();
  }
}

class Compra {
  nombre: string ="";
  num_P: number = 0;
  boletos: number = 0;
  tarjeta: boolean;

  constructor() {
    this.tarjeta = false;
  }

  ComPermitida(): boolean {
    let max_boletos = this.num_P * 7;
    return this.boletos <= max_boletos;
  }

  descuento(): boolean {
    return this.boletos > 2;
  }

  total(): number {
    let descuento = 0;
    let total = this.boletos * 12;

    if (this.descuento()) {
      if (this.boletos >= 5) {
        descuento = 0.15;
      } else if (this.boletos < 5) {
        descuento = 0.10;
      }
    }

    total = total * (1 - descuento);

    if (this.tarjeta) {
      total = total * (1 - 0.10);
    }

    return total;
  }
}