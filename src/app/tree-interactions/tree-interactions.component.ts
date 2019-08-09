import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { InteractionService } from './tree-interactions.service';
import { map } from 'rxjs/operators';
//import { MatTableDataSource } from '@angular/material';


export class Interaction {
  key: string;
  titre: string;
  conseq: string;
  emploi: string;
  emploiDesc: string;
  sousTitre: string;
  active = true;
}

//import { map } from 'rxjs/operators';
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Fruit loops' },
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          { name: 'Broccoli' },
          { name: 'Brussel sprouts' },
        ]
      }, {
        name: 'Orange',
        children: [
          { name: 'Pumpkins' },
          { name: 'Carrots' },
        ]
      },
    ]
  },
];


@Component({
  selector: 'app-tree-interactions',
  templateUrl: './tree-interactions.component.html',
  styleUrls: ['./tree-interactions.component.css']
})


export class TreeInteractionsComponent implements OnInit {
//For static tree
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

//For dynamique tree


  constructor(private InteractionService: InteractionService) {
    this.dataSource.data = TREE_DATA;
  }

  interactions: any;
  ngOnInit() {
    this.InteractionService
  }

  getInteractionsList() {console.log ('toto');
    this.InteractionService.getInteractionsList().snapshotChanges().pipe(
      
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(interactions => {
      this.interactions = interactions;
      
      //this.displayedColumns = ['titre'];
      this.dataSource = new MatTreeNestedDataSource(); 
      
    });
  }

  
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}


