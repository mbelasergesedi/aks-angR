import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Interaction } from './interaction';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private dbPath = '/interflat';

  interactionRef: AngularFireList<Interaction> = null;

  constructor(private db: AngularFireDatabase) {
    this.interactionRef = db.list(this.dbPath);
  }

  createInteraction(interaction: Interaction): void {
    this.interactionRef.push(interaction);
  }

  updateInteraction(key: string, value: any): Promise<void> {
    return this.interactionRef.update(key, value);
  }

  deleteInteraction(key: string): Promise<void> {
    return this.interactionRef.remove(key);
  }

  getInteractionList(): AngularFireList<Interaction> {
    return this.interactionRef;
  }

  deleteAll(): Promise<void> {
    return this.interactionRef.remove();
  }
}
