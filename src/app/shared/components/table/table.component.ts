import { Component, ViewEncapsulation, ContentChildren, QueryList, ViewChild, Input, AfterContentInit } from '@angular/core';
import { CdkHeaderRowDef, CdkRowDef, CdkColumnDef, CdkTable, DataSource } from '@angular/cdk/table';

interface ViewValue {
  view: string;
  value: string;
}

@Component({
  selector: 'uig-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TableComponent implements AfterContentInit {
  @ContentChildren(CdkHeaderRowDef) headerRowDefs: QueryList<CdkHeaderRowDef>;
  @ContentChildren(CdkRowDef) rowDefs: QueryList<CdkRowDef<any>>;
  @ContentChildren(CdkColumnDef) columnDefs: QueryList<CdkColumnDef>;

  @ViewChild(CdkTable, { static: true }) table: CdkTable<any>;

  @Input() columns: ViewValue[];
  @Input() dataSource: DataSource<any>;
  @Input() trackBy;

  constructor() { }

  ngAfterContentInit() {
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
  }
}
