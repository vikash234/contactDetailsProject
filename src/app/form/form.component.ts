import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 
  contactInfoForm:FormGroup;
  status: any;
  spresp: any;
 
  user: any;
  constructor(private formBuilder: FormBuilder,private dataservice:DataserviceService,private router: Router) {
    this.user=JSON.parse(localStorage.getItem("userData"));
    // console.log("user",this.userData);
    
  }
  ngOnInit(){
    if(this.user!=null){
    this.contactInfoForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      contactNbr: [this.user.contactNbr, [Validators.required]],
      email: [this.user.email, [Validators.required]],
      dob: [this.user.dob, [Validators.required]],
      status:[this.user.status, [Validators.required]],
    }); 
  }
  else{
  this.contactInfoForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    contactNbr: ['', [Validators.required]],
    email: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    status:['', [Validators.required]],
  }); 
}
}
get formControl() { return this.contactInfoForm.controls; }

onSubmit(){
  console.log("form",this.contactInfoForm.value);
  localStorage.clear();
  this.dataservice.updateContactDetails(this.contactInfoForm.value);
  this.router.navigate(['/view'])
}


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
 
