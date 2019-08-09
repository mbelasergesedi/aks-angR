import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Interaction } from '../interaction';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-create-interaction',
  templateUrl: './create-interaction.component.html',
  styleUrls: ['./create-interaction.component.css']
})
export class CreateInteractionComponent implements OnInit {

  interaction: Interaction = new Interaction();
  submitted = false;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
  }

  newInteraction(): void {
    this.submitted = false;
    this.interaction = new Interaction();
  }

  save() {
    this.interactionService.createInteraction(this.interaction);
    this.interaction = new Interaction();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
