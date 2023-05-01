import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-choose-doctor',
  templateUrl: './about-choose-doctor.component.html',
  styleUrls: ['./about-choose-doctor.component.scss']
})
export class AboutChooseDoctorComponent implements OnInit {
  image1="assets/images/choose-dr.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
