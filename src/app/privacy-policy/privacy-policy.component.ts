import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  image1="assets/images/contact-us.jpg";
  defaultImage = "assets/images/service/default-image.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
