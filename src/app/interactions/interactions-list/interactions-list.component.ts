
import { Component, OnInit, ViewChild } from '@angular/core';
import { InteractionService } from '../interactions.service';
import { MatPaginator } from '@angular/material/paginator';
import {ListmedComponent} from '../listmed/listmed.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';

// import {animate, state, style, transition, trigger} from '@angular/animations';

import { map } from 'rxjs/operators';



@Component({
  selector: 'app-interactions-list',
  styleUrls: ['./interactions-list.component.css'],
  templateUrl: './interactions-list.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class InteractionsListComponent implements OnInit {
  constructor(private listmedComponent: ListmedComponent, private InteractionServicess: InteractionService) { }

  myResponse: any;

  interactions: any;
  displayedColumns: string[] = ['titre', 'sousTitre'];
  columnsToDisplay = ['titre', 'sousTitre'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: PeriodicElement | null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {
    this.getInteractionsList();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.listmedComponent.Medicaments().subscribe((data) => {
      console.log('data');

    });
  }
  getInteractionsList() {
    this.InteractionServicess.getInteractionsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(interactions => {
      this.interactions = interactions;
      this.displayedColumns = ['titre', 'sousTitre'];
      this.dataSource = new MatTableDataSource(interactions);

    });
  }





  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


export interface PeriodicElement {
  titre: string;
  sousTitre: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    titre: 'Chargement .....',
    sousTitre: 'Chargement .....'
  },
];
