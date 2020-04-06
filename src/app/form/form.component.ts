import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 
  contactInfoForm:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
  }
  ngOnInit(){
  this.contactInfoForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    contactNbr: ['', [Validators.required]],
    email: ['', [Validators.required]],
    dob: ['', [Validators.required]],
  }); 
}
get formControl() { return this.contactInfoForm.controls; }
}



// saveBtn(saveevent) {
//   this.submitted = true;

//   if (this.dealerInfoForm.invalid) {
//     return;
//   }

//   const deliveryDate = new Date(this.dealerInfoForm.value.retDeliveryDate);
//   const deliveryDateFormat = deliveryDate.getFullYear()+'-' + (("0" + (deliveryDate.getMonth() + 1)).slice(-2)) + '-'+deliveryDate.getDate();
//   this.dealerInfoForm.value.retDeliveryDate = deliveryDateFormat;
//   this.dealerInfoForm.value.pin = JSON.parse(localStorage.getItem('pinAuth')).BuyerInfo.pin;
//   this.dealerInfoForm.value.certType = JSON.parse(localStorage.getItem('pinAuth')).BuyerInfo.certificate_type;
 
