import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {
  ContactDetails: any;

  constructor(private dataservice:DataserviceService) {
this.dataservice.getContactDetails().subscribe(data => {
  this.ContactDetails = data;
  console.log("contact",data);
  
});
   }

  ngOnInit() {
  }

}
