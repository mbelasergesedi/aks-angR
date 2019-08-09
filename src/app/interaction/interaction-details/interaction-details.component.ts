import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Interaction } from '../interaction';

@Component({
  selector: 'app-interaction-details',
  templateUrl: './interaction-details.component.html',
  styleUrls: ['./interaction-details.component.css']
})
export class InteractionDetailsComponent implements OnInit {

  @Input() interaction: Interaction;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.interactionService
      .updateInteraction(this.interaction.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteInteraction() {
    this.interactionService
      .deleteInteraction(this.interaction.key)
      .catch(err => console.log(err));
  }

}
