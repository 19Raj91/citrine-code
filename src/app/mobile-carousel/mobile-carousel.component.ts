import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-carousel',
  templateUrl: './mobile-carousel.component.html',
  styleUrls: ['./mobile-carousel.component.scss']
})
export class MobileCarouselComponent implements OnInit {

  image1="assets/images/mobile-dermafiller.jpg";
  image2="assets/images/mobile-laser-hair.jpg";
  image3="assets/images/mobile-laser-toning.jpg";
  image4="assets/images/mobile-growth-factor-concerntrate-.jpg";
  image5="assets/images/mobile-laser-hair-reduction.jpg";
  image6="assets/images/mobile-medical-dermatology-.jpg";
  image7="assets/images/mobileantiwrinkle-injection.jpg";
  image8="assets/images/mobiledark-circle.jpg";
  image9="assets/images/mobilehydrafacial.jpg";
  image10="assets/images/mobilethred-lift.jpg";
  image11="assets/images/mobile-carbon-peel.jpg";
  image12="assets/images/mobile-frekkle.jpg";


  constructor() { }

  ngOnInit(): void {
  }

  isChecked: boolean = true;

}
