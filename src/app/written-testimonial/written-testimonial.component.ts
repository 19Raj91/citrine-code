import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Title,Meta } from '@angular/platform-browser';
import { serviceapi } from '../api/service-api';
import { DOCUMENT } from '@angular/common';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-written-testimonial',
  templateUrl: './written-testimonial.component.html',
  styleUrls: ['./written-testimonial.component.scss']
})
export class WrittenTestimonialComponent implements OnInit {
// pagination
posts:any;
  p: number = 1;
// pagination


  servelUrl = environment.baseUrl;
  backendUrl = environment.backendbaseUrl;
  image1="assets/images/written-testimonial.jpg";
  defaultImage = "assets/images/service/default-image.jpg";
  testimonial: any;
  listseo: any;
  name: any;
  constructor(private service:PostService , private serviceapi : serviceapi, private route:ActivatedRoute,private router:Router, private meta: Meta,private title: Title, @Inject(DOCUMENT) private dom:any) { }

  ngOnInit(): void {
    this.serviceapi.testimonials().subscribe(
      data =>{
        this.testimonial = data.data;
        // console.log(this.testimonial);
      }
    )

    this.route.paramMap.subscribe(params => {
      let id = params.get('name');
      this.name = id;
      // this.getdoctordetail();
    });

    this.getseolist();

    //pagination
    this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
    //pagination
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

/* For ng for use optimization */
// trackByFn(index, item) {
//   return index;
// }

}
