import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit{

  constructor(private service: DataserviceService) {
    
  }
  ngOnInit(){ 
  // var newUserImage=this.service.sampleData()["cover-image"];
  // document.body.style.backgroundImage="url(" + newUserImage + ")";
 // document.body.style.backgroundColor="#424242";

}
}
