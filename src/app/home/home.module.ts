import { SharedBlogModule } from './../shared/blog/blog.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { CdkTableModule } from '@angular/cdk/table';



@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CdkTableModule,
    SharedModule,
    SharedBlogModule
  ]
})
export class HomeModule { }
