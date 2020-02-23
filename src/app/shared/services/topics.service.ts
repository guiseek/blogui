import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Topic } from './../models/topic.model';
const { routeSplit } = require('@scullyio/scully');

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private path = '/assets/logos';
  private $topics = new BehaviorSubject<Topic[]>([]);
  topics$ = this.$topics
    .asObservable()
    .pipe(distinctUntilChanged());
  public topics = [
    { logo: 'angular.svg', url: 'https://angular.io', title: 'Angular' },
    { logo: 'pwa.svg', url: 'https://www.w3.org/TR/appmanifest', title: 'PWA' },
    { logo: 'ionic.svg', url: 'https://ionicframework.com', title: 'Ionic' },
    { logo: 'npm.svg', url: 'https://npmjs.com', title: 'NPM' },
    { logo: 'html.svg', url: 'https://www.w3.org/TR/html52', title: 'HTML' },
    { logo: 'css.svg', url: 'https://www.w3.org/TR/css', title: 'CSS' },
    { logo: 'js.svg', url: 'https://www.w3.org/standards/webdesign/script', title: 'Javascript' },
    { logo: 'ts.svg', url: 'http://www.typescriptlang.org', title: 'Typescript' },
    { logo: 'nodejs.svg', url: 'https://nodejs.org/', title: 'NodeJS' },
    { logo: 'nestjs.svg', url: 'https://nestjs.com', title: 'NestJS' },
    { logo: 'firebase.svg', url: 'https://firebase.com', title: 'Firebase' },
    { logo: 'nx.svg', url: 'https://firebase.com', title: 'NX Workspaces' },
  ];

  constructor() {

  }
}
