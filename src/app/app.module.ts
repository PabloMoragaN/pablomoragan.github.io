import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { SpinnerContainer } from './components/about/spinner-container/spinner-container.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { EmailDialogComponent } from './components/email-dialog/email-dialog.component';
import { ResumePdfDialogComponent } from './components/resume/resume-pdf-dialog/resume-pdf-dialog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { VirtualizenBrokerComponent } from './components/portfolio/virtualizen-broker/virtualizen-broker.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    SpinnerContainer,
    ResumeComponent,
    EmailDialogComponent,
    ResumePdfDialogComponent,
    PortfolioComponent,
    VirtualizenBrokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  entryComponents:[EmailDialogComponent,ResumePdfDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
