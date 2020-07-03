import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { map } from 'rxjs/operators'; 
import { MinhasTecnologias } from './minhas-tecnologias';
import { analytics } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class MinhasTecnologiasService {

  constructor(private db: AngularFireDatabase) { }

  insert(minhasTecnologias: MinhasTecnologias){
    this.db.list('minhasTecnologias').push(minhasTecnologias)
    .then((result: any) => {
      console.log(result.key);
      
    });
  }

  update(minhasTecnologias: MinhasTecnologias, key: string){
    this.db.list('minhasTecnologias').update(key, minhasTecnologias)
    .catch((error: any) => {
      console.error(error);
    });
  }

  getAll(){
    return this.db.list('minhasTecnologias')
    .snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
      })
    );
  }

  delete(key: string){
    this.db.object(`minhasTecnologias/${key}`).remove();
  }
}
