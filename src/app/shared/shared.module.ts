import { TableColumnComponent } from './components/table/table-column';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HighlightService } from './services/highlight.service';
import { SignComponent } from './sign/sign.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NewsletterComponent,
    SignComponent,
    LogoComponent,
    FooterComponent,
    TableComponent,
    TableColumnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CdkTableModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    NewsletterComponent,
    SignComponent,
    LogoComponent,
    FooterComponent,
    TableComponent,
    TableColumnComponent
  ],
  providers: [
    HighlightService
  ],
  entryComponents: [LogoComponent]
})
export class SharedModule { }
