import { TechDataSource } from './../shared/services/tech.datasource';
import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { byDate } from '../shared/utils';


@Component({
  selector: 'uig-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]>;
  latest: ScullyRoute = null;
  techColumns = [
    { view: 'Nome', value: 'name' },
    { view: 'Desc', value: 'desc' },
    // { view: 'Docs', value: 'docs' }
  ];
  public techDataSource = new TechDataSource();
  constructor(
    private scully: ScullyRoutesService,
    // private tech: TechService
  ) { }

  ngOnInit(): void {
    this.links$ = this.scully.available$
      .pipe(
        take(1),
        map(links =>
          links.filter(link => link.published)),
        map(posts => posts.sort(byDate).reverse()),
      );
  }
}
