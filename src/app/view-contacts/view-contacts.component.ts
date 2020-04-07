import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {
  ContactDetails: any=[];
  nameArray: any;
  stateCtrl = new FormControl();
  filteredVinArray: Observable<String[]>;
  list: { firstName: string; lastName: string; contactNbr: string; email: string; dob: string; status: string; }[];
  search: any;

  constructor(private dataservice: DataserviceService, private router: Router, ) {

    this.getsearch();
    this.ContactDetails = this.dataservice.getContactDetails();
    //console.log(this.ContactDetails[0].firstName);
    this.nameArray = [];
    if (this.ContactDetails != null) {
      for (var i = 0; i < this.ContactDetails.length; i++) {
        console.log(this.ContactDetails[0].firstName);
        this.nameArray.push(this.ContactDetails[i].email);
      }
    }
    console.log(this.nameArray);

  }

  ngOnInit() {
  }
  private _filterStates(value: string): String[] {
    const filterValue = value.toLocaleLowerCase();

    console.log("filtervalue :: " + filterValue)
    return value == "" ? undefined : this.nameArray.filter(state => state.toLocaleLowerCase().includes(filterValue));
  }
  editOnClick(i) {
    console.log("userdata", i);

    localStorage.setItem("userData", JSON.stringify(i));

    this.router.navigate(['/form']);
    this.dataservice.deleteData(i);
  }
  deleteonClick(params){
    this.dataservice.deleteData(params);
    
  }
  getsearch() {
    this.filteredVinArray = this.stateCtrl.valueChanges.pipe(
      startWith(''), map(state => this._filterStates(state)
      ));
  }

  viewDetails(name) {
    this.list = this.dataservice.getContactDetails()
    this.ContactDetails=[];
    for (var i = 0; i < this.list.length; i++) {
      if (name == this.list[i].email) {
        this.ContactDetails.push(this.list[i])
      }
      
    }
  

  }
}
