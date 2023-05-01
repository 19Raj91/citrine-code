import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-category',
  templateUrl: './technology-category.component.html',
  styleUrls: ['./technology-category.component.scss']
})
export class TechnologyCategoryComponent implements OnInit {
  image1="assets/images/tech-banner.jpg";
  image2="assets/images/Technology/Alma-Harmony-XL-pro.webp";
  image3="assets/images/Technology/Ultracel-Q-Plus.webp";
  image4="assets/images/Technology/Primelase-HR.webp";
  image5="assets/images/Technology/secret-advance-antiaging-rfc-machine.webp";
  image6="assets/images/Technology/Dermapen-Use.webp";
  image7="assets/images/Technology/oxygeneo.webp";
  image8="assets/images/Technology/hydrafacial_machine.webp";
  defaultImage = "assets/images/service/default-image.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
