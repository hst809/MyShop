import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase, AngularFireList, QueryFn } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) {

   }

   getAll(){
    return this.db.list('/categories',
    item=>item.orderByChild('name')
    ).snapshotChanges();
   }
}
