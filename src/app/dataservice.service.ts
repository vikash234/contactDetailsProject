import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  contactDetails = "../assets/data.json"

  constructor(private http: HttpClient) { }
  getContactDetails() {
    return this.http.get<any>(this.contactDetails)
  }

}
