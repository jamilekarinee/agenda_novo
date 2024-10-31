import { Component } from '@angular/core';
import { Contato, TipoContato } from './contato';
import { Agenda } from './agenda';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.scss'
})
export class AdicionaContatoComponent {
  tipos: string[]
  //agenda: Agenda

  constructor(public agenda: AgendaService) {
    this.tipos = Object.values(TipoContato)
    //this.agenda = new Agenda() 
   }

  adicionar(nm: string, tl: string, em: string, aniv: string, tipo: string, fav: boolean) {
    /*criar um novo objeto contato a cada
      clique e adicinar na lista de contatos
    */
    let pessoa = new Contato(nm, tl, em, new Date(aniv), this.getTipo(tipo), fav)
    this.agenda.adicionar(pessoa)
  }

  getTipo(str: string): TipoContato {
    let tp: TipoContato = TipoContato.AMIGO

    if (str === TipoContato.AMIGO) { 
      tp = TipoContato.AMIGO
    } else if (str === TipoContato.FAMILIA) {
      tp = TipoContato.FAMILIA
    }

    return tp
  }
}
