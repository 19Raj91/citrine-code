import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-home-service',
  templateUrl: './mobile-home-service.component.html',
  styleUrls: ['./mobile-home-service.component.scss']
})
export class MobileHomeServiceComponent implements OnInit {
  image1="assets/images/mobile-dermafiller.jpg";
  image2="assets/images/mobile-laser-hair.jpg";
  image3="assets/images/mobile-laser-toning.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
