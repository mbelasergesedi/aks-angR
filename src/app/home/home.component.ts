import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: '/home.component.html',
  styleUrls: ['/home.component.css']
})

export class HomeComponent implements OnInit {
  navName: String = 'Poke'

  public loggedname = "Mbela Sedi Serge";
  public myId = "testID";

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Bienvenue " + this.loggedname;
  }

}

class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) { }
}



