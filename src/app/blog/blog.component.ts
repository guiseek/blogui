import { AfterViewChecked, Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, Subject } from 'rxjs';
import { HighlightService } from './../shared/services/highlight.service';
import { BlogPost } from '../shared/models';
import { takeUntil, tap } from 'rxjs/operators';

declare var ng: any;

@Component({
  selector: 'uig-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit, AfterViewChecked {
  post$: Observable<BlogPost>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService,
    private highlightService: HighlightService
  ) {
    // this.post$ = this.scully.getCurrent()
    //   .pipe(
    //     tap(console.log)
    //   )
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    this.post$ = this.scully.getCurrent()
    .pipe(
      tap(console.log)
    );
    // this.post$.pipe(takeUntil(this.destroy$)).subscribe();
    this.highlightService.highlightAll();
  }
}
