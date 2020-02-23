import { Component, Input } from '@angular/core';

@Component({
  selector: 'uig-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input('width') width = '100%';
}
