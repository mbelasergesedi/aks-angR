import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class Interaction {
  key: string;
  titre: string;
  conseq: string;
  emploi: string;
  emploiDesc: string;
  sousTitre: string;
  active = true;
}