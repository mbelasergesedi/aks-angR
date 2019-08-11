import { Component, OnInit, Injectable } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { map } from 'rxjs/operators';

import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
//import {Component, Injectable} from '@angular/core';
import {BehaviorSubject, merge, Observable} from 'rxjs';
//import {map} from 'rxjs/operators';

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
              public isLoading = false) {}
}


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
