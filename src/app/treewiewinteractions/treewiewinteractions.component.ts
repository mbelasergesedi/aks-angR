import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treewiewinteractions',
  templateUrl: './treewiewinteractions.component.html',
  styleUrls: ['./treewiewinteractions.component.css']
})

export class Interaction {
  key: string;
  titre: string;
  conseq: string;
  emploi: string;
  emploiDesc: string;
  sousTitre: string;
  active = true;
}
export class TreewiewinteractionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
