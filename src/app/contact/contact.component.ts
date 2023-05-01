import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  backendUrl = environment.backendbaseUrl;
  loader:boolean = false;
  captcha: any;
  callback: any;
  submitted: boolean = false;
  referer: any;
  source: any;
  captchavalid: any;
  contactForm!: FormGroup;
  image1="assets/images/contact.jpg";
  defaultImage = "assets/images/service/default-image.jpg";
  listseo: any;
  canonicaltag: any;
  servelUrl = environment.baseUrl;
  url_name: any;

  constructor(private router:Router,private serviceapi : serviceapi,private formBuilder: FormBuilder,private httpclient: HttpClient,private route:ActivatedRoute,private meta: Meta,private title: Title,@Inject(DOCUMENT) private dom:any){
  }

  ngOnInit(): void {
    this.captchagoole();
    this.referer = document.referrer;
    this.source = window.location.href;
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      phone: ['', [ Validators.required,Validators.pattern('^[0-9]{10,10}$'),Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      captcha: ['', [Validators.required,Validators.pattern(/^[A-Z0-9]+$/)]],
      message: [''],
      // termcondition: ['', Validators.required],
      uncode: ['', Validators.required],
      source: [''],
      referer: [''],
  });
/* // End of onsubmit click */
    this.contactForm.controls['source'].setValue(this.source);
    this.contactForm.controls['referer'].setValue(this.referer);
    this.route.paramMap.subscribe(params => {
      let id = params.get('name');
      this.url_name = id;
      // this.getdoctordetail();
    });

    this.getseolist();
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
    return this.contactForm.get('name')!;
  }

  get email(){
    return this.contactForm.get('email')!;
  }

  get phone(){
    return this.contactForm.get('phone')!;
  }

  get captchaval(){
    return this.contactForm.get('captcha')!;
  }

  captchagoole(){
    this.serviceapi.googlecaptcha().subscribe(
      data =>{
        this.captcha = data;
        this.contactForm.controls['uncode'].setValue(data.uniqid);
        // this.uncode = data.uniqid;
        // console.log(this.captcha);
      }
    )
  }

  onSubmit(){
    // console.log(this.contactForm.value);
    this.submitted = true;
      if (this.contactForm.invalid) {
          return
      }
      this.loader = true;
      this.httpclient.post( this.backendUrl+'contacts', this.contactForm.value).subscribe(res =>{
        this.router.navigate(['/thankyou']);

        },(err) => {
          // $("#captchavalid").html("Please Enter Valid Captcha");
           this.loader = false;
        });
/* // End of onsubmit click */
  }

}
