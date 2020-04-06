import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactFormControl = new FormControl('', [
    //Validators.required,
  ]);

  constructor() { }

  

  ngOnInit() {

  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
}
