import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DesktopReauestacallbackComponent } from './desktop-reauestacallback/desktop-reauestacallback.component';
import { MobileRequestacallbackComponent } from './mobile-requestacallback/mobile-requestacallback.component';
import { DesktopTestimonialComponent } from './desktop-testimonial/desktop-testimonial.component';
import { DesktopAppointmentComponent } from './desktop-appointment-form/desktop-appointment.component';
import { MobileAppointmentFormComponent } from './mobile-appointment-form/mobile-appointment-form.component';
import { MobileHomeServiceComponent } from './mobile-home-service/mobile-home-service.component';
import { MobileHomeTestimonialComponent } from './mobile-home-testimonial/mobile-home-testimonial.component';
import { HomeShortServicesComponent } from './home-short-services/home-short-services.component';
import { MobileNevigationComponent } from './mobile-nevigation/mobile-nevigation.component';
import { MobileCtaComponent } from './mobile-cta/mobile-cta.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';
import { MobileAbouteducationComponent } from './mobile-abouteducation/mobile-abouteducation.component';
import { AboutChooseDoctorComponent } from './mobile-about-choose-doctor/about-choose-doctor.component';
import { AboutVideosComponent } from './about-videos/about-videos.component';
import { AboutMobileServiceComponent } from './about-mobile-service/about-mobile-service.component';
import { DesktopAboutEducationComponent } from './desktop-about-education/desktop-about-education.component';
import { DesktopAboutChooseDrComponent } from './desktop-about-choose-dr/desktop-about-choose-dr.component';
import { ContactComponent } from './contact/contact.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ErrorComponent } from './error/error.component';
import { BeforeAfterComponent } from './before-after/before-after.component';
import { BeforeAfterInnerComponent } from './before-after-inner/before-after-inner.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ClinicImagesComponent } from './clinic-images/clinic-images.component';
import { ServicesCategoryComponent } from './services-category/services-category.component';
import { ServicesInnerComponent } from './services-inner/services-inner.component';
import { AboutClinicComponent } from './about-clinic/about-clinic.component';
import { MobileAboutClinicFacilityComponent } from './mobile-about-clinic-facility/mobile-about-clinic-facility.component';
import { DesktopTechSectionComponent } from './technology-module/desktop-tech-section/desktop-tech-section.component';
import { MobileHomeDrComponent } from './mobile-home-dr/mobile-home-dr.component';
import { TechnologyCategoryComponent } from './technology-module/technology-category/technology-category.component';
import { WrittenTestimonialComponent } from './written-testimonial/written-testimonial.component';
import { VideoTestimonialsComponent } from './video-testimonials/video-testimonials.component';
import { VideosComponent } from './videos/videos.component';
import { MobileCarouselComponent } from './mobile-carousel/mobile-carousel.component';
import { serviceapi } from './api/service-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';
import { ClickOutsideDirective } from './clickOutside.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { DemoscrollComponent } from './demoscroll/demoscroll.component';
import { ServicerouteCommanComponent } from './serviceroute-comman/serviceroute-comman.component';
import { LhrComponent } from './lp/lhr/lhr.component';
import { HairComponent } from './lp/hair/hair.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DesktopReauestacallbackComponent,
    MobileRequestacallbackComponent,
    DesktopTestimonialComponent,
    DesktopAppointmentComponent,
    MobileAppointmentFormComponent,
    MobileHomeServiceComponent,
    MobileHomeTestimonialComponent,
    HomeShortServicesComponent,
    MobileNevigationComponent,
    MobileCtaComponent,
    AboutDoctorComponent,
    MobileAbouteducationComponent,
    AboutChooseDoctorComponent,
    AboutVideosComponent,
    AboutMobileServiceComponent,
    DesktopAboutEducationComponent,
    DesktopAboutChooseDrComponent,
    ContactComponent,
    BookAppointmentComponent,
    ThankyouComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ErrorComponent,
    BeforeAfterComponent,
    BeforeAfterInnerComponent,
    BlogComponent,
    BlogDetailsComponent,
    ClinicImagesComponent,
    ServicesCategoryComponent,
    ServicesInnerComponent,
    ServicerouteCommanComponent,
    AboutClinicComponent,
    MobileAboutClinicFacilityComponent,
    DesktopTechSectionComponent,
    TechnologyCategoryComponent,
    MobileHomeDrComponent,
    WrittenTestimonialComponent,
    VideoTestimonialsComponent,
    VideosComponent,
    ServiceComponent,
    ClickOutsideDirective,
    DemoscrollComponent,
    MobileCarouselComponent,
    LhrComponent,
    HairComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LazyLoadImageModule,
    FormsModule,
    NgxPaginationModule,

  ],

  exports:[

  ],

  providers: [
    serviceapi,
    HttpClientModule,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}


