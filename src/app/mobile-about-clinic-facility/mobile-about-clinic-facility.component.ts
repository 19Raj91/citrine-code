import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-about-clinic-facility',
  templateUrl: './mobile-about-clinic-facility.component.html',
  styleUrls: ['./mobile-about-clinic-facility.component.scss']
})
export class MobileAboutClinicFacilityComponent implements OnInit {
  image1="assets/images/clinic/cl-1.jpg";
  image2="assets/images/clinic/cl-2.jpg";
  image3="assets/images/clinic/cl-3.jpg";
  image4="assets/images/clinic/cl-6.jpg";
  constructor() { }

  ngOnInit(): void {
  }
}
