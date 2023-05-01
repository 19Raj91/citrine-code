import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { serviceapi } from '../api/service-api';

@Component({
  selector: 'app-mobile-home-testimonial',
  templateUrl: './mobile-home-testimonial.component.html',
  styleUrls: ['./mobile-home-testimonial.component.scss']
})
export class MobileHomeTestimonialComponent implements OnInit {
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

  isChecked: boolean = true;

}
