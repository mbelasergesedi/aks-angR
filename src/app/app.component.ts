import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valide = 'Aksantimed.'
  //title = 'internet-connection-check';
  status = 'ONLINE'; //initializing as online by default
  isConnected = true;
  constructor(private connectionService:ConnectionService){
    this.connectionService.monitor().subscribe(isConnected => {
    this.isConnected = isConnected;
    if(this.isConnected){
    this.status = "ONLINE";
    } else {
    this.status = "OFFLINE"
    }
    alert(this.status);
    });
    }
    ngOnInit(){
     
    }
 
}


export class FormFieldHintExample {}
