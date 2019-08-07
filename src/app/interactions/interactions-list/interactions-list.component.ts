


import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interactions.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-interactions-list',
  templateUrl: './interactions-list.component.html',
  styleUrls: ['./interactions-list.component.css']
})
export class InteractionsListComponent implements OnInit {

  interactions: any;

  constructor(private InteractionService: InteractionService) { }

  ngOnInit() {
    this.getInteractionsList();
    
  }

  getInteractionsList() {
    this.InteractionService.getInteractionsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(interactions => {
      this.interactions = interactions;
      console.log(interactions);
    });
  }
}
  