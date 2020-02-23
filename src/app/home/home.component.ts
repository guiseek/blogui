import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'uig-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]>;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    // debug current pages
    this.links$ = this.scully.available$
      .pipe(
        map(links => links.filter((link => !!link && link.title))),
        tap(a => {
          console.log(a)
        })
      );
  }

}
