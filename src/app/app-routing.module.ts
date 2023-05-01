import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AboutVideosComponent } from './about-videos/about-videos.component';
import { ServicesCategoryComponent } from './services-category/services-category.component';
import { ServicesInnerComponent } from './services-inner/services-inner.component';
import { AboutClinicComponent } from './about-clinic/about-clinic.component';
import { MobileAboutClinicFacilityComponent } from './mobile-about-clinic-facility/mobile-about-clinic-facility.component';
import { DesktopTechSectionComponent } from './technology-module/desktop-tech-section/desktop-tech-section.component';
import { TechnologyCategoryComponent } from './technology-module/technology-category/technology-category.component';
import { MobileHomeDrComponent } from './mobile-home-dr/mobile-home-dr.component';
import { WrittenTestimonialComponent } from './written-testimonial/written-testimonial.component';
import { VideoTestimonialsComponent } from './video-testimonials/video-testimonials.component';
import { VideosComponent } from './videos/videos.component';
import { ServiceComponent } from './service/service.component';
import { DemoscrollComponent } from './demoscroll/demoscroll.component';
import { LhrComponent } from './lp/lhr/lhr.component';
import { HairComponent } from './lp/hair/hair.component';
import { ServicerouteCommanComponent } from './serviceroute-comman/serviceroute-comman.component';
import { MobileCarouselComponent } from './mobile-carousel/mobile-carousel.component';


