import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-home-dr',
  templateUrl: './mobile-home-dr.component.html',
  styleUrls: ['./mobile-home-dr.component.scss']
})
export class MobileHomeDrComponent implements OnInit {
  image1="assets/images/aboutpage-doctor-bg.webp";
  defaultImage = "assets/images/service/default-image.jpg";
  image3 = "assets/images/home-doctor-bg.webp";
  image4 = "assets/images/nsoi.webp";
  image5 = "assets/images/CDSI.webp";
  image6 = "assets/images/ISD.webp";
  image7 = "assets/images/IADVL.webp";

  constructor() { }

  ngOnInit(): void {
  }

}
