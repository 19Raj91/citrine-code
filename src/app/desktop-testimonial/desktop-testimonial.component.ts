import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { serviceapi } from '../api/service-api';

@Component({
  selector: 'app-desktop-testimonial',
  templateUrl: './desktop-testimonial.component.html',
  styleUrls: ['./desktop-testimonial.component.scss']
})
export class DesktopTestimonialComponent implements OnInit {
  testimonials: any;
  defaultImage = 'assets/images/defaultImage.jpg';
  image55 ='assets/images/practo.png';
  image1016 ='assets/images/google.jpg';
  image1017 ='assets/images/lybrate.jpg';
  image1018 ='assets/images/justdial.jpg';

  constructor(private serviceapi : serviceapi, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.serviceapi.homeTesti().subscribe(
      data =>{
        this.testimonials = data.testimonial;
      }
    )
  }

  // trackByFn(index, item) {
  //   return index;
  // }

}
