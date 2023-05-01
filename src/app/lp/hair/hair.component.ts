import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.scss']
})
export class HairComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navFixed: boolean = false;
  private scrollOffset: number = 70;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }


  classCommonForm = false;

  public toggleField() {
    // this.classToggled = !this.classToggled;  
     this.classCommonForm = true;  
  }
  public hidemodale(){
    this.classCommonForm = false;  
  }

}
