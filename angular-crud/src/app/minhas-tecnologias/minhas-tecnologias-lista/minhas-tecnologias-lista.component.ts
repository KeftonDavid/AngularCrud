import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MinhasTecnologiasDataService } from '../minhas-tecnologias-data.service';
import { MinhasTecnologiasService } from '../minhas-tecnologias.service';
import { MinhasTecnologias } from '../minhas-tecnologias';

@Component({
  selector: 'app-minhas-tecnologias-lista',
  templateUrl: './minhas-tecnologias-lista.component.html',
  styleUrls: ['./minhas-tecnologias-lista.component.css']
})
export class MinhasTecnologiasListaComponent implements OnInit {
  
  minhasTecnologias: Observable<any>;

  constructor(
    private minhasTecnologiasService: MinhasTecnologiasService,
    private minhasTecnologiasDataService: MinhasTecnologiasDataService
  ) { }

  ngOnInit(): void {
    this.minhasTecnologias = this.minhasTecnologiasService.getAll();
  }

  delete(key: string){
    this.minhasTecnologiasService.delete(key);
  }

  edit(minhaTecnologia: MinhasTecnologias, key: string){
    this.minhasTecnologiasDataService.changeMinhasTecnologias(minhaTecnologia, key);
  }
}
