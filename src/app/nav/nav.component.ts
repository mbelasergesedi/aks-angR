import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
 
export class NavComponent implements OnInit {
  navName:String = ' Angular'

  public loggedname ="Mbela Sedi Serge";
  public myId = "testID";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
       return "Bienvenue " +  this.loggedname;
  }

}
