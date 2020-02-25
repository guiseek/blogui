import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../../models';

@Component({
  selector: 'uig-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PostHeaderComponent {
  @Input() post: BlogPost;
}
