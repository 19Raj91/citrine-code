import { Component, OnDestroy, Inject, OnInit, VERSION } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';
import { Title,Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
// import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  // name = 'Angular ' + VERSION.major;
  name : any;
  servelUrl = environment.baseUrl;
  // image1="assets/images/home-web-banner.webp";
  image2="assets/images/homeclnic.webp";
  image3="assets/images/home-doctor-bg.webp";
  image4="assets/images/nsoi.webp";
  image5="assets/images/CDSI.webp";
  image6="assets/images/ISD.webp";
  image7="assets/images/IADVL.webp";
  image8="assets/images/home-dermafiller.webp";
  image9="assets/images/lasertoning.webp";
  image10="assets/images/acne-scar.webp";
  image11="assets/images/laser-hair.webp";
  image12="assets/images/growthfactor.webp";
  image13="assets/images/combind-logo.webp";
  image14="assets/images/medical-dermat.webp";
  image15="assets/images/hydrafacial.webp";

  // imagehide: string;

  imagedisplay: boolean = true;
  listseo: any;
  clickEvent() {
    // this.imagedisplay = !this.imagedisplay;
  }

  constructor( private _designUtility:DesignUtilityService, private serviceapi : serviceapi, private route:ActivatedRoute,private router:Router, private meta: Meta,private title: Title,@Inject(DOCUMENT) private dom:any) {
    this.imagedisplay = false;
    setTimeout(() => {
    //  this.imagedisplay = "changed";
     this.imagedisplay = true;
    }, 3000);
  }

  ngOnInit(): void {
    this._designUtility.fix_navbar_header.next(true);
    this.serviceapi.home().subscribe(
      data => {
        this.listseo = data.seo;
        // this.result = data.data.result;
        // this.testimonial = data.data.testimonial;

        this.title.setTitle(this.listseo?.title_tag);
        this.meta.updateTag({ name: 'description', content: this.listseo?.description_tag });
        this.meta.updateTag({ name: 'keywords', content: this.listseo?.keyword_tag });
        this.meta.updateTag({ property: 'og:title', content: this.listseo?.title_tag });
        this.updateCanonicalUrl(this.servelUrl);

        this.meta.updateTag({ property: 'og:image', content: '' });
        this.meta.updateTag({ property: 'og:url', content: this.servelUrl });
        this.meta.updateTag({ property: 'og:site_name', content: 'Citrine Clinic' });
        this.meta.updateTag({ property: 'og:type', content: 'Website' });
        this.meta.updateTag({ property: 'og:description', content: this.listseo?.description_tag });

        this.meta.updateTag({ property: 'twitter:card', content: '' });
        this.meta.updateTag({ property: 'twitter:title', content: this.listseo?.title_tag });
        this.meta.updateTag({ property: 'twitter:image', content: '' });
        this.meta.updateTag({ property: 'twitter:site', content: 'Citrine Clinic' });
        this.meta.updateTag({ property: 'twitter:description', content: this.listseo?.description_tag });

      }
    )
  }


  updateCanonicalUrl(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    element.setAttribute('href', url)
  }

  ngOnDestroy(): void {
    this._designUtility.fix_navbar_header.next(false);
  }

  isChecked: boolean = true;
}
