import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TechnologyCategoryComponent } from './technology-category/technology-category.component';
import { TechnologyInnerComponent } from './technology-inner/technology-inner.component';
import { MobileTechSectionComponent } from './mobile-tech-section/mobile-tech-section.component';
// import { DesktopTechSectionComponent } from './desktop-tech-section/desktop-tech-section.component';




@NgModule({
    declarations: [
        // TechnologyCategoryComponent,
        TechnologyInnerComponent,
        MobileTechSectionComponent,
        // DesktopTechSectionComponent
    ],
    imports: [
        CommonModule,
      
    ]
})
export class TechnologyModuleModule { }
