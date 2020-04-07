import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  

  ContactDetails=[
    {
        "firstName": "Ankit",
        "lastName": "Kumar",
        "contactNbr": "780316345",
        "email": "ankit45@gmail.com",
        "dob": "15-08-1995",
        "status": "Active"
    },
    {
        "firstName": "Tiya",
        "lastName": "Kumari",
        "contactNbr": "680316345",
        "email": "tiyaku23@gmail.com",
        "dob": "01-12-1990",
        "status": "Active"
    }
]
  constructor(private http: HttpClient) { }
  getContactDetails() {
    return this.ContactDetails;
  }

  updateContactDetails(data) {

    return this.ContactDetails.push((data))
  }
deleteData(i){
  for(var j=0;j<=this.ContactDetails.length;j++){
    if(i.email===this.ContactDetails[j].email){
      this.ContactDetails.splice(j,1);
    }
  }


}

}
