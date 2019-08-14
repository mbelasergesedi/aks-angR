import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ListmedComponent {

  constructor(private httpClient: HttpClient) { }
  public Medicaments() {
    return this.httpClient.get('https://www.aksantimed.com/sms/remotepharma.cfc?method=getSuggestions');

  }
}
