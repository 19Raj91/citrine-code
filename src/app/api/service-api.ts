import{ Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class serviceapi{
   backendUrl = environment.backendbaseUrl;

    constructor(private httpclient: HttpClient){}

    home():Observable<any>{
      return this.httpclient.get( this.backendUrl + "home-details");
    }

    homeCase():Observable<any>{
      return this.httpclient.get( this.backendUrl + "home-case");
    }

    homeTesti():Observable<any>{
      return this.httpclient.get( this.backendUrl + "home-testimonial");
    }

    homevideoTesti():Observable<any>{
      return this.httpclient.get( this.backendUrl + "home-video-testimonial");
    }

    googlecaptcha():Observable<any>{
      return this.httpclient.get( this.backendUrl + "googlecaptcha");
    }

    testimonials(): Observable<any>{
        return this.httpclient.get( this.backendUrl + "testimonials");
    }

    result(): Observable<any>{
      return this.httpclient.get( this.backendUrl + "results");
    }

    resultcategory(name:any): Observable<any>{
      return this.httpclient.get( this.backendUrl + "result-cateory/"+ name);
    }

    resultdetail(name:any): Observable<any>{
      return this.httpclient.get( this.backendUrl + "result-details/"+ name);
    }

    patienttestimonials(): Observable<any>{
        return this.httpclient.get( this.backendUrl + "patienttestimonials");
    }

    gallery(): Observable<any> {
        return this.httpclient.get( this.backendUrl + "gallery");
       }

    videosTestimonial(): Observable<any>{
        return this.httpclient.get( this.backendUrl + "video-testimonial");
    }

    videos(): Observable<any>{
        return this.httpclient.get( this.backendUrl + "videos");
    }

    videocategory(name:any): Observable<any>{
        return this.httpclient.get( this.backendUrl + "video-category/" + name);
    }

    videodetail(name:any): Observable<any>{
        return this.httpclient.get( this.backendUrl + "video-details/" + name);
    }

    service(): Observable<any>{
        return this.httpclient.get( this.backendUrl + "service");
    }

    serviceall(name:any): Observable<any>{
        return this.httpclient.get( this.backendUrl + "service-type/"+name);
    }

    servicecategory(name:any): Observable<any>{
      return this.httpclient.get( this.backendUrl + "service-category"+name);
    }

    servicedetail(name:any): Observable<any>{
        return this.httpclient.get( this.backendUrl + "service-details" + name);
    }

    servicefaq(name:any): Observable<any>{
        return this.httpclient.get( this.backendUrl + "service-faq/" + name);
    }

    blog(): Observable<any>{
        return this.httpclient.get( this.backendUrl + "blog");
    }

    blogdetail(name:any): Observable<any>{
        return this.httpclient.get( this.backendUrl + "blog-detail/" + name);
    }

    case(): Observable<any>{
      return this.httpclient.get( this.backendUrl + "case");
  }

  casedetail(name:any): Observable<any>{
      return this.httpclient.get( this.backendUrl + "case-detail/" + name);
  }

    blogpost(): Observable<any>{
        return this.httpclient.get( this.backendUrl + "blog-post");
    }

    seo(name:any): Observable<any>{
        return this.httpclient.get( this.backendUrl + "seo-tag" + name);
    }

    fetch(name:any):Observable<any>{
      return this.httpclient.get( this.backendUrl + "fetch/" + name);
    }




}
