
import { Component, OnInit, ViewChild } from '@angular/core';
import { InteractionService } from '../interactions.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import {NestedTreeControl} from '@angular/cdk/tree';
//import {animate, state, style, transition, trigger} from '@angular/animations';

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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  
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
      this.displayedColumns = ['titre'];
      this.dataSource = new MatTableDataSource(interactions); 
      console.log (interactions);
    });
  }
  
  displayedColumns: string[] = ['titre'];
  columnsToDisplay = ['titre'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: PeriodicElement | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
}
  

export interface PeriodicElement {
  titre: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {  
    titre: 'Chargement .....'
  }, 
];