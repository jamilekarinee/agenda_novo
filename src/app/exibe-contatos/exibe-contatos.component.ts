import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../adiciona-contato/agenda.service';
import { Contato } from '../adiciona-contato/contato';

@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrl: './exibe-contatos.component.css'
})
export class ExibeContatosComponent implements OnInit {
  agenda: any; 
  contatos: Contato[] = []; 
  constructor(private agendaService: AgendaService){
  }
  
  ngOnInit(): void{
    this.contatos = this.agendaService.obterTodos()
  }
  }
  