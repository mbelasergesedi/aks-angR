import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-interaction-list',
  templateUrl: './interaction-list.component.html',
  styleUrls: ['./interaction-list.component.css']
})
export class InteractionListComponent implements OnInit {

  interaction: any;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.getInteractionList();
  }

  getInteractionList() {
    this.interactionService.getInteractionList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(interaction => {
      this.interaction = interaction;
      console.log(interaction);
    });
  }

  deleteInteraction() {
    this.interactionService.deleteAll().catch(err => console.log(err));
  }

}
