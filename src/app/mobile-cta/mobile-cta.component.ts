import { Component, OnInit, HostListener } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-mobile-cta',
  templateUrl: './mobile-cta.component.html',
  styleUrls: ['./mobile-cta.component.scss']
})
export class MobileCtaComponent implements OnInit {

  // imagehide: string;

  imagedisplay: boolean = true;
  clickEvent() {
    // this.imagedisplay = !this.imagedisplay;  
  }

  constructor( private _designUtility:DesignUtilityService) { 
    this.imagedisplay = false;  
    setTimeout(() => {
    //  this.imagedisplay = "changed";
     this.imagedisplay = true;
    }, 4000);
  }

  ngOnInit(): void {
    this._designUtility.fix_navbar_header.next(true);
  }

  ngOnDestroy(): void {
    this._designUtility.fix_navbar_header.next(false);
  }


  isShow: boolean | undefined;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  step: any = 'tab1';
  step1: any;
  step2: any;
  step3: any;
  step4: any;
  step5: any;

  onClick(check: number) {
    //    console.log(check);
    if (check == 1) {
      this.step = 'step1';
    } else if (check == 2) {
      this.step = 'step2';
    } else {
      this.step = 'step3';
    }
    
  }
  numberstatus: boolean = true;
  clickToShowHide(){
    // this.numberstatus=!this.numberstatus;
  }

  clickToAction(){
    this.numberstatus=!this.numberstatus;
  }
  // togglehover(){
  //   if( this.dropdownstatus){
  //     this.dropdownstatus=false;
  //     // console.log(this.dropdownstatus);
  //   }else{
  //     this.dropdownstatus=false;
  //     // console.log(this.dropdownstatus);
  //   }
  // }

  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

}


