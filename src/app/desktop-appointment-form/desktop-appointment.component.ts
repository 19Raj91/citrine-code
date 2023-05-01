import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';

@Component({
  selector: 'app-desktop-appointment',
  templateUrl: './desktop-appointment.component.html',
  styleUrls: ['./desktop-appointment.component.scss']
})
export class DesktopAppointmentComponent implements OnInit {
  backendUrl = environment.backendbaseUrl;
  /* Start of loader */
    loader:boolean = false;
    captcha: any;
    appointmentForm!: FormGroup;
    submitted: boolean = false;
    success:any;
    source: any;
    referer: any;
    url_name: any;
    listseo: any;
    canonicaltag: any;
    captchavalid:any;

currentDate:any = new Date();

  constructor(private serviceapi : serviceapi, private router:Router,private formBuilder: FormBuilder,private route:ActivatedRoute,private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.captchagoole();
    this.appointmentForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      phone: ['', [ Validators.required,Validators.pattern('^[0-9]{10,10}$'),Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      date: ['', Validators.required],
      captcha: ['', [Validators.required,Validators.pattern(/^[A-Z0-9]+$/)]],
      // termcondition: ['', Validators.required],
      uncode: ['', Validators.required],
      source: [''],
      referer: [''],
      message: [''],
    });
    this.appointmentForm.controls['source'].setValue(this.source);
    this.appointmentForm.controls['referer'].setValue(this.referer);
  }

  get name(){
    return this.appointmentForm.get('name')!;
  }

  get email(){
    return this.appointmentForm.get('email')!;
  }

  get phone(){
    return this.appointmentForm.get('phone')!;
  }

  get captchaval(){
    return this.appointmentForm.get('captcha')!;
  }

  get date(){
    return this.appointmentForm.get('date')!;
  }

  onSubmit(){
    // console.log(this.appointmentForm.value);
    this.submitted = true;

      if (this.appointmentForm.invalid) {
          return
      }
      this.loader = true;
      this.httpclient.post( this.backendUrl+'appointment', this.appointmentForm.value).subscribe(res =>{
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
        this.appointmentForm.controls['uncode'].setValue(data.uniqid);
        // this.uncode = data.uniqid;
        // console.log(this.captcha);
      }
    )
  }
}
