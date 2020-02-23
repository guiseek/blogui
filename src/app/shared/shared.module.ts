import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SignComponent } from './sign/sign.component';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NewsletterComponent,
    SignComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    NewsletterComponent,
    SignComponent,
    LogoComponent
  ],
  entryComponents: [LogoComponent]
})
export class SharedModule { }
