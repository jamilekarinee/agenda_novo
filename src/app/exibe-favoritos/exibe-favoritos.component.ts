import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../adiciona-contato/agenda.service';
import { Contato } from '../adiciona-contato/contato';

@Component({
  selector: 'app-exibe-favoritos',
  templateUrl: './exibe-favoritos.component.html',
  styleUrl: './exibe-favoritos.component.css'
})
export class ExibeFavoritosComponent implements OnInit {
agenda: any; 
favoritos: Contato[] = []; 
constructor(private agendaService: AgendaService){
}

ngOnInit(): void{
  this.favoritos = this.agendaService.obterFavoritos()
}
}
