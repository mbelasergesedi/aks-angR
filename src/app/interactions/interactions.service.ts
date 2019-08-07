import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Interaction } from './interactions.component';

@Injectable({
    providedIn: 'root'
  })

  export class InteractionService {
    private dbPath = '/interactions';
  
    interactionsRef: AngularFireList<Interaction> = null;
  
    constructor(private db: AngularFireDatabase) {
      this.interactionsRef = db.list(this.dbPath);

    }
    getInteractionsList(): AngularFireList<Interaction> {
        return this.interactionsRef;
      }
}

