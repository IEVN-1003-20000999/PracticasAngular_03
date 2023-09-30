import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
  num: number = 0;
  exp: number = 0;
  proc: string | null = null;
  resultado: number = 0;

  calcular(): void {
    if (this.num !== null && this.exp !== null) {
      this.resultado = 0;
      this.proc = '';

      for (let i = 0; i < this.exp; i++) {
        this.resultado += this.num;
        this.proc += `${this.num} + `;
      }
  
    }
  }
}