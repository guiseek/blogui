import { Component, Input } from '@angular/core';


@Component({
  selector: 'uig-table-column',
  template: `<ng-content></ng-content>`,
  // encapsulation: ViewEncapsulation.Emulated
})
export class TableColumnComponent {
  @Input() header: string;
}
