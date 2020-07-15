import { Component, OnInit, Input } from '@angular/core';

import { MinhasTecnologias } from './minhas-tecnologias'; 
import { MinhasTecnologiasService } from './minhas-tecnologias.service';
import { MinhasTecnologiasDataService } from './minhas-tecnologias-data.service';
import { database } from 'firebase';


@Component({
  selector: 'app-minhas-tecnologias',
  templateUrl: './minhas-tecnologias.component.html',
  styleUrls: ['./minhas-tecnologias.component.css']
})
export class MinhasTecnologiasComponent implements OnInit {

  minhasTecnologias: MinhasTecnologias;
  key: string;
  dev: string[] = [
    ''
  ];
  constructor(
    private minhasTecnologiasService: MinhasTecnologiasService,
    private minhasTecnologiasDataService: MinhasTecnologiasDataService
  ) { }

  ngOnInit(): void {
    this.minhasTecnologias = new MinhasTecnologias();
    this.minhasTecnologiasDataService.currentMinhasTecnologias.subscribe(data => {
      if(data.minhasTecnologias && data.key){
        this.minhasTecnologias = new MinhasTecnologias();
        this.minhasTecnologias.nome = data.minhasTecnologias.nome;
        this.minhasTecnologias.descricao = data.minhasTecnologias.descricao;
        this.minhasTecnologias.desenvolvedores = data.minhasTecnologias.desenvolvedores;
        this.minhasTecnologias.dataCriacao = data.minhasTecnologias.dataCriacao;
        this.key = data.key;
      }
    })
  }

  adicionarDev(){
    this.dev.push('');
  }

  removerDev(){
    if(this.dev.length > 1){
      this.dev.pop();
    }
  }

  onSubmit(){
    if (this.key){
      this.minhasTecnologiasService.update(this.minhasTecnologias, this.key);
    }
    else{
      this.minhasTecnologiasService.insert(this.minhasTecnologias);
    }
    this.minhasTecnologias = new MinhasTecnologias();
  }

}