const routes: Routes = [


  { path: "", component: HomeComponent },
  // { path: "header", component: HeaderComponent },
  // { path: "footer", component: FooterComponent },
  { path: "desktop-requestcallback", component: DesktopReauestacallbackComponent },
  { path: "mobile-requestcallback", component: MobileRequestacallbackComponent },
  { path: "desktop-testimonial", component: DesktopTestimonialComponent },
  { path: "desktop-appointment", component: DesktopAppointmentComponent },
  { path: "mobile-appointmrntform", component: MobileAppointmentFormComponent },
  { path: "home-service", component: MobileHomeServiceComponent },
  { path: "mobile-testimonialhome", component: MobileHomeTestimonialComponent },
  { path: "home-short-service", component: HomeShortServicesComponent },
  { path: "mobile-nevigation", component: MobileNevigationComponent },
  { path: "cta", component: MobileCtaComponent },
  { path: "dermatologist-in-gurgaon", component: AboutDoctorComponent },
  { path: "education", component: MobileAbouteducationComponent },
  { path: "about-choose-doctor", component: AboutChooseDoctorComponent },
  { path: "about-services-mobile", component: AboutMobileServiceComponent },
  { path: "desktop-education", component: DesktopAboutEducationComponent },
  { path: "desktopchoose-dr", component: DesktopAboutChooseDrComponent },
  { path: "contact", component: ContactComponent },
  { path: "book-an-appointment", component: BookAppointmentComponent },
  { path: "thankyou", component: ThankyouComponent },
  { path: "trems-condition", component: TermsConditionsComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "real-results", component: BeforeAfterComponent },
  { path: "result/:name", component: BeforeAfterInnerComponent },
  { path: "blog", component: BlogComponent },
  { path: "blog-post/:name", component: BlogDetailsComponent },
  { path: "clinic-gallery", component: ClinicImagesComponent },
  { path: "about-videos", component: AboutVideosComponent },
  { path: "skin-clinic-in-gurgaon", component: AboutClinicComponent },
  { path: "about-facility", component: MobileAboutClinicFacilityComponent },
  { path: "desktop-tech", component: DesktopTechSectionComponent },
  { path: "technologies", component: TechnologyCategoryComponent },
  { path: "homedr", component: MobileHomeDrComponent },
  { path: "testimonials", component: WrittenTestimonialComponent },
  { path: "video-testimonial", component: VideoTestimonialsComponent },
  { path: "videos", component: VideosComponent },
  {path: "mobile-slider", component:MobileCarouselComponent},
  { path: "services", component: ServiceComponent },
  { path: "lhr", component: LhrComponent },
  {path: "hair", component:HairComponent},
  { path: "demoscroll", component: DemoscrollComponent },


  { path: 'about-clinic', redirectTo:'skin-clinic-in-gurgaon', pathMatch:'full'},
  { path: 'about-doctor', redirectTo:'dermatologist-in-gurgaon', pathMatch:'full'},
  { path: "404", component: ErrorComponent },

  // {
  //   path: '**',
  //   redirectTo: '404',
  //   pathMatch: 'full'
  //  },
  { path: ':name', component: ServicerouteCommanComponent, data: {some_data: 'serviceRoute'}},


  { path: 'aging-skin/dermal-fillers', redirectTo:'dermal-fillers-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'hair-treatments/dermaroller', redirectTo:'dermaroller-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'general-dermatology/psoriasis-treatment-gurgaon', redirectTo:'psoriasis-treatment-gurgaon', pathMatch:'full'},
  { path: 'skin-allergy/eczema', redirectTo:'eczema-treatment-in-gurgaon', pathMatch:'full'},

  { path: 'medical-facial/hydrafacial-in-gurgaon', redirectTo:'hydrafacial-in-gurgaon', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/dark-spots-removal-treatment-in-gurgaon', redirectTo:'dark-spots-removal-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/skin-lightening-treatment-gurgaon', redirectTo:'skin-lightening-treatment-gurgaon', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/hyperpigmentation', redirectTo:'hyperpigmentation-treatment-in-gurgaon', pathMatch:'full'},

  { path: 'acne-scars/laser-resurfacing', redirectTo:'laser-resurfacing-in-gurgaon', pathMatch:'full'},
  { path: 'hair-treatments/hair-transplant-gurgaon', redirectTo:'hair-transplant-gurgaon', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/dark-circles-treatment-gurgaon', redirectTo:'dark-circles-treatment-gurgaon', pathMatch:'full'},
  { path: 'aging-skin/vampire-facelift', redirectTo:'vampire-facelift-treatment-in-gurgaon', pathMatch:'full'},

  { path: 'fairness-and-pigmentation/photofacial', redirectTo:'photofacial-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/freckles', redirectTo:'freckles-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'aging-skin/thread-lift-treatment-gurgaon', redirectTo:'thread-lift-treatment-gurgaon', pathMatch:'full'},
  { path: 'aging-skin/mesotherapy', redirectTo:'mesotherapy-treatment-in-gurgaon', pathMatch:'full'},

  { path: 'infections/fungal-infections', redirectTo:'fungal-infections-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'skin-allergy/urticaria', redirectTo:'urticaria-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'skin-tightening-and-stretch-marks/skin-tightening-treatment-in-gurgaon', redirectTo:'skin-tightening-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'acne-scars/skin-resurfacing', redirectTo:'skin-resurfacing-treatment-in-gurgaon', pathMatch:'full'},

  { path: 'medical-facial/chemical-peel-gurgaon', redirectTo:'chemical-peel-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/laser-toning', redirectTo:'laser-toning-in-gurgaon', pathMatch:'full'},
  { path: 'skin-allergy/atopic-dermatitis', redirectTo:'atopic-dermatitis-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'acne-scars/acne', redirectTo:'acne-treatment-in-gurgaon', pathMatch:'full'},

  { path: 'aging-skin/anti-wrinkle-injection', redirectTo:'anti-wrinkle-injection-in-gurgaon', pathMatch:'full'},
  { path: 'unwanted-body-hair/laser-hair-reduction', redirectTo:'laser-hair-removal-in-gurgaon', pathMatch:'full'},
  { path: 'skin-tightening-and-stretch-marks/stretch-marks-reduction', redirectTo:'stretch-marks-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'general-dermatology/ingrown-toe-nail', redirectTo:'ingrown-toe-nail', pathMatch:'full'},

  { path: 'aging-skin/microdermabrasion', redirectTo:'microdermabrasion-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/skin-whitening-treatment-gurgaon', redirectTo:'skin-whitening-treatment-gurgaon', pathMatch:'full'},
  { path: 'aging-skin/lip-enhancement-surgery-gurgaon', redirectTo:'lip-enhancement-surgery-gurgaon', pathMatch:'full'},

  { path: 'medical-facial/the-oxygen-facial', redirectTo:'oxygen-facial-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'medical-facial/tattva-miracle-therapy', redirectTo:'tattva-miracle-therapy', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/melasma', redirectTo:'melasma-treatment-in-gurgaon', pathMatch:'full'},

  { path: 'hair-treatments/fut-hair-transplant-gurgaon', redirectTo:'fut-hair-transplant-in-gurgaon', pathMatch:'full'},
  { path: 'fairness-and-pigmentation/carbon-peel', redirectTo:'carbon-peel-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'acne-scars/scars', redirectTo:'acne-scar-treatment-in-gurgaon', pathMatch:'full'},
  { path: 'medical-facial/aquajet-oxy-peel-facial', redirectTo:'aquajet-oxy-peel-facial-in-gurgaon', pathMatch:'full'},

  { path: 'hair-treatments/growth-factor-injection', redirectTo:'growth-factor-injection', pathMatch:'full'},
  { path: 'hair-treatments/fue-hair-transplant-gurgaon', redirectTo:'fue-hair-transplant-in-gurgaon', pathMatch:'full'},
  { path: 'hair-treatments/alopecia-areata-treatment-gurgaon', redirectTo:'alopecia-areata-treatment-gurgaon', pathMatch:'full'},
  { path: 'medical-facial/pumpkin-peel-facial', redirectTo:'pumpkin-peel-facial-treatment-in-gurgaon', pathMatch:'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
