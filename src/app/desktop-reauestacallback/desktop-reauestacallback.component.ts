
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';
declare var $:any;

@Component({
  selector: 'app-desktop-reauestacallback',
  templateUrl: './desktop-reauestacallback.component.html',
  styleUrls: ['./desktop-reauestacallback.component.scss']
})
export class DesktopReauestacallbackComponent implements OnInit {
  hide: any;
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
  errors: any;

  constructor( private router:Router,private serviceapi : serviceapi,private formBuilder: FormBuilder,private httpclient: HttpClient) { }


  ngOnInit(): void {
    this.captchagoole();
    this.referer = document.referrer;
    this.source = window.location.href;
    this.reqcallform = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      phone: ['', [Validators.required,Validators.pattern('^[0-9]{10,10}$'),Validators.minLength(10), Validators.maxLength(10)]],
      captcha: ['', [Validators.required,Validators.pattern(/^[A-Z0-9]+$/)]],
      message: [''],
      // termcondition: ['', Validators.required],
      uncode: ['', Validators.required],
      source: [''],
      referer: [''],
  });
/* // End of onsubmit click */
    this.reqcallform.controls['source'].setValue(this.source);
    this.reqcallform.controls['referer'].setValue(this.referer);
  }

  // validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(field => {
  //     this.errors = "Please fill all mandatory fields";
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     }
  //   });
  // }
  // status: boolean = true;
  // clickEvent() {
  //   this.status = !this.status;
  // }

  get name(){
    return this.reqcallform.get('name')!;
  }

  get phone(){
    return this.reqcallform.get('phone')!;
  }

  get captchaval(){
    return this.reqcallform.get('captcha')!;
  }

  // get f() {
  //   console.log(this.reqcallform,'value');
  //    return this.reqcallform.controls;
  //   }

/* Start of onsubmit click */
  onSubmit(){
  // console.log(this.appointmentForm.value);
  this.submitted = true;

    if (this.reqcallform.invalid) {
        return
    }
    this.loader = true;
    const formData: FormData = new FormData();
      formData.append('name', this.reqcallform.value.name);
      formData.append('mobile', this.reqcallform.value.phone);
      formData.append('message', this.reqcallform.value.message);
      formData.append('captcha', this.reqcallform.value.captcha);
      formData.append('uncode', this.reqcallform.value.uncode);
      formData.append('source', this.reqcallform.value.source);
      formData.append('referer', this.reqcallform.value.referer);
    this.httpclient.post( this.backendUrl+'callback', this.reqcallform.value).subscribe(res =>{
      // this.router.navigate(['/thank-you']);
     window.location.href='https://www.citrineclinic.com/thankyou';
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

  status: boolean = false;
  clickEvent() {
    this.status=true;
    this.closeBox=true;
    this.positionclass=true;
  }

  closeBox: boolean = false;
  close() {
    this.closeBox=false;
    this.status=false;
    this.positionclass=false;
  }
  positionclass : boolean = false;

  addclass(){
    // this.positionclass=true;
  }

  requstshow(){
    this.positionclass = true;
  }
  closepannel:boolean=true;
  closerequestform(){
    this.positionclass = false;
    this.closepannel = false;
  }


  // add class on footer
  // isFooter: boolean | undefined;
  // topPosToStartShowing = 500;

  // @HostListener('window:scroll')
  // checkScroll() {
  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //   if (scrollPosition >= this.topPosToStartShowing) {
  //     this.isFooter = true;
  //   } else {
  //     this.isFooter = false;
  //   }
  // }
  // gotoTopofblackfooter(){}







}

