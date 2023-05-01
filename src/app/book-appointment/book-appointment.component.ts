import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  backendUrl = environment.backendbaseUrl;
  servelUrl = environment.baseUrl;
  /* Start of loader */
    loader:boolean = false;
    captcha: any;
    appointmentForm!: FormGroup;
    submitted: boolean = false;
    success:any;
  image1="assets/images/appointment-banner.jpg";
  defaultImage = "assets/images/service/default-image.jpg";
  currentDate:any = new Date();
  source: any;
  referer: any;
  url_name: any;
  listseo: any;
  canonicaltag: any;
  captchavalid:any;
  constructor(private serviceapi : serviceapi, private router:Router,private formBuilder: FormBuilder,private route:ActivatedRoute,private httpclient: HttpClient,private meta: Meta,private title: Title,@Inject(DOCUMENT) private dom:any) { }

  ngOnInit(): void {
    this.captchagoole();
    this.route.paramMap.subscribe(params => {
      let id = params.get('name');
      this.url_name = id;
      // this.getdoctordetail();
    });

    this.getseolist();
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

  getseolist(){
    this.serviceapi.seo(this.router.url).subscribe(
      data=>{
        this.listseo = data.seo;
        this.canonicaltag = data.seo.canonical;

        this.title.setTitle(this.listseo.title_tag);
            this.meta.updateTag({ name: 'description', content: this.listseo.description_tag });
            this.meta.updateTag({ name: 'keywords', content: this.listseo.keyword_tag });
            this.updateCanonicalUrl(this.servelUrl + this.router.url+'/');

            this.meta.updateTag({property: 'og:title', content: this.listseo.title_tag});
            this.meta.updateTag({property: 'og:image', content: ''});
            this.meta.updateTag({property: 'og:url', content: this.servelUrl + this.router.url+'/'});
            this.meta.updateTag({property: 'og:site_name', content: 'Citrine Clinic'});
            this.meta.updateTag({property: 'og:type', content: 'Website'});
            this.meta.updateTag({property: 'og:description', content: this.listseo.description_tag});

            this.meta.updateTag({property: 'twitter:card', content: ''});
            this.meta.updateTag({property: 'twitter:title', content: this.listseo.title_tag});
            this.meta.updateTag({property: 'twitter:image', content: ''});
            this.meta.updateTag({property: 'twitter:site', content: 'Citrine Clinic'});
            this.meta.updateTag({property: 'twitter:description', content: this.listseo.description_tag});

        //console.log(this.listseo);
      }
    );
  }

  updateCanonicalUrl(url:string){
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
    if (element==null) {
      element= this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel','canonical')
    element.setAttribute('href',url)
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
