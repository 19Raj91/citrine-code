import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fix_navbar_header:boolean=false; 

  constructor(private _designUtility:DesignUtilityService, private router:Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
       this.curl=this.router.url;
       if(this.curl==='/'){
        this.ishome=true;
       }else{
        this.ishome=false;
       }
      }});
   }

  ngOnInit() {

   
    this._designUtility.fix_navbar_header.subscribe(res=>{
      this.fix_navbar_header=res;
    })
     }
     
  navFixed: boolean = false;
  private scrollOffset: number = 1;
  public dropdownstatus:boolean=false;
  public ishome:boolean=false;
  public curl:string='';
 

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }


  toggledropdown(){
    this.dropdownstatus=true;
  }
  togglehover(){
    if( this.dropdownstatus){
      this.dropdownstatus=false;
      // console.log(this.dropdownstatus);
    }else{
      this.dropdownstatus=false;
      // console.log(this.dropdownstatus);
    }
  }
}
