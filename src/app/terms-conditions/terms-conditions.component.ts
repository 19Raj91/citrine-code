import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {
  image1="assets/images/contact-us.jpg";
  defaultImage = "assets/images/service/default-image.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
