import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';
import { Title,Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  servelUrl = environment.baseUrl;
  backendUrl = environment.backendbaseUrl;
  backendimageUrl = environment.backendimageUrl;
  bgimageurl = this.backendimageUrl + 'backend/blog/';
  image1="assets/images/blog-banner.jpg";
  defaultImage = "assets/images/service/default-image.jpg";
  currentDate:any = new Date();
  listseo: any;
  blogs: any;
  blogname: any;// previously it was name

  p: number = 1;
  success:any;
  source: any;
  referer: any;
  url_name: any;

  canonicaltag: any;
  captchavalid:any;
  constructor(private formBuilder: FormBuilder,private httpclient: HttpClient,private serviceapi : serviceapi, private route:ActivatedRoute,private router:Router,private meta: Meta,private title: Title,@Inject(DOCUMENT) private dom:any) { }

  ngOnInit(): void {
    this.serviceapi.blog().subscribe(
      data =>{
        this.blogs = data.data;
      }
    )

    this.route.paramMap.subscribe(params => {
      let id = params.get('name');
      this.blogname = id;
      // this.getdoctordetail();
    });

    this.getseolist();
  }
  getseolist(){
    this.serviceapi.seo(this.router.url).subscribe(
      data=>{
        this.listseo = data.seo;
        // this.canonicaltag = data.data.canonical;

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


}
