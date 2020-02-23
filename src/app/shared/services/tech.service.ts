import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tech } from './../models/tech.model';

@Injectable({
  providedIn: 'root'
})
export class TechService {
  private path = '/assets/logos';
  items$: Observable<Tech[]>;

  constructor(private http: HttpClient) {
    this.items$ = this.http.get<Tech[]>('assets/resources/tech.resource.json')
      .pipe(map(items =>
        items.map(({ logo, ...item }) =>
          ({ ...item, logo: `${this.path}/${logo}` }))));
  }
}
