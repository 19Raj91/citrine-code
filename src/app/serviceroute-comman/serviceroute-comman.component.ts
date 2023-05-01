import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { serviceapi } from '../api/service-api';


@Component({
  selector: 'app-serviceroute-comman',
  templateUrl: './serviceroute-comman.component.html',
  styleUrls: ['./serviceroute-comman.component.scss']
})
export class ServicerouteCommanComponent  {
  backendUrl = environment.backendbaseUrl;

  category = false;
  service_inner = false;
  service: any;
  name: string | undefined;

  // @Output() name = new EventEmitter();

  constructor(private serviceapi : serviceapi, private route:ActivatedRoute,private router:Router) {

    this.category = false;
    this.service_inner = false;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // console.log(event,"eventtt")
        this.name = event.url;
        // this._activatedRoute.snapshot is up to date
      }
    });

    // Data:  { title: 'Company' }
  this.route.data.subscribe(data => console.log(data));
    this.route.paramMap.subscribe(params => {
      this.serviceallfetch(params.get('name'));
    });

   }



  serviceallfetch(val: string | null){
    // console.log(val, "from route");

      this.serviceapi.serviceall(val).subscribe(
        data=>{

          // console.log(data.title,'title')

        this.service = data.type;

        // console.log(this.name,"url")
  if(this.service == 'secondcategory'){
    this.category = true;
    this.service_inner = false;
  }else if(this.service == 'service'){
    this.service_inner = true;
    this.category = false;
  }else if(this.service)
  {
    this.router.navigate(this.service);
  }else if(this.service==''){
    this.router.navigate(['/404'], { replaceUrl: true })
  }




}

      )


  }

}
