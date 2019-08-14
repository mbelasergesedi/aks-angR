import { Component, OnInit, Injectable, ɵisObservable } from '@angular/core';

import { HomeService } from './home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';

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
  navName = 'Poke';

  public loggedname = 'Mbela Sedi Serge';
  public myId = 'testID';
  myResponse;
  myObj;
  dbParam;
  ngOnInit() {
    this.homeService.getNews().subscribe((data) => {
      this.myResponse = data;

    });
  }
  onClickSubmit(formData) {
    alert('Your Email is : ' + formData.code);
  }
  greetUser() {
    return 'Bienvenue ' + this.loggedname;
  }

}

export class MyCode {
  constructor(
    public code: string,
    public subscriber: string) { }
}



