import { SharedBlogModule } from './../shared/blog/blog.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { SharedModule } from './../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [BlogComponent, PostsComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedBlogModule,
    BlogRoutingModule,
    ScullyLibModule
  ],
  // providers: [HighlightService]
})
export class BlogModule {}
