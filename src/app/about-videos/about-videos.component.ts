
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-about-videos',
  templateUrl: './about-videos.component.html',
  styleUrls: ['./about-videos.component.scss']
})
export class AboutVideosComponent implements OnInit {
  showMe: any;


  // @ViewChild("videoPlayer")
  // videoplayer!: ElementRef;
  videoSatSource: any = 'https://www.youtube.com/embed/ubaBG6enedk';


  toggleVideo(val: any) {
    // alert("ssssssssss" + val);


    this.videoSatSource = val;

    // this.videoplayer.nativeElement.play();
    this.document.body.classList.remove('test');
  }

  videCheck(val: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(val);
  }



  isPlay: boolean = false;
  constructor(private _eref: ElementRef, private sanitizer: DomSanitizer, @Inject(DOCUMENT) private document: Document) { }





  ngOnInit(): void {
    this.document.body.classList.add('test');
  }
  showMes(type: any) {
    // let myTag = this._eref.nativeElement.querySelector("iframe");
    // myTag.find('iframe').attr('src', '');
    // myTag.find('iframe').attr('src', myTag);
    // myTag.classList.remove('');
    // if (type == 'show') {
    //   this.showMe = true;
    // } else if (type == 'hide') {
    //   alert(type);
    //   this.showMe = false;
    // }
    var myTag = this._eref.nativeElement.querySelector("#my_video_1");
    // var myVideo = document.getElementById("my_video_1");

    myTag.pause();

  }


}


