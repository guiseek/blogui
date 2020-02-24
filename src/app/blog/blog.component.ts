import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { HighlightService } from './../highlight.service';

declare var ng: any;

@Component({
  selector: 'uig-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  providers: [HighlightService]
})
export class BlogComponent implements OnInit, AfterViewChecked {
  post$: Observable<ScullyRoute>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService,
    private highlightService: HighlightService
  ) {
  }

  ngOnInit() {
    this.post$ = this.scully.getCurrent();
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
