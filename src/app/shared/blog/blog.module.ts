import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostHeaderComponent } from './post-header/post-header.component';



@NgModule({
  declarations: [PostCardComponent, PostHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [PostCardComponent, PostHeaderComponent]
})
export class SharedBlogModule { }
