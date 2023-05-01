import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-tech-section',
  templateUrl: './desktop-tech-section.component.html',
  styleUrls: ['./desktop-tech-section.component.scss']
})
export class DesktopTechSectionComponent implements OnInit {
  image1="assets/images/clinic/cl-1.jpg";
  image2="assets/images/Technology/Alma-Harmony-XL-pro.webp";
  image3="assets/images/Technology/Ultracel-Q-Plus.webp";
  image4="assets/images/Technology/Primelase-HR.webp";
  image5="assets/images/Technology/secret-advance-antiaging-rfc-machine.webp";
  defaultImage = "assets/images/service/default-image.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
