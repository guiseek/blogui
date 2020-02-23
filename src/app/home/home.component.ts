import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Tech } from './../shared/models/tech.model';
import { TechService } from './../shared/services/tech.service';

@Component({
  selector: 'uig-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]>;
  latest: ScullyRoute = null;
  tech$: Observable<Tech[]>;
  constructor(
    private scully: ScullyRoutesService,
    private tech: TechService
  ) { }

  ngOnInit(): void {
    // debug current pages
    this.links$ = this.scully.available$
      .pipe(
        map(links => links.filter(link => link.published)),
        map(posts => {
          if (!this.latest) {
            this.latest = posts.shift();
          }
          return posts;
        }),
        tap(a => {
          console.log(a);
        })
      );

    this.tech$ = this.tech.items$;
  }

}
