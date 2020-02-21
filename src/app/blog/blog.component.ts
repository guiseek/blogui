import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private highlightService: HighlightService
  ) {
  }

  ngOnInit(
  ) { }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
