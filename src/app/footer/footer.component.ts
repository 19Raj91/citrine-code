import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  imagefooterlogo="assets/images/logo.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
