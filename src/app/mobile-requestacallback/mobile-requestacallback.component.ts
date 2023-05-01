import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';

@Component({
  selector: 'app-mobile-requestacallback',
  templateUrl: './mobile-requestacallback.component.html',
  styleUrls: ['./mobile-requestacallback.component.scss']
})
export class MobileRequestacallbackComponent implements OnInit {
  backendUrl = environment.backendbaseUrl;
/* Start of loader */
  loader:boolean = false;
  captcha: any;
  callback: any;
  submitted: boolean = false;
  referer: any;
  source: any;
  captchavalid: any;
  reqcallform!: FormGroup;

  constructor(private router:Router,private serviceapi : serviceapi,private formBuilder: FormBuilder,private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.captchagoole();
    this.referer = document.referrer;
    this.source = window.location.href;
    this.reqcallform = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      phone: ['', [ Validators.required,Validators.pattern('^[0-9]{10,10}$'),Validators.minLength(10), Validators.maxLength(10)]],
      captcha: ['', Validators.required],

      // termcondition: ['', Validators.required],
      uncode: ['', Validators.required],
      source: [''],
      referer: [''],
  });
/* // End of onsubmit click */
    this.reqcallform.controls['source'].setValue(this.source);
    this.reqcallform.controls['referer'].setValue(this.referer);
  }

  get name(){
    return this.reqcallform.get('name')!;
  }

  get phone(){
    return this.reqcallform.get('phone')!;
  }

  get captchaval(){
    return this.reqcallform.get('captcha')!;
  }

  // get f() { return this.reqcallform.controls; }

/* Start of onsubmit click */
  onSubmit(){
  console.log(this.reqcallform.value);
  this.submitted = true;

    if (this.reqcallform.invalid) {
        return
    }
    this.loader = true;
    const formData: FormData = new FormData();
      formData.append('name', this.reqcallform.value.name);
      formData.append('phone', this.reqcallform.value.phone);
      formData.append('captcha', this.reqcallform.value.captcha);
      formData.append('uncode', this.reqcallform.value.uncode);
      formData.append('source', this.reqcallform.value.source);
      formData.append('referer', this.reqcallform.value.referer);
    this.httpclient.post( this.backendUrl+'callback', this.reqcallform.value).subscribe(res =>{
       this.router.navigate(['/thankyou']);

      },(err) => {
        this.captchavalid = "Please Enter Valid Captcha";
        this.loader = false;
      });
/* // End of onsubmit click */
}

captchagoole(){
  this.serviceapi.googlecaptcha().subscribe(
    data =>{
      this.captcha = data;
      this.reqcallform.controls['uncode'].setValue(data.uniqid);
      // this.uncode = data.uniqid;
      // console.log(this.captcha);
    }
  )
}

}
