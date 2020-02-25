import { byDate } from './../../shared/utils/date.utils';
import { BlogPost } from './../../shared/models/post.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HighlightService } from './../../shared/services/highlight.service';

@Component({
  selector: 'uig-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  links$: Observable<ScullyRoute[]>;

  constructor(
    private scully: ScullyRoutesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // debug current pages
    this.links$ = this.scully.available$
      .pipe(
        map(links => links.filter((link => !!link && link.published))),
        map(posts => posts.sort(byDate).reverse()),
      );
  }
  onRead(post: BlogPost) {
    console.log(post);
    this.router.navigateByUrl(post.route);
  }
}
