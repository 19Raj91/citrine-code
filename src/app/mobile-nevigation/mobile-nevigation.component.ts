import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-nevigation',
  templateUrl: './mobile-nevigation.component.html',
  styleUrls: ['./mobile-nevigation.component.scss'],

})
export class MobileNevigationComponent implements OnInit {



  ngOnInit(): void {

  }
  constructor(@Inject(DOCUMENT) private document: Document) { }

  availableClasses: string[] = ["open-mebubar", "close-mebubar"];
  currentClassIdx: number = 0;



  // constructor() {
  //   this.bodyClass = this.availableClasses[this.currentClassIdx];
  //   this.changeBodyClass();
  // }

  // changeBodyClass() {
    // get html body element
    // const bodyElement = document.body;
    // if (bodyElement) {
    //   this.currentClassIdx = this.getNextClassIdx();
    //   const nextClass = this.availableClasses[this.currentClassIdx];
    //   const activeClass = this.availableClasses[this.getPrevClassIdx()];

      // remove existing class (needed if theme is being changed)
      // bodyElement.classList.remove(activeClass);
      // add next theme class
      // bodyElement.classList.add(nextClass);

  //     this.bodyClass = nextClass;
  //   }
  // }

  // getPrevClassIdx(): number {
  //   return this.currentClassIdx === 0
  //     ? this.availableClasses.length - 1
  //     : this.currentClassIdx - 1;
  // }

  // getNextClassIdx(): number {
  //   return this.currentClassIdx === this.availableClasses.length - 1
  //     ? 0
  //     : this.currentClassIdx + 1;
  // }














  // Outsideclick condition
  isMenuOpened: boolean = false;
  toggleMenu1(): void {
    this.isMenuOpened = !this.isMenuOpened;
    if(this.isMenuOpened){
      this.document.body.classList.add('scrollView');
    }else{
      this.document.body.classList.remove('scrollView');
    }
  }
  
  clickedOutside(): void {
    this.isMenuOpened = false;
    this.status = true;
    this.formenuslide = true;
    if(!this.isMenuOpened){
      this.document.body.classList.remove('scrollView');
    }
  }

  // Menu open and close condition
  // menuVisible = false;
  // toggleMenu() {
  //   this.menuVisible = !this.menuVisible;    
  // }

  status: boolean = true;
  clickEvent() {
    this.status = !this.status;  
    this.formenuslide = false;
   
  }

  menuClickEvent(){   
    this.isMenuOpened = false; 
    this.status = true;
}

// openmenu slide
formenuslide:boolean= true
forslide(){

}

}
