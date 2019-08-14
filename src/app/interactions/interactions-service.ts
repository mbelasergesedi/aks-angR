import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Interaction } from './interactions.component';

@Injectable({
    providedIn: 'root'
  })

  export class CustomerService {
    private dbPath = '/interactions';
    customersRef: AngularFireList<Interaction> = null;

    constructor(private db: AngularFireDatabase) {
      this.customersRef = db.list(this.dbPath);

    }
}

