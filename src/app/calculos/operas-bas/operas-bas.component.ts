import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1:string="";
  num2:string="";
  opc:string="sum"
  resultado:number=0;
  /*sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }*/
  calcular():void{
    switch(this.opc){
      case 'sum':
        this.resultado=parseInt(this.num1)+parseInt(this.num2);
        break;
      case 'rest':
        this.resultado=parseInt(this.num1)-parseInt(this.num2);
        break;
      case 'mult':
        this.resultado=parseInt(this.num1)*parseInt(this.num2);
        break;
      case 'div':
        this.resultado=parseInt(this.num1)/parseInt(this.num2);
        break;
    }
  }
}