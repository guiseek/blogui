import { BlogPost } from './../../models/post.model';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'uig-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PostCardComponent implements OnInit {
  @HostBinding('class.card') cardClass = true;


  @Input() post: BlogPost;

  @Output() read = new EventEmitter<BlogPost>();

  constructor() { }

  ngOnInit(): void {
  }

}
