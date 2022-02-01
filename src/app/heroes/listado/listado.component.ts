import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[]=['Batman','Goku','Alondra','SuperMan','Mamá','Papá','Daniel'];
  heroeborrado:string='';

  borrarHeroe():void{
    this.heroeborrado=this.heroes.pop() || '';
    console.log('Borrando...');
    console.log(this.heroeborrado)
  }

}
