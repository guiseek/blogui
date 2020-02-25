import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  declarations: [PostCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [PostCardComponent]
})
export class SharedBlogModule { }
