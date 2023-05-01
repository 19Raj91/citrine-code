import { Component, Input, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';
import { Title,Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-services-inner',
  templateUrl: './services-inner.component.html',
  styleUrls: ['./services-inner.component.scss']
})
export class ServicesInnerComponent implements OnInit {
  @Input() item: any;
  servelUrl = environment.baseUrl;
  backendUrl = environment.backendbaseUrl;
  backendimageUrl = environment.backendimageUrl;

  bgimageurl = this.backendimageUrl + 'backend/service/section/';
  bgimageurlBnr = this.backendimageUrl + 'backend/service/banner/';
  realImage = this.backendimageUrl + 'backend/service_result/inner/';

  image1="assets/images/service/services-5.jpg";
  image2="assets/images/service/common-services.jpg";
  defaultImage = "assets/images/service/default-image.jpg";


  name: any;
  service: any;
  section: any;
  faq: any;
  result: any;
  listseo: any;
  cat_url: any;
  cat: any;

  constructor(private serviceapi : serviceapi, private route:ActivatedRoute,private router:Router, private meta: Meta,private title: Title,@Inject(DOCUMENT) private dom:any) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('name');
      this.name = id;
      // console.log(this.name);
      this.servicedetail();
    });
  }

  servicedetail(){
    console.log(this.item);
    this.serviceapi.servicedetail(this.item).subscribe(
      data=>{
        this.service = data.data;
        this.cat = data.cat_name;
        this.cat_url = data.cat_url;
        this.section = data.data.section;
        this.faq = data.faq;
        this.result = data.result;
        this.listseo = data.seo;

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
