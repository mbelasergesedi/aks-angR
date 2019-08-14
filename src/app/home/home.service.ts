import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HomeService {

    constructor(private httpClient: HttpClient) { }
    public getNews() {

        return this.httpClient.get('https://www.aksantimed.com/sms/remotepharma.cfc?method=choosepharma&medcode=111111');

    }
}
