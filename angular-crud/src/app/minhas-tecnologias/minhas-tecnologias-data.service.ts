import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MinhasTecnologias } from './minhas-tecnologias';

@Injectable({
  providedIn: 'root'
})
export class MinhasTecnologiasDataService {

  private minhasTecnologiasSource = new BehaviorSubject({ minhasTecnologias: null, key: '' });
  currentMinhasTecnologias = this.minhasTecnologiasSource.asObservable();
  
  constructor() { }

  changeMinhasTecnologias(minhasTecnologias: MinhasTecnologias, key: string){
    this.minhasTecnologiasSource.next({ minhasTecnologias: minhasTecnologias, key: key });
  }
}
