import { Component, OnInit, Injectable, ɵisObservable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeService } from './home.service';

//import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: '/home.component.html',
  styleUrls: ['/home.component.css']
})

export class HomeComponent implements OnInit {


  constructor(private homeService: HomeService) { }
  navName: String = 'Poke'

  public loggedname = "Mbela Sedi Serge";
  public myId = "testID";
  myResponse;
  myObj;
  dbParam;
  ngOnInit() {

    this.homeService.getNews().subscribe((data)=>{
  
      console.log(data);
      this.myResponse =data ; 
     // this.articles = data['articles'];
    });


  }

  greetUser() {
    return "Bienvenue " + this.loggedname;
  }

}

class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) { }
}



