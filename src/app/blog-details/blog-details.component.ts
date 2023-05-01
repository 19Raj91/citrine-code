import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';
import { Title,Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  servelUrl = environment.baseUrl;
  backendUrl = environment.backendbaseUrl;
  backendimageUrl = environment.backendimageUrl;
  bgimageurl = this.backendimageUrl + 'backend/blog/';

  image1="assets/images/contact-us.jpg";
  defaultImage = "assets/images/service/default-image.jpg";
  currentDate:any = new Date();
  blogname: any;
  blog: any;
  listseo: any;
  recent: any;
  success:any;
  source: any;
  referer: any;
  url_name: any;

  captchavalid:any;

  constructor(private formBuilder: FormBuilder,private httpclient: HttpClient,private serviceapi : serviceapi, private route:ActivatedRoute,private router:Router,private meta: Meta,private title: Title,@Inject(DOCUMENT) private dom:any) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let id = params.get('name');
      this.blogname = id;
      this.blogdetails();
    });
  }

  blogdetails(){
    this.serviceapi.blogdetail(this.blogname).subscribe(
      data=>{
        this.blog = data.data;
        this.recent = data.recent;
        this.listseo = data.seo;
        this.title.setTitle(this.listseo.title_tag);
        this.meta.updateTag({ name: 'description', content: this.listseo.description_tag });
        this.meta.updateTag({ name: 'keywords', content: this.listseo.keyword_tag });
        this.meta.updateTag({property: 'og:title', content: this.listseo.title_tag});
        this.updateCanonicalUrl(this.servelUrl + this.router.url+'/');

        this.meta.updateTag({property: 'og:image', content: ''});
        this.meta.updateTag({property: 'og:url', content: this.servelUrl + this.router.url});
        this.meta.updateTag({property: 'og:site_name', content: 'Citrine Clinic'});
        this.meta.updateTag({property: 'og:type', content: 'Website'});
        this.meta.updateTag({property: 'og:description', content: this.listseo.description_tag});

        this.meta.updateTag({property: 'twitter:card', content: ''});
        this.meta.updateTag({property: 'twitter:title', content: this.listseo.title_tag});
        this.meta.updateTag({property: 'twitter:image', content: ''});
        this.meta.updateTag({property: 'twitter:site', content: 'Citrine Clinic'});
        this.meta.updateTag({property: 'twitter:description', content: this.listseo.description_tag});
      },
      (error) => {
        this.router.navigate(['/404'], { replaceUrl: true })
      }
    )
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

}
