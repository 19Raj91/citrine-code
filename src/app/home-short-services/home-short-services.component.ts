import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-short-services',
  templateUrl: './home-short-services.component.html',
  styleUrls: ['./home-short-services.component.scss']
})
export class HomeShortServicesComponent implements OnInit {

  image1="assets/images/short-acne-scar.jpg";
  image2="assets/images/short-growth-factor-concerntrate.jpg";
  image3="assets/images/short-medical-dermatology.jpg";
  image4="assets/images/short-hydrafacial.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
