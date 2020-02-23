import { Component } from '@angular/core';

@Component({
  selector: 'uig-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  logos = [
    { logo: '/assets/logos/angular.svg', url: 'https://angular.io', title: 'Angular' },
    { logo: '/assets/logos/pwa.svg', url: 'https://www.w3.org/TR/appmanifest', title: 'PWA' },
    { logo: '/assets/logos/ionic.svg', url: 'https://ionicframework.com', title: 'Ionic' },
    { logo: '/assets/logos/npm.svg', url: 'https://npmjs.com', title: 'NPM' },
    { logo: '/assets/logos/html5.svg', url: 'https://www.w3.org/TR/html52', title: 'HTML' },
    { logo: '/assets/logos/css3.svg', url: 'https://www.w3.org/TR/css', title: 'CSS' },
    { logo: '/assets/logos/js.svg', url: 'https://www.w3.org/standards/webdesign/script', title: 'Javascript' },
    { logo: '/assets/logos/ts.svg', url: 'http://www.typescriptlang.org', title: 'Typescript' },
    { logo: '/assets/logos/nodejs.svg', url: 'https://nodejs.org/', title: 'NodeJS' },
    { logo: '/assets/logos/nestjs.svg', url: 'https://nestjs.com', title: 'NestJS' },
    { logo: '/assets/logos/firebase.svg', url: 'https://firebase.com', title: 'Firebase' },
    { logo: '/assets/logos/nx.svg', url: 'https://firebase.com', title: 'NX Workspaces' },
  ];
}
